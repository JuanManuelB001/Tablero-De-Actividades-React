import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import "./kanban.scss";
import { Card } from "./Card";
import { useEffect, useState } from "react";
import { LocalStorage } from "./LocalStorage";

export function Kanban() {

  const [data, setData] = useState(LocalStorage);
  useEffect(()=>{
    localStorage.setItem("mockData",JSON.stringify(data));
  }, [data]);

 const onDragEnd = (result) => {
  if (!result.destination) return;

  const { source, destination } = result;

  const sourceColIndex = data.findIndex(
    (col) => col.id === source.droppableId
  );
  const destinationColIndex = data.findIndex(
    (col) => col.id === destination.droppableId
  );

  const newData = [...data];

  if (source.droppableId === destination.droppableId) {
    const tasks = Array.from(newData[sourceColIndex].tasks);
    const [moved] = tasks.splice(source.index, 1);
    tasks.splice(destination.index, 0, moved);
    newData[sourceColIndex] = {
      ...newData[sourceColIndex],
      tasks,
      last_data: new Date().toISOString().split("T")[0], // ✅
    };
  } else {
    const sourceTasks = Array.from(newData[sourceColIndex].tasks);
    const destTasks = Array.from(newData[destinationColIndex].tasks);

    const [moved] = sourceTasks.splice(source.index, 1);
    destTasks.splice(destination.index, 0, moved);

    newData[sourceColIndex] = {
      ...newData[sourceColIndex],
      tasks: sourceTasks,
      last_data: new Date().toISOString().split("T")[0], // opcional
    };

    newData[destinationColIndex] = {
      ...newData[destinationColIndex],
      tasks: destTasks,
      last_data: new Date().toISOString().split("T")[0], // ✅
    };
  }

  setData(newData);
};


  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="kanban">
        {data.map((section) => (
          <Droppable key={section.id} droppableId={String(section.id)}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="kanban_section"
              >
                <div className="kanban_section_title">{section.title}</div>
                <span className="kanban_section_hint">
                  Última modificación: {section.last_data}
                </span>
                <div className="kanban_section_content">
                  {section.tasks.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={String(task.id)}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            ...provided.draggableProps.style,
                            opacity: snapshot.isDragging ? 0.5 : 1,
                          }}
                        >
                          <Card props={task} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}

import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useState } from "react";
import "./kanban.scss";
import mockData from "../data/mockData";
import { Card } from "./Card";
export function Kanban() {
  const [data, setData] = useState(mockData);

  const onDragEnd = (result) => {
  if (!result.destination) return;

  const { source, destination } = result;

  // ===== MISMA COLUMNA =====
  if (source.droppableId === destination.droppableId) {
    const colIndex = data.findIndex(
      (col) => col.id === source.droppableId
    );

    const column = data[colIndex];
    const tasks = [...column.tasks];

    const [removed] = tasks.splice(source.index, 1);
    tasks.splice(destination.index, 0, removed);

    const newData = [...data];
    newData[colIndex] = {
      ...column,
      tasks,
    };

    setData(newData);
    return;
  }

  // ===== ENTRE COLUMNAS =====
  const sourceColIndex = data.findIndex(
    (col) => col.id === source.droppableId
  );
  const destinationColIndex = data.findIndex(
    (col) => col.id === destination.droppableId
  );

  const sourceCol = data[sourceColIndex];
  const destinationCol = data[destinationColIndex];

  const sourceTasks = [...sourceCol.tasks];
  const destinationTasks = [...destinationCol.tasks];

  const [removed] = sourceTasks.splice(source.index, 1);
  destinationTasks.splice(destination.index, 0, removed);

  const newData = [...data];
  newData[sourceColIndex] = {
    ...sourceCol,
    tasks: sourceTasks,
  };
  newData[destinationColIndex] = {
    ...destinationCol,
    tasks: destinationTasks,
  };

  setData(newData);
};

  return (
  <DragDropContext onDragEnd={onDragEnd} >
  <div className="kanban">
    {data.map((section) => (
      <Droppable key={section.id} droppableId={String(section.id)}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="kanban_section"
          >
            <div className="kanban_section_title">
              {section.title}
            </div>
<span className="kanban_section_hint">
                texto
              </span>
            <div className="kanban_section_content">
              {section.tasks?.map((task, index) => (
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
                      <Card>{task.title}</Card>
              
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

  )
}

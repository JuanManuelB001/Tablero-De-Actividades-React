import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useState } from "react";
import "./kanban.scss";
import mockData from "../data/mockData";

export function Kanban() {
  const [data, setData] = useState(mockData);

  const onDragEnd = (result) => {
    // COMPROBAR MOVIMIENTO VALIDO
    if (!result.destination) return;

    const { source, destination } = result;

    // MOVIMIENTO MISMA COLUMNA
    if (source.droppableId === destination.droppableId) {
      const colIndex = data.findIndex((col) => col.id === source.droppableId);

      const column = data[colIndex];
      const tasks = [...column.taks];

      const [removed] = tasks.splice(source.index, 1);
      // AGREGAR EL TAREA EN LA NUEVA POSICION
      tasks.splice(destination.index, 0, removed);

      const newData = [...data];
      newData[colIndex] = {
        ...column,
        tasks,
      };
    }

    // MOVIEMIENTO ENTRE COLUMNAS
    // OPTENER INDEX SOURCE-DESTINATION
    const sourceColIndex = data.findIndex(
      (col) => col.id === source.droppableId
    );

    const destinationColIndex = data.findIndex(
      (col) => col.id === destination.droppableId
    );

    const sourceCol = data[sourceColIndex];
    const destinationCol  = data[destinationColIndex];

    const sourceTasks = [...sourceCol];
    const destinationTaks = [...destinationCol];
    
    // ACTUALIZAR SOURCE
    const [sourceRemoved] = sourceTasks.splice(source.index,1);

    //ACTUALIZR DESTINATION
    destinationTaks.splice(destination.index,0,sourceRemoved);

    //ACTUALIZAR DATOS SOURCE/DESTINATION
    const newData = [...data];
    newData[sourceColIndex] = {
        ...sourceCol,
        tasks: sourceTasks,
    };
    newData[destinationColIndex] = {
        ...destinationCol,
        tasks: destinationTaks,
    }
  };
  return <div>

  </div>;
}

import { v4 as uuidv4 } from "uuid";

const mockData = [
  {
    id: uuidv4(),
    title: "💼 Por Hacer",
    tasks: [
      {
        id: uuidv4(),
        title: "Estudian JavaScript",
      },
      {
        id: uuidv4(),
        title: "Incribirse al curso de sjidl",
      },
      {
        id: uuidv4(),
        title: "Estudian HTML+CSS",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "✏️ En progreso",
    tasks: [
      {
        id: uuidv4(),
        title: "Estudian JavaScript",
      },
      {
        id: uuidv4(),
        title: "Incribirse al curso de sjidl",
      },
      {
        id: uuidv4(),
        title: "Estudian HTML+CSS",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "✅ Completado",
    tasks: [
      {
        id: uuidv4(),
        title: "Estudian JavaScript",
      },
      {
        id: uuidv4(),
        title: "Incribirse al curso de sjidl",
      },
      {
        id: uuidv4(),
        title: "Estudian HTML+CSS",
      },
    ],
  },
];

export default mockData;

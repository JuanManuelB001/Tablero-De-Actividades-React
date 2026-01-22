import { v4 as uuidv4 } from "uuid";

const mockData = [
  {
    id: uuidv4(),
    title: "💼 Por Hacer",
    color: "#f87171", // rojo
    last_data: "2024-01-01",
    tasks: [
      {
        id: uuidv4(),
        title: "Estudian JavaScript",
        charge: "Enrique Jaramillo",
      },
      {
        id: uuidv4(),
        title: "Incribirse al curso de sjidl",
        charge: "Fernando Solórzano",
      },
      {
        id: uuidv4(),
        title: "Estudian HTML+CSS",
        charge: "Fernando Solórzano",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "✏️ En progreso",
    color: "#60a5fa", // azul
    last_data: "2024-01-10",
    tasks: [
      {
        id: uuidv4(),
        title: "Estudian JavaScript",
        charge: "Enrique Jaramillo",
      },
      {
        id: uuidv4(),
        title: "Incribirse al curso de sjidl",
        charge: "Angélica Blandón",
      },
      {
        id: uuidv4(),
        title: "Estudian HTML+CSS",
        charge: "Caterin Escobar",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "✅ Completado",
    color: "#34d399", // verde
    last_data: "2024-01-06",
    tasks: [
      {
        id: uuidv4(),
        title: "Estudian JavaScript",
        charge: "Caterin Escobar",
      },
      {
        id: uuidv4(),
        title: "Incribirse al curso de sjidl",
        charge: "Angélica Blandón",
      },
      {
        id: uuidv4(),
        title: "Estudian HTML+CSS",
        charge: "Enrique Jaramillo",
      },
    ],
  },
];

export default mockData;

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { LocalStorage } from "./LocalStorage";

export function CrearTarea() {
  const [data, setData] = useState(LocalStorage);

  const navigate = useNavigate();
  const [form, setForm] = useState({
    actividad: "",
    encargado: "",
    estado: "hacer",
  });
  useEffect(()=>{
    localStorage.setItem('mockData', JSON.stringify(data));
  }, [form])
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    const newTask = {
      id: uuidv4(),
      title: form.actividad,
      charge: form.encargado,
    };


    const estadoToTitle = {
      hacer: "💼 Por Hacer",
      progreso: "✏️ En progreso",
      completado: "✅ Completado",
    };

    const newData = data.map((col) => {
      if (col.title === estadoToTitle[form.estado]) {
        return {
          ...col,
          tasks: [...col.tasks, newTask], // Append al array de tasks
        };
      }
      return col; 
    });

    
    setData(newData);
    console.log(data);
    setForm({ actividad: "", encargado: "", estado: "hacer" });

    navigate(-1);
  };

  return (
    <div className="page slide-in">
      <h2>Crear Tarea</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="actividad">Actividad:</label>
        <input
          type="text"
          id="actividad"
          name="actividad"
          value={form.actividad}
          onChange={handleChange}
          required
        />

        <label htmlFor="encargado">Encargado:</label>
        <input
          type="text"
          id="encargado"
          name="encargado"
          value={form.encargado}
          onChange={handleChange}
          required
        />

        <label htmlFor="estado">Estado:</label>
        <select
          id="estado"
          name="estado"
          value={form.estado}
          onChange={handleChange}
        >
          <option value="hacer">Por Hacer</option>
          <option value="progreso">En Progreso</option>
          <option value="completado">Completado</option>
        </select>

        <button type="submit">Aceptar</button>
      </form>
    </div>
  );
}

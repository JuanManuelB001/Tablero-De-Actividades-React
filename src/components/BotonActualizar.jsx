export function BotonActualizar({ data, setData }) {
  const handleActualizar = () => {
    setData([...data]); // crea una nueva referencia del array
  };

  return (
    <button onClick={handleActualizar}>
      Actualizar Kanban
    </button>
  );
}

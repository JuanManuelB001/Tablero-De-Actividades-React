import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Kanban } from "./components/Kanban";
import "./App.css";
import { BotonCrearTarea } from "./components/BotonCrearTarea";
import mockData from "./data/mockData";
import { BotonActualizar } from "./components/BotonActualizar";
import { Title } from "./components/Title";
function App() {
  const [data, setData] = useState(mockData);

  return (
    <div className="page slide-in">
      <Title/>
      <Kanban data={data} setData={setData} />
      <BotonCrearTarea />
    </div>
  );
}

export default App;

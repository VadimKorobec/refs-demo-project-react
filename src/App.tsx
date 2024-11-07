import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";

function App() {
  const [show, setShow] = useState<boolean>(false);

  const handleClick = () => {
    setShow(true);
  };

  
  return (
    <main className="h-screen my-8 flex gap-8 ">
      <ProjectsSidebar onClick={handleClick} />
      {show ? <NewProject /> : <NoProjectSelected onClick={handleClick} />}
    </main>
  );
}

export default App;

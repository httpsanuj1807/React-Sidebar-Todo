import NewTasks from "./NewTask";
import { useRef } from "react";
import Modal from "./Modal";

function Tasks({onAddTask,project, deleteTask}) {
  const modal = useRef();  
  function showErrorMessage() {
    modal.current.open();
  }
  return (
    <section>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for input field.
        </p>
      </Modal>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTasks onAddTask={onAddTask} project={project} showErrorMessage={showErrorMessage}/>

      {project.tasks.length == 0 ? (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      ) : (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {project.tasks.map((task, index) => {
            return <li key={index} className="flex justify-between my-4">
            <span>{task}</span>
            <button onClick={()=>{
              deleteTask(index,project)
            }} className="text-stone-700 hover:text-red-500">Clear</button>
            </li>;
          })}
        </ul>
      )}
    </section>
  );
}

export default Tasks;

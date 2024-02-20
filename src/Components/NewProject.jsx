import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";


function NewProject({onSaveProject,onCancelProject}){

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modal = useRef();

    function handleSave(){
        let projectTitle = title.current.value;
        let projectDescription = description.current.value;
        let projectDueDate = dueDate.current.value;

        // validation....
        if(projectTitle.trim() === '' || projectDescription.trim() === '' || projectDueDate.trim() === ''){
            modal.current.open();
            return;
        }
        
        const projectData = {
            title : projectTitle,
            description : projectDescription,
            dueDate : projectDueDate,
            tasks : []
        }
        onSaveProject(projectData);
    }

    return(
        <>
        <Modal ref={modal} buttonCaption="Okay"> 
            <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
            <p className='text-stone-600 mb-4'>Oops ... looks like you forgot to enter a value.</p>
            <p className='text-stone-600 mb-4'>Please make sure you provide a valid value for every input field.</p>
        </Modal>
            <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                
                <li><button onClick={onCancelProject} className="text-stone-800 hover:text-stone-950">Cancel</button></li>

                <li><button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
            </menu>
            <div>
                <Input type="text" ref={title} labelText="Title" />
                <Input ref={description} labelText="Description" isTextArea />
                <Input type="date" ref={dueDate} labelText="Due Date" />
            </div>
        </div>
        </>
    );
}
export default NewProject;
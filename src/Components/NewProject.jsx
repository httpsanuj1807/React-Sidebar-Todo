import { useRef } from "react";
import Input from "./Input";


function NewProject({onSaveProject}){

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave(){
        let projectTitle = title.current.value;
        let projectDescription = description.current.value;
        let projectDueDate = title.current.value;
        // validation....
        const projectData = {
            title : projectTitle,
            description : projectDescription,
            dueDate : projectDueDate,
        }
        onSaveProject(projectData);
    }

    return(
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="text-stone-800 hover:text-stone-950">Cancel</button></li>
                <li><button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
            </menu>
            <div>
                <Input type="text" ref={title} labelText="Title" />
                <Input ref={description} labelText="Description" isTextArea />
                <Input type="date" ref={dueDate} labelText="Due Date" />
            </div>
        </div>
    );
}
export default NewProject;
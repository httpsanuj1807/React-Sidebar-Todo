import {forwardRef, useRef} from 'react';
const NewTask = forwardRef(
    function NewTasks({onAddTask, showErrorMessage}, ref){
        const input = useRef();
        return(
            <div className="flex items-center gap-4">
                <input ref={input} type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
                <button onClick={()=>{
                    if(input.current.value === ""){
                        showErrorMessage();
                        return;
                    }
                    onAddTask(input.current.value)
                    input.current.value = "";   
                }} className="text-stone-700 hover:text-stone-950">Add Task</button>
            </div>
        );
    }  
) 
export default NewTask;
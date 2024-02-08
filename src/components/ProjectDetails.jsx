import {useRef, useState} from "react";

export default function ProjectDetails({projects, projectName, onProjectDelete}){
    const clickedProject = projects.find(project => project.name === projectName);
    const [tasks, setTasks] = useState([]);
    const taskInput = useRef();
    function handelTasksClick(){
        if (taskInput.current.value.trim()){
            setTasks(prevState => {
                return[
                    ...prevState,
                    taskInput.current.value
                ]
            });

        }
    }

    function handelTaskDelete(index){
        setTasks( prevState => {
            const deletedArray = [...prevState];
            deletedArray.splice(index, 1);
            return deletedArray;
        })
    }

    function formatDate(dateString){
        let date =  new Date(dateString);
        let options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    return(
        <div className="flex flex-col w-[35rem]">
            <header className="w-full pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{clickedProject.name}</h1>
                    <button onClick={() => onProjectDelete(clickedProject.name)}>Delete</button>
                </div>

                <p className="text-stone-600 mb-4">{formatDate(clickedProject.dueDate)}</p>
                <p className="whitespace-pre-wrap">{clickedProject.description}</p>

            </header>
            <div className="mb-4">
                <h2 className="text-xl font-bold text-stone-700 my-4">Tasks</h2>
                <input className="w-64 px-2 py-1 rounded-sm bg-stone-200 mr-2" ref={taskInput}/>
                <button onClick={handelTasksClick}>Add tasks</button>
            </div>

            {tasks.length > 0 ? <ul className="p-4 mt-8 rounded-md bg-stone-100">
                {tasks.map((task, index) => {
                    return <li className="flex items-center justify-between my-4" key={index}>
                        <p>{task}</p>
                        <button className="text-stone-700 hover:text-red-500" onClick={() => handelTaskDelete(index)}>Clear</button>
                    </li>
                })}
            </ul> : <p className={"text-stone-800 mb-4"}>This project has not have any tasks yet.</p>}
        </div>
    )
}
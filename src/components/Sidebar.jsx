export default function Sidebar({onNewProjectClick, projectData, onProjectDetails, selectedProject}){

    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your projects</h2>
            <button onClick={onNewProjectClick}
                    className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
                + Add Project
            </button>
            <ul className="mt-8">
                {

                    projectData.map(project => {
                        let  cssClasses = "text-left p-2 w-full hover:text-stone-950";
                        if (selectedProject === project.name){
                            cssClasses += " bg-stone-800 text-stone-200"
                        }else{
                            cssClasses += "text-stone-600"
                        }
                        return (
                    <li key={project.name}>
                        <button onClick={() => {
                            onProjectDetails(project.name)
                        }} className={cssClasses}>{project.name}</button>
                    </li>)
                })}
            </ul>
        </aside>
    )
}
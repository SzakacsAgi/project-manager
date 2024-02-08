import image from "../assets/no-projects.png";

export default function NoProjectSelected({onAddProject}){
    return (
        <div className="flex justify-center flex-col justify-items-center mx-auto gap-4">
            <img src={image} className="w-16 h-16 object-contain mx-auto"/>
            <h1 className="text-3xl font-bold text-stone-600 mb-2">No Project Selected</h1>
            <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
            <button onClick={onAddProject}
                    className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
                Create new project
            </button>
        </div>
    )
}
import Sidebar from "./components/Sidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import {useRef, useState} from "react";
import ProjectDetails from "./components/ProjectDetails.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import Modal from "./components/Modal.jsx";
const PROJECT_DATA = [];

function App() {
    const [addProjectIsClicked, setAddProjectIsClicked] = useState(false);
    const [clickedProjectName, setClickedProjectName] = useState('');

    const modal = useRef();

    function handelAddProjectClick() {
        setAddProjectIsClicked(true);
        setClickedProjectName('');
    }

    function handelSaveProjectClick(name, description, dueDate) {
        if(name && description && dueDate){
            setAddProjectIsClicked(false);
            PROJECT_DATA.push(
                {
                    name: name,
                    description: description,
                    dueDate: dueDate
                }
            )
        }

    }

    function handelCancelProjectClick() {
        setAddProjectIsClicked(false);
    }

    function handelProjectDetails(projectName) {
        setAddProjectIsClicked(false);
        setClickedProjectName(projectName);
    }

    function onProjectDelete(projectName) {
        const projectToDelete = PROJECT_DATA.findIndex(project => project.name === projectName);
        PROJECT_DATA.splice(projectToDelete, 1);
        setClickedProjectName('');
    }

    function detectViewToShow(){
        if (addProjectIsClicked) {
            return <NewProject onProjectSave={handelSaveProjectClick} onProjectCancel={handelCancelProjectClick}/>;
        } else if (clickedProjectName) {
            return <ProjectDetails projects={PROJECT_DATA} projectName={clickedProjectName} onProjectDelete={onProjectDelete}/>
        } else{
            return <NoProjectSelected onAddProject={handelAddProjectClick}/>;
        }
    }

    const content = detectViewToShow();

    return (
        <main className="h-screen my-8 flex gap-8">
            <Sidebar onNewProjectClick={handelAddProjectClick} projectData={PROJECT_DATA} onProjectDetails={handelProjectDetails} selectedProject={clickedProjectName}/>
            {content}
        </main>
    )

}

export default App;

import {forwardRef, useRef} from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({onProjectSave, onProjectCancel}) {
    const projectName = useRef();
    const projectDescription = useRef();
    const projectDueDate = useRef();
    const modal = useRef();
    function handelSave() {
        if (!projectName.current.value || !projectDescription.current.value || !projectDueDate.current.value) {
            modal.current.open();
            return;
        }
        onProjectSave(projectName.current.value, projectDescription.current.value, projectDueDate.current.value);
    }

    return (
        <>
            <Modal ref={modal}>
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className="text-stone-600 mb-4">
                    Oops ... looks like you forgot to enter a value.
                </p>
                <p className="text-stone-600 mb-4">
                    Please make sure you provide a valid value for every input field.
                </p>
            </Modal>
            <div className="flex flex-col">
                <menu className="flex justify-end gap-4 my-4">
                    <button className="text-stone-600 hover:text-stone-950" onClick={onProjectCancel}>Cancel</button>
                    <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                            onClick={handelSave}>Save
                </button>
            </menu>
            <form className="mt-4 text-left">
                <Input label="title" type="input" ref={projectName}/>
                <Input label="description" ref={projectDescription}/>
                <Input label="due date" type="date" ref={projectDueDate}/>
            </form>
        </div>
        </>
    )
};

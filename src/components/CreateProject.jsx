import { useRef } from "react";
import moment from "moment";
import Input from "./Input";
import ErrorModal from "./ErrorModal";

export default function CreateProject({ onSelect, onSave }) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();
    const modal = useRef();

    function handleCancel() {
        onSelect(false);
    }
    function handleSave() {
        // Validate inputs
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        const dueDate = dueDateRef.current.value;

        if (!title || !description || !dueDate) {
            // Show modal
            modal.current.open();
            return;
        }

        const newProject = {
            title,
            description, 
            dueDate: moment(dueDate, 'YYYY-MM-DD').format('MMM DD, YYYY'),
            tasks: [],
        }

        onSave(newProject);
    }
    return (
        <div className="w-[35rem] mt-16">
            <ErrorModal ref={modal} buttonCaption="Close">
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className="text-stone-600 mb-4">Ooops ... looks like you forgot to enter a value.</p>
                <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field.</p>
            </ErrorModal>
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button onClick={handleCancel} className="text-stone-800 hover:text-stone-950">Cancel</button></li>
                <li><button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
            </menu>
            <Input type="text" ref={titleRef} required>Title</Input>
            <Input ref={descriptionRef} textarea required>Description</Input>
            <Input type="date" ref={dueDateRef} required>Due Date</Input>
        </div>
    );

}
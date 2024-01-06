import { useRef } from "react";
import moment from "moment";
import Input from "./Input";
import ErrorModal from "./ErrorModal";

export default function CreateProject({ onSelect, onSave }) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();
    const dialog = useRef();

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
            dialog.current.open();
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
            <ErrorModal ref={dialog} />
            <menu className="flex items-center justify-end gap-4 my-4">
                <button onClick={handleCancel} className="text-stone-800 hover:text-stone-950">Cancel</button>
                <button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
            </menu>
            <Input type="text" ref={titleRef}>Title</Input>
            <Input type="textArea" ref={descriptionRef}>Description</Input>
            <Input type="date" ref={dueDateRef}>Due Date</Input>
        </div>
    );

}
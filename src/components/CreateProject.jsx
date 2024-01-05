import { useRef } from "react";
import moment from "moment";

export default function CreateProject({ onSelect, onSave }) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    function handleCancel() {
        onSelect(false);
    }
    function handleSave() {
        // Validate inputs
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        const dueDate = moment(dueDateRef.current.value, 'YYYY-MM-DD').format('MMM DD, YYYY');

        const newProject = {
            title,
            description, 
            dueDate,
            tasks: [],
        }

        onSave(newProject);
    }
    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <button onClick={handleCancel} className="text-stone-800 hover:text-stone-950">Cancel</button>
                <button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
            </menu>
            <p className="text-stone-600 mb-4">
                <label className="text-sm font-bold uppercase text-stone-500">Title</label>
                <input ref={titleRef} type="text" required className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
            </p>
           
            <p className="text-stone-600 mb-4">
                <label className="text-sm font-bold uppercase text-stone-500">Description</label>
                <textarea ref={descriptionRef} required className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
            </p>

            <p className="text-stone-600 mb-4">
                <label className="text-sm font-bold uppercase text-stone-500">Due Date</label>
                <input ref={dueDateRef} type="date" required className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
            </p>
            
        </div>
    );

}
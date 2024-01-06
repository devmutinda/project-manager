import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
const ErrorModal = forwardRef(function ErrorModal(props, ref) {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            <div className="flex flex-col items-center gap-4">
                <p className="text-stone-800 my-4">Please complete all input fields</p>
                <form method="dialog" className="mt-4 text-right">
                    <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Okay</button>
                </form>
            </div>
        </dialog>,
        document.getElementById("modal-root")
    );
});

export default ErrorModal;
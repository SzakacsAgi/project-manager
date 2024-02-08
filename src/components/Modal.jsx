import {forwardRef, useImperativeHandle, useRef} from "react";
import {createPortal} from "react-dom";

const Modal = forwardRef( function Modal({children}, ref) {
    const dialog = useRef();

    useImperativeHandle(ref, ()=>{
        return {
            open(){ dialog.current.showModal()}
        }
    })

    function handelOkClick() {
        dialog.current.close();
    }


    return createPortal(<dialog className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md" ref={dialog}>
            {children}
            <div className="mt-4 text-right">
                <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" onClick={handelOkClick}>OK</button>
            </div>

        </dialog>,
        document.getElementById('modal-root'))

})

export default Modal;
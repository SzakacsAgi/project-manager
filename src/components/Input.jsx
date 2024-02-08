import {forwardRef} from "react";

const Input = forwardRef( function Input({label,  type, ...props}, ref){
    let classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600 whitespace-pre-wrap";
    let input = type ? <input className={classes} ref={ref} type={type}/> : <textarea className={classes} ref={ref}></textarea>;

    return <label className="text-sm font-bold uppercase text-stone-500">
        {label}
        {input}
    </label>
})

export default Input;



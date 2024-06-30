import { forwardRef } from "react";


// eslint-disable-next-line react/display-name
const Input =forwardRef( ({...rest} , ref) => {
  return (

    <input ref={ref}  className="border-2 border-[#dbdbebde] mb-1 bg-[#232333] shadow-md 
    focus:border-[#dbdbebde] focus:outline-none focus:ring-1
     rounded-md px-3 py-3 text-md text-white
    " {...rest}/>

  )
})

export default Input;
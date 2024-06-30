


// eslint-disable-next-line react/prop-types
const Label = ({children ,...rest}) => {
    return (
    <label  className={` text-[#dbdbebde] pl-2`} {...rest}>
      {children}
    </label>
    )
  }
  
  export default Label
  
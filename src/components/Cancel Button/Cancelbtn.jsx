



// eslint-disable-next-line react/prop-types
const Cancelbtn = ({children , ...rest}) => {
  return (
<button type="button" className={` py-1 rounded-md border-[#798594] text-[#dbdbebde]  mt-4   border w-48 px-12 border-1  `} {...rest}>
    {children}
</button>
  )
}

export default Cancelbtn

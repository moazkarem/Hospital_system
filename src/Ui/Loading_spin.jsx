import { Bars } from 'react-loader-spinner'

const Loading_spin = () => {
  return (
    <div >
   <Bars
    height="50"
    width="50"
    color="#c5c5d5"
    ariaLabel="bars-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    />
    </div>
 
  )
}

export default Loading_spin

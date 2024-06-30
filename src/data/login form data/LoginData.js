export const Login_form = [
    {
        id:'email' , 
        placeholder:"Enter Your Email" ,
        name:'email' ,
        type:'email' ,
        validation:{
            require:'true' , 
            pattern:/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i
        }
    } ,
    {
        id:'password' , 
        placeholder:"Enter Your password" ,
        name:'password' ,
        type:'password' ,
        validation:{
            required: true,
            minLength: 8,
        }
    }
]
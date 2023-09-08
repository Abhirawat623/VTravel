import axios from 'axios'
export const loginHandler = async (number,password, setAlert)=>{
    try{
        const {data: accessToken,username} = await axios.post(
            "https://aware-foal-lingerie.cyclic.app/api/auth/login",
            {number:number,
            password:password}
        )
        console.log({accessToken,username});
        localStorage.setItem('token',accessToken);
        setAlert({
            open: true,
            message:"Login Successful!",
            type: "success"
          })
        return {accessToken,username};
    }
    
    catch(err){
        console.log("Can't Login")
    }
}










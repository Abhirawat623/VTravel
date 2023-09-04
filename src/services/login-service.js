import axios from 'axios'
export const loginHandler = async(number,password)=>{
    try{
        const data = await axios.post(
            "https://aware-foal-lingerie.cyclic.app/api/auth/login",
            {number:number,
            password:password}
        )
        console.log(data)
    }
    catch(err){
        console.log("Can't Login")
    }
}










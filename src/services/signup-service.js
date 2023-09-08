import axios from "axios";

export const signupHandler = async (username, number, email, password,setAlert) => {
  try {
    const data = await axios.post(
        "https://aware-foal-lingerie.cyclic.app/api/auth/register",
      {
        username: username,
        number: number,
        email: email,
        password: password,
      }
    );
    setAlert({
      open:true,
      message:`Hii, ${username}!Your Account Created`,
      type:"success"
    })
    console.log("Signed Up");
    console.log(data);
    
  } catch (err) {
    console.log("error adding user to database");
  }
};
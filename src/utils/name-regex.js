export const validateName =(username)=>{
    const regex =   /^[a-zA-Z\s]+$/;
  

    ///^[a-z]+$/i
    return regex.test(username)
}
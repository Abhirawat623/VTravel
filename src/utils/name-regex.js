export const validateName =(username)=>{
    const regex = /^[a-z]+$/i;
    return regex.test(username)
}
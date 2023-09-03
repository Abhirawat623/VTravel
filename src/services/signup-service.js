import axios from "axios";

export const signUpHandle = async (name, number, email, password) => {
  try {
    const data = await axios.post(
      `https://real-teal-basket-clam-wear.cyclic.cloud/auth/register`,
      { username: name, number: number, password: password, email: email }
    );
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

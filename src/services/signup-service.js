

import axios from "axios";

export const signupHandle = async (username, number, email, password) => {
  try {
    const data = await axios.post(
        "https://real-teal-basket-clam-wear.cyclic.cloud/auth/register",
      {
        username: username,
        number: number,
        email: email,
        password: password,
      }
    );
    console.log("Signed Up");
    console.log(data);
  } catch (err) {
    console.log("error adding user to database");
  }
};
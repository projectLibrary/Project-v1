import axios from "./axios";

// API Call to register a new user.
async function register(data) {
  let res = null;
  try {
    res = await axios.post("/v1/register", data);
    console.log("Service: ", res);
    return res.data;
  } catch (e) {
    console.log(e)
    if (e.response.status == 400) {
      return e.response.data;
    } else throw new Error(e);
  }
  // return res.data;
}

// API call to login a user.
async function login(data) {
  var response = await axios.post("/v1/send-otp", data);
  return response.data;
}

async function loginWithOtp(data) {
  var response = await axios.post("/v1/login", data);
  return response.data;
}

export { register, login, loginWithOtp };

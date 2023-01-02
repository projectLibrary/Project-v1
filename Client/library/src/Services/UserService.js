import axios from "./axios"

const allUsers = async ()=>{
    var response = await axios.get('/v1/user/librarian/allUsers');
    return response.data;
}

export {allUsers}
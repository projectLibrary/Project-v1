import axios from "./axios"

const viewfeedback = async ()=>{
    var response = await axios.get('/v1/user/librarian/feedback');
    return response.data;
}

export {viewfeedback}
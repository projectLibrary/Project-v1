import axios from "./axios"

const currentissuedbooks = async ()=>{
    var response = await axios.get('/v1/user/librarian/currentIssued');
    console.log("hi");
    return response;
}

export {currentissuedbooks}
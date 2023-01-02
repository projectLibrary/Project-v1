import axios from "./axios"

const addBook = async (data)=>{
    var response = await axios.post('/v1/user/librarian/addBook', data);
    console.log(response);
    return response;
}
const deleteBook = async (id)=>{
    console.log("in delete");
    console.log(id);
    await axios.get('v1/user/librarian/deleteBook/'+id);
    console.log("after del");

}

export {addBook,deleteBook}
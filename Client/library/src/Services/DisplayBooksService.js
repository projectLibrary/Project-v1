import axios from "./axios"

const getAllBooks = async ()=>{
    console.log('before axios')
    var response = await axios.get('/v1/user/librarian/bookIndex');
    console.log('after axios')
    return response.data;
}

export {getAllBooks}
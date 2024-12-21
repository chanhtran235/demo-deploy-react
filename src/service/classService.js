
import axios from "axios";

export async function getAllClass() {
    try{
        const rep = await axios.get('http://localhost:8080/classes');
        return rep.data;
    }catch (e) {
        console.log("lỗi "+ e);
        return []
    }

}
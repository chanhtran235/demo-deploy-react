import axios from "axios";
const studentList = [
    {
        id: 1,
        name: "chánh1"
    },
    {
        id: 2,
        name: "chánh2"
    },
    {
        id: 3,
        name: "chánh3"
    }
]

export  async function getAll() {
    try {
        const response = await axios.get("http://localhost:8080/students");
        // console.log("--------call api----------------");
        // console.log(response.data);
        return response.data; // Trả về dữ liệu từ API
    } catch (error) {
        console.error("Error fetching data:", error);
        return []; // Trả về mảng rỗng khi lỗi
    }
}

export async function searchByName(name) {
    console.log(name)
    try {
        const response = await axios.get("http://localhost:8080/students?name="+name);
        console.log("--------search call api----------------");
        console.log(response.data);
        return response.data; // Trả về dữ liệu từ API
    } catch (error) {
        console.error("Error fetching data:", error);
        return []; // Trả về mảng rỗng khi lỗi
    }

}
export async function addNew(student) {
    try {
        const response = await axios.post("http://localhost:8080/students",student);
        console.log("--------call api thêm mới----------------");
        console.log(response.data);
    } catch (e) {
        console.error("add is error", e);
    }
}

export async function deleteById(id) {
    try {
        const response = await axios.delete("http://localhost:80809/students");
        console.log("--------call api----------------");
        console.log(response.data);
    } catch (e) {
        console.error("add is error", e);
    }
}
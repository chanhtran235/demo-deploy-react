import axios from "axios";

export async function loginAccount(account) {
    try {
        const response = await axios.get("http://localhost:8080/accounts");
        const currentAccount = response.data.find(e =>e.username == account.username&&e.password==account.password);
        console.log("=============service=============")
        console.log(currentAccount)
        return currentAccount; // Trả về dữ liệu từ API
    } catch (error) {
        console.error("Error fetching data:", error);
        return null; // Trả về mảng rỗng khi lỗi
    }
}
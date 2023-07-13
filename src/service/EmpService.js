import axios from "axios";

const getEmpData = () => {
    return axios.get('http://localhost:8000/employee');
}

export default getEmpData;
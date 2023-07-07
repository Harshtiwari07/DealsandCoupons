import axios from 'axios';
const URL="http://localhost:8080/profile";
class UserService {

    findProfiles(){
        return axios.get(`${URL}/findall`);
    }
    deleteProfileById(id){
        return axios.delete(`${URL}/delete/${id}`);
    }

    addProfile(){
        return axios.post(`${URL}/add`);
    }

    searchProfileById(Id){
        return axios.get(`${URL}/find/${Id}`);
    }

    updateProfile(){
        return axios.put(`${URL}/update`);
    }
   

    loginProfile(userId, password){
        return axios.get(`${URL}/login?userId=${userId}&password=${password} `);
    }
   

}export default new UserService();
import {Manager_API} from './APIurl';
import axiosClient from './axiosClient';

const ManagerAPI = {
    getManager:()=>{
        const url = Manager_API;
        return  axiosClient.get(url);
    }
};

export default ManagerAPI;

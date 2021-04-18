import { PENDING_API } from "./APIurl";
import axiosClient from "./axiosClient";


const pendingAPI = {
    getPending: (params) => {
        const url = PENDING_API;
        return axiosClient.get(url, params);
    }
};

export default pendingAPI;
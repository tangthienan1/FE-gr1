
import { PROFILE_API } from "./APIurl";
import axiosClient from "./axiosClient";


const ProfileAPI = {
    getUserINFO: () => {
        const url = PROFILE_API;
        return axiosClient.get(url);
    }
};

export default ProfileAPI;
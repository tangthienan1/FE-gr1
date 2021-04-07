import { CONTRIBUTION_API } from "./APIurl";
import axiosClient from "./axiosClient";


const contributionAPI = {
    getContribution: () => {
        const url = CONTRIBUTION_API;
        return axiosClient.get(url);
    }
};

export default contributionAPI;
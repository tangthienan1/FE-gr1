import axios from 'axios'
import axiosClient from "./axiosClient";
import { CONTRIBUTION_LIST } from "./APIurl";


const contributionAPI = {
    getContribution: () => {
        const url = CONTRIBUTION_LIST;
        return axiosClient.get(url);
    }
};

export default contributionAPI;
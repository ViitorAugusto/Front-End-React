import axios from "axios";

const request = axios.create({
    baseURL: "digi-api.com/api/v1/digimon",
}) 

export const api = {
    getDigimons: async () => {
        const req = await request.get("/");
        console.log(req);
        return req.data.content;
    },
    // getDigimonsFromName: async (name: string | undefined) => {
    //     const req = await request.get(`/api/digimon/name/${name}`);
    //     return req.data;
    // }


}
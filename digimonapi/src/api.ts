import axios from "axios";

const request = axios.create({
    baseURL: "https://digimon-api.vercel.app/",
}) 

export const api = {
    getDigimons: async () => {
        const req = await request.get("/api/digimon");
        return req.data;
    },
    getDigimonsFromName: async (name: string | undefined) => {
        const req = await request.get(`/api/digimon/name/${name}`);
        return req.data;
    }


}
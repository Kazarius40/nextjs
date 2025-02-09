import axios from "axios";
import {ICar} from "@/models/ICar";

const axiosInstance = axios.create({
    baseURL: 'http://185.69.152.209/carsAPI/v1',
    headers: {'Content-Type': 'application/json'}
})

export const getAllCars = async (): Promise<ICar[]> => {
    const {data} = await axiosInstance.get<ICar[]>('/cars', {
        headers: {'Cache-Control': 'no-store'}
    });
    return data;
}

export const createCarRequest = async (carData: ICar): Promise<void> => {
    await axiosInstance.post("/cars", carData);
};
import axios from "axios";
import {ICar} from "@/models/ICar";

const axiosInstance = axios.create({
    baseURL: 'http://185.69.152.209/carsAPI/v1',
    headers: {'Content-Type': 'application/json'}
})

export const getAllCars = async (): Promise<ICar[]> => {
    const {data} = await axiosInstance.get<ICar[]>('/cars');
    return data;
}

export const createCar = async (carData: ICar): Promise<void> => {
    await axiosInstance.post('/cars', carData);
}
"use server";

import axios from "axios";
import {ICar} from "@/models/ICar";
import {revalidatePath} from "next/cache";

const axiosInstance = axios.create({
    baseURL: 'http://185.69.152.209/carsAPI/v1',
    headers: {'Content-Type': 'application/json'}
})

export const getAllCars = async (): Promise<ICar[]> => {
    const {data} = await axiosInstance.get<ICar[]>('/cars');
    return data;
}

export const createCar = async (formData: FormData): Promise<void> => {
    const car: ICar = {
        brand: formData.get('brand') as string,
        price: Number(formData.get('price')),
        year: Number(formData.get('year')),
    }
    await axiosInstance.post("/cars", car);
    revalidatePath("/cars");
};
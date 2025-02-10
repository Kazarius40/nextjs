"use server";

import {ICar} from "@/models/ICar";
import {revalidatePath} from "next/cache";
import {responseCreateCar} from "@/services/api";


export const createCar = async (formData: FormData): Promise<void> => {
    const car: ICar = {
        brand: formData.get('brand') as string,
        price: Number(formData.get('price')),
        year: Number(formData.get('year')),
    }
   await responseCreateCar(car);
    revalidatePath("/cars");
};
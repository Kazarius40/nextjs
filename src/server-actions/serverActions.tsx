// 'use server';
//
// import {createCarRequest} from "@/services/carService";
// import {ICar} from "@/models/ICar";
// import {carValidator} from "@/validators/carValidator";
// import {revalidatePath} from "next/cache";
//
// export async function createCar(_: unknown, formData: FormData) {
//
//     const newCar: ICar = {
//         brand: (formData.get('brand') as string),
//         price: Number(formData.get('price')),
//         year: Number(formData.get('year')),
//     };
//
//
//     const {error} = carValidator.validate(newCar);
//
//     if (error) {
//         return Object.fromEntries(error.details.map(({path, message}) => [path[0], message]));
//     }
//
//     await createCarRequest(newCar);
//
//     revalidatePath('/cars');
//
//     return null;
// }
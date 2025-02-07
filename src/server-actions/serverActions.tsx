"use server";

import sql from 'better-sqlite3';
import {revalidatePath} from "next/cache";
import exp from "node:constants";

const db = sql('meals.db');

export const saveMeal = async (formData: FormData) => {
    // console.log(formData);
    // console.log('saveAction');

    const titleValue = formData.get('title');

    db.prepare('insert into meals (title) values (?)')
        .run(titleValue);
    // redirect('https://')
    revalidatePath('/');
}


type Meal = { id: number, title: string };
export const getMeals = async ():Promise<Meal[]> => {

    return db.prepare<Meal[]>(`SELECT * FROM meals`).all() as Meal[];

}
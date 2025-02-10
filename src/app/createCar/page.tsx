"use client"

import Menu from "@/components/menu/Menu";
import Form from "next/form";
import React from "react";
import {ICar} from "@/models/ICar";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "@/validators/carValidator";
import {useForm} from "react-hook-form";
import {createCar} from "@/services/car.service";

const CreateCarPage = () => {

    const {register, formState: {errors, isValid}} = useForm<ICar>({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    return (
        <>
            <Menu/>
            <Form action={createCar}>
                <div>
                    <input type="text" placeholder={'brand'} {...register('brand')} required/>
                    <div>{errors.brand?.message}</div>
                </div>
                <div>
                    <input type="number" placeholder={'price'} {...register('price')} required/>
                    <div>{errors.price?.message}</div>
                </div>
                <div>
                    <input type="number" placeholder={'year'} {...register('year')} required/>
                    <div>{errors.year?.message}</div>
                </div>
                <button type="submit" disabled={!isValid}>Submit</button>
            </Form>
        </>
    );
};

export default CreateCarPage;
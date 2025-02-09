"use client"

import Menu from "@/components/menu/Menu";
import Form from "next/form";
import React from "react";
import {ICar} from "@/models/ICar";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "@/validators/carValidator";
import {useForm} from "react-hook-form";
import {CreateCarRevalidate} from "@/services/carService";

const CreateCarPage = () => {

    const {register, handleSubmit, formState: {errors, isValid}} = useForm<ICar>({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    const createHandler = async (data: ICar): Promise<void> => {
        await CreateCarRevalidate(data);
    }

    return (
        <>
            <Menu/>
            <Form action={() => handleSubmit(createHandler)()}>
                <div>
                    <input type="text" placeholder={'brand'}{...register('brand')}/>
                    <div>{errors.brand?.message}</div>
                </div>
                <div>
                    <input type="number" placeholder={'price'} {...register('price')}/>
                    <div>{errors.price?.message}</div>
                </div>
                <div>
                    <input type="number" placeholder={'year'} {...register('year')}/>
                    <div>{errors.year?.message}</div>
                </div>
                <button type="submit" disabled={!isValid}>Submit</button>
            </Form>
        </>
    );
};

export default CreateCarPage;
"use client"

import {createCar} from "@/server-actions/serverActions";
import Menu from "@/components/menu/Menu";
import Form from "next/form";
import {useFormState} from "react-dom";
import React, {useState} from "react";

const initialFormData = {
    brand: "",
    price: "",
    year: "",
};

const CreateCarPage = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [errors, formAction] = useFormState(createCar, {});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    return (
        <>
            <Menu/>
            <Form action={formAction}>
                <div>
                    <input type="text" name="brand" placeholder="Brand" value={formData.brand} onChange={handleChange}/>
                    {errors?.brand && <p>{errors.brand}</p>}
                </div>
                <div>
                    <input type="number" name="price" placeholder="Price" value={formData.price}
                           onChange={handleChange}/>
                    {errors?.price && <p>{errors.price}</p>}
                </div>
                <div>
                    <input type="number" name="year" placeholder="Year" value={formData.year} onChange={handleChange}/>
                    {errors?.year && <p>{errors.year}</p>}
                </div>
                <button type="submit">Submit</button>
            </Form>
        </>
    );
};

export default CreateCarPage;
"use client"

import React, {useState} from "react";
import {createCar} from "@/server-actions/serverActions";
import Form from "next/form";
import Menu from "@/components/menu/Menu";

interface IErrors {
    brand?: string;
    price?: string;
    year?: string;
}

const CreateCarPage = () => {
    const [formValues, setFormValues] = useState({
        brand: "",
        price: "",
        year: "",
    });

    const [errors, setErrors] = useState<IErrors>({});

    const handleSubmit = async (formData: FormData) => {
        const result = await createCar(formData);
        setErrors(result || {});

        if (!result) {
            setFormValues({brand: "", price: "", year: ""});
        }
    };

    const renderInput = (name: keyof typeof formValues, type: string, placeholder: string) => (
        <div>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={formValues[name]}
                onChange={(e) =>
                    setFormValues({...formValues, [name]: e.target.value})
                }
            />
            {errors[name] && <p>{errors[name]}</p>}
        </div>
    );

    return (
        <>
            <Menu/>
            <Form action={handleSubmit}>
                {renderInput("brand", "text", "brand")}
                {renderInput("price", "number", "price")}
                {renderInput("year", "number", "year")}
                <button type="submit">Submit</button>
            </Form>
        </>
    );
};

export default CreateCarPage;
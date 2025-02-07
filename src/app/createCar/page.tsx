"use client"

import React, {useState} from "react";
import {createCar} from "@/server-actions/serverActions";
import Menu from "@/components/menu/Menu";

interface IErrors {
    brand?: string;
    price?: string;
    year?: string;
}

const CreateCarPage = () => {
    const [formValues, setFormValues] = useState({brand: "", price: "", year: "",});

    const [errors, setErrors] = useState<IErrors>({});

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const result = await createCar(formData);
        setErrors(result || {});

        if (!result) {
            setFormValues({brand: "", price: "", year: ""});
        }
    };

    const handleChange = ({target: {name, value}}: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues(prev => ({...prev, [name]: value}));
    };

    return (
        <>
            <Menu/>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="brand"
                        placeholder="Brand"
                        value={formValues.brand}
                        onChange={handleChange}
                    />
                    {errors.brand && <p>{errors.brand}</p>}
                </div>
                <div>
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={formValues.price}
                        onChange={handleChange}
                    />
                    {errors.price && <p>{errors.price}</p>}
                </div>
                <div>
                    <input
                        type="number"
                        name="year"
                        placeholder="Year"
                        value={formValues.year}
                        onChange={handleChange}
                    />
                    {errors.year && <p>{errors.year}</p>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default CreateCarPage;
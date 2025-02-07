"use client"

import Form from "next/form";
import {createCar} from "@/server-actions/serverActions";
import {useState} from "react";

interface IErrors {
    brand?: string;
    price?: string;
    year?: string;
}

export default function Home() {

    const [errors, setErrors] = useState<IErrors>({});

    const handleSubmit = async (formData: FormData) => {
        const result = await createCar(formData);
        setErrors(result || {});
    };

    return (
        <Form action={handleSubmit}>
            <div>
                <input type="text" name="brand" placeholder="brand" />
                {errors.brand && <p>{errors.brand}</p>}
            </div>
            <div>
                <input type="number" name="price" placeholder="price" />
                {errors.price && <p>{errors.price}</p>}
            </div>
            <div>
                <input type="number" name="year" placeholder="year" />
                {errors.year && <p>{errors.year}</p>}
            </div>
            <button type="submit">Submit</button>
        </Form>
    );
}

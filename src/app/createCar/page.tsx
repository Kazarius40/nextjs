"use client"

import {createCar} from "@/server-actions/serverActions";
import Menu from "@/components/menu/Menu";
import Form from "next/form";
import {useFormState} from "react-dom";

const CreateCarPage = () => {
    const [errors, formAction] = useFormState(createCar, {});

    return (
        <>
            <Menu/>
            <Form action={formAction}>
                <div>
                    <input type="text" name="brand" placeholder="Brand"/>
                    {errors?.brand && <p>{errors.brand}</p>}
                </div>
                <div>
                    <input type="number" name="price" placeholder="Price"/>
                    {errors?.price && <p>{errors.price}</p>}
                </div>
                <div>
                    <input type="number" name="year" placeholder="Year"/>
                    {errors?.year && <p>{errors.year}</p>}
                </div>
                <button type="submit">Submit</button>
            </Form>
        </>
    );
};

export default CreateCarPage;
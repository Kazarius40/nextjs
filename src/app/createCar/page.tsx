import {createCar} from "@/server-actions/serverActions";
import Menu from "@/components/menu/Menu";
import Form from "next/form";

const CreateCarPage = () => {

    return (
        <>
            <Menu/>
            <Form action={createCar}>
                <div>
                    <input type="text" name="brand" placeholder="Brand"/>
                </div>
                <div>
                    <input type="number" name="price" placeholder="Price"/>
                </div>
                <div>
                    <input type="number" name="year" placeholder="Year"/>
                </div>
                <button type="submit">Submit</button>
            </Form>
        </>
    );
};

export default CreateCarPage;
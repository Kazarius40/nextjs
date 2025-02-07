import CarsComponent from "@/CarsComponent/CarsComponent";
import {getAllCars} from "@/services/carService";

const CarsPage = async () => {

    const cars = await getAllCars();

    return (
        <>
            <CarsComponent item={cars} />
        </>
    );
};

export default CarsPage;
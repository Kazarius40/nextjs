import CarsComponent from "@/components/cars-component/CarsComponent";
import {getAllCars} from "@/services/api";


const CarsPage = async () => {

    const cars = await getAllCars();

    return (
        <div>
            <CarsComponent item={cars}/>
        </div>
    );
};

export default CarsPage;
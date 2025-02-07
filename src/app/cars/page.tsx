import CarsComponent from "@/components/cars-component/CarsComponent";
import {getAllCars} from "@/services/carService";
import Menu from "@/components/menu/Menu";


const CarsPage = async () => {

    const cars = await getAllCars();

    return (
        <div>
            <Menu/>
            <CarsComponent item={cars}/>
        </div>
    );
};

export default CarsPage;
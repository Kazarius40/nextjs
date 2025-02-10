import CarsComponent from "@/components/cars-component/CarsComponent";
import Menu from "@/components/menu/Menu";
import {getAllCars} from "@/services/api";


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
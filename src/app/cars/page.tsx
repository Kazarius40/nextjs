import CarsComponent from "@/CarsComponent/CarsComponent";
import {getAllCars} from "@/services/carService";


const CarsPage =  async () => {

    const cars = await getAllCars();


    return (
        <div>


            <CarsComponent item={cars} />
        </div>
    );
};

export default CarsPage;
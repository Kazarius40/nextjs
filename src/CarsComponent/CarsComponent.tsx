import {ICar} from "@/models/ICar";

type CarsProps = {
    item: ICar[];
}

const CarsComponent = async ({item}: CarsProps) => {


    return (
        <>
            {
                item.map((car) =>(
                    <div key={car.id}>
                        {car.id}
                    </div>
                ))
            }
        </>
    );
};

export default CarsComponent;
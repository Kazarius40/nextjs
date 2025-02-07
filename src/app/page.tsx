"use client"

import {useForm} from "react-hook-form";
import {carValidator} from "@/validators/carValidator";
import {joiResolver} from "@hookform/resolvers/joi";
import {ICar} from "@/models/ICar";
import {createCar} from "@/services/carService";

export default function Home() {

    const {register, handleSubmit, formState: {errors}} = useForm<ICar>({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    const createHandler = async (data: ICar): Promise<void> => {
        await createCar(data);
    }

  return (
      <form onSubmit={handleSubmit(createHandler)}>
          <div>
              <input type="text" placeholder={'brand'} {...register('brand')}/>
              <div>{errors.brand?.message}</div>
          </div>
          <div>
              <input type="number" placeholder={'price'} {...register('price')}/>
              <div>{errors.price?.message}</div>
          </div>
          <div>
              <input type="number" placeholder={'year'} {...register('year')}/>
              <div>{errors.year?.message}</div>
          </div>
          <button>Submit</button>
      </form>
  );
}

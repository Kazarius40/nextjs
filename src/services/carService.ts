const baseUrl = 'http://owu.linkpc.net/carsAPI/v1';


export const getAllCars = async () => {
    return await fetch(`${baseUrl}/cars`)
        .then(res => res.json());
}
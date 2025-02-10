// localhost:3000/hello/api [GET]

export const GET = async (request: Request, response: Response) => {

    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())

    console.log(request);
    console.log(response);


    response.headers.set('XXX', 'Abracadabra');
    return Response.json(users);


    // return Response.json({message: request.url, status: 200});
}


// localhost:3000/hello/api [POST]
export const POST = () => {
    console.log('POST request route handler');
    return Response.json({message: 'Request route handler POST'});
}
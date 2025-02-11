import {NextRequest, NextResponse} from "next/server";

export const middleware = async (request: NextRequest) => {


    // console.log('middleware');
    //
    // // const login = request.cookies.get('login');
    // // const password = request.cookies.get('password');
    // // const token = await fetch('', {
    // //     method: 'POST',
    // //     headers: {
    // //         'Accept': 'application/json',
    // //         'Content-Type': 'application/json',
    // //     },
    // //     body: JSON.stringify({
    // //         key1: login,
    // //         key2: password,
    // //     }),
    // // }).then(value => value.json());
    //
    // // const token = 'jhghgk3245kjhgghkg345';
    // // const response = NextResponse.next({
    // //     headers: {
    // //         Authorization: token,
    // //     }
    // // });
    // // return response;
    //
    // return new NextResponse('jlkjlkjhl', {headers: {'xxxxx': 'yyyyyyy'}});


    if (request.url.startsWith("/api/")) {
        // etwas
    } else if (request.url.startsWith("/swapi/")) {
        //....
    }


}

// export const config = {
//     matcher: '/auth'
// }
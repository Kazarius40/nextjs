import React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'UserLayout metadata'
}


// Додаткова можливість генерувати метадані на цій сторінці. Краще це робити на обов'язковій сторінці page.
// export const generateMetadata = async ({params}: { params: { id: string } }): Promise<Metadata> => {
//     const {id} = await params;
//     return {
//         title: 'User page title ' + id,
//     }
// }

type Props = { children: React.ReactNode }
const UserLayout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default UserLayout;

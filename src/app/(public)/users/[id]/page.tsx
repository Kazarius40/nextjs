import {FC} from "react";
import {Metadata} from "next";
import {SearchParams} from "next/dist/server/request/search-params";

type Props = {
    params: { id: string };
    searchParams: SearchParams;
}

export const generateMetadata = async ({params}:Props): Promise<Metadata> => {
    const {id} = await params;
    return {
        title: 'User page title ' + id,
    }
}

const UserPage: FC<Props> = async ({params, searchParams}) => {
    const {id} = await params;
    return (
        <div>
            <hr/>
            user page content {id}
            <hr/>
        </div>
    );
};
export default UserPage;

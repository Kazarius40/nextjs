import {FC} from "react";

type Props = {
    params: {id: string};
}

const UserPage:FC<Props> = async ({params}) => {
    const {id} = await params;
    return(
        <div>
            <hr/>
            user page content {id}
            <hr/>
        </div>
    );
};
export default UserPage;

import {Metadata} from "next";

type Props = {
    params: { id: string },
}

export const generateMetadata = ({params}: Props): Metadata => {
    const {id} = params;
    return {
        title: 'User page title ' + id,
    }
}

const UserPage = ({params}: Props) => {
    const {id} = params;
    return (
        <div>
            user page content {id}
        </div>
    );
};

export default UserPage;
import {Metadata} from "next";

type Props = {
    params: { id: string },
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params;
    return {
        title: 'User page title ' + id,
    }
}

const UserPage = async ({params}: Props) => {
    const {id} = await params;
    return (
        <div>
            user page content {id}
        </div>
    );
};

export default UserPage;
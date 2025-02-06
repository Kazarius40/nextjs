import {Metadata} from "next";

type Props = {
    params: { id: string };
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params;
    return {
        title: 'Post page title ' + id,
    }
}

const PostPage = async ({params}: Props) => {
    const {id} = await params;
    return (
        <div>
            post page content {id}
        </div>
    );
};

export default PostPage;
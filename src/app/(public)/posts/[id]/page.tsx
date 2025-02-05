import {Metadata} from "next";

type Props = {
    params: { id: string };
}

export const generateMetadata = ({params}: Props): Metadata => {
    const {id} = params;
    return {
        title: 'Post page title ' + id,
    }
}

const PostPage = ({params}: Props) => {
    const {id} = params;
    return (
        <div>
            post page content {id}
        </div>
    );
};

export default PostPage;
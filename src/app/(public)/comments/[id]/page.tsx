import {Metadata} from "next";

type Props = {
    params: { id: string };
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params;
    return {
        title: 'Comment page title ' + id,
    }
}

const CommentPage = async ({params}: Props) => {
    const {id} = await params;
    return (
        <div>
            comment page content {id}
        </div>
    );
};

export default CommentPage;
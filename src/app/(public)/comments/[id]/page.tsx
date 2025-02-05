import {Metadata} from "next";

type Props = {
    params: { id: string };
}

export const generateMetadata = ({params}: Props): Metadata => {
    const {id} = params;
    return {
        title: 'Comment page title ' + id,
    }
}

const CommentPage = ({params}: Props) => {
    const {id} = params;
    return (
        <div>
            comment page content {id}
        </div>
    );
};

export default CommentPage;
import {FC} from "react";

type Props = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const SubmitPage: FC<Props> = () => {
    return (
        <div>
            submit page content
        </div>
    )
};

export default SubmitPage;
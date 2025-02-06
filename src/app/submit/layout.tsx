import React from "react";

type Props = {
    children: React.ReactNode;
}

const SubmitLayout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    )
};

export default SubmitLayout;
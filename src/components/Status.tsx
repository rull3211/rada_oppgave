import React from "react";

interface AppStateProp{
    status: string
}

export const Status: React.FC<AppStateProp> = ({status}) => {
    return <b>{status}</b>
}


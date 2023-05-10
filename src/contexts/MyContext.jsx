import React, { useContext } from "react";

import { Loading } from "../components";
import { useGetCollection } from "../hooks/useGetCollection";
import { Error } from "../pages";

const MyContext = React.createContext();

export function useMyContext() {
    return useContext(MyContext);
}

export const MyProvider = ({ children }) => {
    const { loading, data, error } = useGetCollection({
        collectionName: "projects",
    });

    // Method

    // Props
    const value = {
        projects: data,
    };

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }

    return (
        <MyContext.Provider value={value}>
            {!loading && children}
        </MyContext.Provider>
    );
};

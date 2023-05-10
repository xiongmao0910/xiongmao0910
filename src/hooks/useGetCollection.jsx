import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../utils/firebase";

export function useGetCollection({ collectionName }) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);

    async function getData() {
        const snapshots = await getDocs(collection(db, collectionName));

        if (snapshots.empty) {
            setError(true);
            return;
        }

        const dataRs = [];

        snapshots.forEach((doc) => {
            dataRs.push({ id: doc.id, ...doc.data() });
        });

        setData(dataRs);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        getData();

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return { loading, data, error };
}

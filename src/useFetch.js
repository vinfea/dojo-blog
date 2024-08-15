import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortContrl = new AbortController();

        setTimeout(() => {
            fetch(url, {signal: abortContrl.signal})
                .then((res) => {
                    if (!res.ok) {
                        throw Error("Could not fetch data for given resource.");
                    }
                    return res.json();
                }).then((data) => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch((err) => {
                    if (err.name === "AbortError") {
                        console.log("fetch aborted");
                    }
                    else {
                        setError(err.message);
                        setIsPending(false);
                    }
                })
        }, 500);

        return () => {
            abortContrl.abort();
        }
    }, [url]);

    return {
        data,
        isPending,
        error
    }
}

export default useFetch;
import { useSearchParams } from "next/navigation";

const Results = () => {
    const params = useSearchParams();
    console.log({ params });

    const sessionId = params.get('session_id');

    return (
        <div>
            <h1>Results</h1>
            <div>{sessionId}</div>
        </div>
    );
}

export default Results;
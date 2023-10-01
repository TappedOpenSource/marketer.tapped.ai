'use client';

import { checkoutSessionToClientReferenceId } from "@/data/api";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


const Results = () => {
    const params = useSearchParams();
    console.log({ params });

    const sessionId = params.get('session_id');
    if (!sessionId) {
        return {
            sessionId: null
        };
    }

    const [clientReferenceId, setClientReferenceId] = useState<string | null>(null);
    useEffect(() => {
        const fetchClientReferenceId = async () => {
            const clientReferenceId = await checkoutSessionToClientReferenceId(sessionId);
            setClientReferenceId(clientReferenceId);
        }
        fetchClientReferenceId();
    });


    return (
        <div>
            <h1>Results</h1>
            <div>{sessionId}</div>
            <div>{clientReferenceId}</div>
        </div>
    );
}

export default Results;
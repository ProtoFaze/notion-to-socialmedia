'use client';

import { useState } from 'react';

export default function TestForm() {
    const [response, setResponse] = useState(null);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const res = await fetch('/api/updateNotionPage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await res.json();
            setResponse(data);
        } catch (error) {
            console.log("error");
        }
    };

    return (
        <div className="text-white">
            <h1>Test Notion API</h1>
            <form onSubmit={handleSubmit}>
                <button type="submit">Update Notion Page</button>
            </form>
            {response && (
                <div>
                    <h2>Response</h2>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};
import Ldr from "@/components/ldr";

import { useEffect, useState } from 'react';

const Loading = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="mx-auto my-auto text-xl">
            {isClient ? (
                <>
                    <div>
                        <Ldr />
                    </div>
                    <p className="mt-3">Loading...</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Loading;

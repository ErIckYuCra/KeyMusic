import React, { useEffect, useState } from 'react';
import { getToken } from '../utils/getToken';
import { getHeader } from '../utils/getHeader';
import { ContextToken } from './ContextToken';
import App from '../App';


function TokenContext() {



    const [header, setHeader] = useState(null)



    async function getTokenHeader() {
        const token = await getToken()

        setHeader(getHeader(token.access_token))
    }

    useEffect(() => {
        if (header == null) {
            getTokenHeader()
        }

    }, [header])


    return <ContextToken.Provider value={header}>
        <App></App>
    </ContextToken.Provider>

}

export default TokenContext
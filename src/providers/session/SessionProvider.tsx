import {Session} from "../../api/types.tsx";
import React, {useState} from "react";
import {defaultSession, SessionContext} from './SessionContext.tsx'

export function SessionProvider({children}: { children: React.ReactNode }) {
    const [session, setSession] = useState<Session>(defaultSession);

    const setSessionId = (value: string) => {
        setSession((prevState) => ({
            ...prevState,
            sessionId: value,
        }));
    };

    const resetSession = () => {
        setSession(defaultSession);
    };

    const isEmptySession = () => {
        return session === defaultSession;
    };

    return (
        <SessionContext.Provider value={{session, setSession, setSessionId, resetSession, isEmptySession}}>
            {children}
        </SessionContext.Provider>
    );
}


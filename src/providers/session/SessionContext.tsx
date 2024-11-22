import {createContext} from "react";
import {Session} from "../../api/types.tsx";

export const defaultSession: Session = {
    sessionId: "",
    cans: 0,
    bottles: 0,
    subtotal: 0
}

export const SessionContext = createContext<{
    session: Session,
    setSession: (value: Session) => void,
    setSessionId: (value: string) => void,
    resetSession: () => void,
    isEmptySession: () => boolean
}>({
    session: defaultSession,
    setSession: () => {},
    setSessionId: () => {},
    resetSession: () => {},
    isEmptySession: () => true
})

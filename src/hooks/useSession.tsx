import {useContext} from "react";
import {SessionContext} from "../providers/session/SessionContext.tsx";

export default function useSession() {
    return useContext(SessionContext)
}

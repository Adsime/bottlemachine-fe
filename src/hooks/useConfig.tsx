import {useContext} from "react";
import {ConfigContext} from "../providers/config/ConfigContext.tsx";

export default function useConfig() {
    return useContext(ConfigContext)
}

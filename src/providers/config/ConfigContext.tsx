import {createContext} from "react";
import {Config} from "../../api/types.tsx";

export const defaultConfig: Config = {
    content: 5,
    station: "station-1"
}

export const ConfigContext = createContext<{
    config: Config,
    setContent: (value: number) => void,
    setStation: (value: string) => void,
    resetConfig: () => void,
}>({
    config: defaultConfig,
    setContent: () => {},
    setStation: () => {},
    resetConfig: () => {}
})
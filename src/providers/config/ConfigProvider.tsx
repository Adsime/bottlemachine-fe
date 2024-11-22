import React, {useState} from "react";
import {ConfigContext, defaultConfig} from "./ConfigContext.tsx";
import {Config} from "../../api/types.tsx";

export function ConfigProvider({children}: { children: React.ReactNode }) {
    const [config, setConfig] = useState<Config>(defaultConfig)

    const setContent = (value: number) => {
        setConfig((prevState) => ({
            ...prevState,
            content: value
        }))
    }

    const setStation = (value: string) => {
        setConfig((prevState) => ({
            ...prevState,
            station: value
        }))
    }

    const resetConfig = () => {
        setConfig(defaultConfig)
    }

    return (
        <ConfigContext.Provider value={{config, setContent, setStation, resetConfig}}>
            {children}
        </ConfigContext.Provider>
    );
}
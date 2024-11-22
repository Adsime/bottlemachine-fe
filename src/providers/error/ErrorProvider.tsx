import React, {useState} from "react";
import {ErrorContext} from "./ErrorContext.tsx";

export function ErrorProvider({children}: { children: React.ReactNode }) {
    const [errors, setErrors] = useState<string[]>([])

    const clearErrors = () => {
        setErrors([])
    }

    return (
        <ErrorContext.Provider value={{errors, setErrors, clearErrors}}>
            {children}
        </ErrorContext.Provider>
    );
}
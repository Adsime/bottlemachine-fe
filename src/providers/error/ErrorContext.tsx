import {createContext} from "react";

export const ErrorContext = createContext<{
    errors: string[],
    setErrors: (value: string[]) => void,
    clearErrors: () => void,
}>({
    errors: [],
    setErrors: () => {},
    clearErrors: () => {}
})
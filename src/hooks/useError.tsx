import {useContext} from "react";
import {ErrorContext} from "../providers/error/ErrorContext.tsx";

export default function useError() {
    return useContext(ErrorContext)
}


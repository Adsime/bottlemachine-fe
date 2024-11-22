import useSession from "./useSession.tsx";
import useError from "./useError.tsx";
import useConfig from "./useConfig.tsx";
import {Vessel} from "../api/types.tsx";

function useApi() {

    const { session, setSession } = useSession()
    const { setErrors, clearErrors } = useError()
    const { config } = useConfig()


    const postVessel = (vessel: Vessel) => {
        const requestOptions = {
            method: 'POST',
            headers: headers(),
            body: JSON.stringify({
                type: vessel,
                content: config.content
            })
        }

        fetch('http://localhost:8080/api/vessels', requestOptions)
            .then(async response => {
                const json = await response.json()

                if (response.ok) {
                    setSession(json)
                    clearErrors()
                } else {
                    setErrors(json.errors)
                }
            })
    }

    const postFinish = async () => {
        const requestOptions = {
            method: 'POST',
            headers: headers()
        }

        return fetch('http://localhost:8080/api/sessions/finish', requestOptions)
            .then(async response => {
                const json = await response.json()

                if (response.ok) {
                    setSession(json)
                    clearErrors()
                } else {
                    setErrors(json.errors)
                }

                return response
            })
    }

    const headers = () => {
        const headers = {
            'Content-Type': 'application/json',
            // @ts-ignore
            'Station-Id': config.station
        }

        if (session.sessionId) {
            // @ts-ignore
            headers['Session-Id'] = session.sessionId
        }

        return headers
    }


    return { postVessel, postFinish }
}

export default useApi

import {Session, Vessel} from "./types.tsx";

function postVessel(vessel: Vessel, station: string, content: number, setSession: (session: Session) => void, setErrors: (errors: string[]) => void, sessionId?: string) {

    const headers = {
        'Content-Type': 'application/json',
        // @ts-ignore
        'Station-Id': station
    }

    if (sessionId) {
        // @ts-ignore
        headers['Session-Id'] = sessionId
    }

    const requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            type: vessel,
            content: content
        })
    }

    fetch('http://localhost:8080/api/vessels', requestOptions)
        .then(async response => {
            const json = await response.json()

            if (response.ok) {
                setSession(json)
                setErrors([])
            } else {
                setErrors(json.errors)
            }
        })
}

export default postVessel

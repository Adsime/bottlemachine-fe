import React from "react";

function postFinish(station: string, setErrors: (errors: string[]) => void, setShowReceipt: (value: React.SetStateAction<boolean>) => void, sessionId?: string) {

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
        headers: headers
    }

    fetch('http://localhost:8080/api/sessions/finish', requestOptions)
        .then(async response => {
            const json = await response.json()

            if (response.ok) {
                setErrors([])
                setShowReceipt(true)
            } else {
                setErrors(json.errors)
            }
        })
}

export default postFinish

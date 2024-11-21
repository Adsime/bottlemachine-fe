
function postFinish(setErrors: (errors: string[]) => void, sessionId?: string) {

    const headers = {
        'Content-Type': 'application/json',
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
            } else {
                setErrors(json.errors)
            }
        })
}

export default postFinish
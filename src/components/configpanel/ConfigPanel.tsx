import './ConfigPanel.css'
import {Session} from "../../api/types.tsx";
import React from "react";

type Props = {
    sessionId?: string
    content: number
    station: string
    setSession: (value: React.SetStateAction<Session>) => void
    setContent: (value: React.SetStateAction<number>) => void
    setStation: (value: React.SetStateAction<string>) => void
}

function ConfigPanel(props: Props) {

    const onSessionIdChange = (value: string) => {
        props.setSession((prevSession: Session) => ({
            ...prevSession,
            sessionId: value
        }))
    }

    return (
        <div className={'configPanel'}>
            <h1>Configpanel</h1>
            <div className={'fieldContainer'}>
                <label>SessionId: <input type={"text"}
                                         onInput={(e) => onSessionIdChange(e.currentTarget.value)}
                                         value={props.sessionId}/>
                </label>
                <br/>
                <label>Contents (5% threshold): <input type={"number"}
                                                       onInput={e => props.setContent(parseInt(e.currentTarget.value))}
                                                       value={props.content}/></label>
                <br/>
                <label>Station: <input type={"text"} value={props.station} onInput={e => props.setStation(e.currentTarget.value)}/></label>
            </div>
        </div>
    );
}

export default ConfigPanel

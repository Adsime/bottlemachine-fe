import './ConfigPanel.css'
import {Config, Session} from "../../api/types.tsx";
import React from "react";

type Props = {
    sessionId?: string
    config: Config
    setSession: (value: React.SetStateAction<Session>) => void
    setConfig: (value: React.SetStateAction<Config>) => void
}

function ConfigPanel(props: Props) {

    const onSessionIdChange = (value: string) => {
        props.setSession((prevSession: Session) => ({
            ...prevSession,
            sessionId: value
        }))
    }

    const onContentChange = (value: number) => {
        props.setConfig((prevConfig: Config) => ({
            ...prevConfig,
            content: value
        }))
    }

    const onStationChange = (value: string) => {
        props.setConfig((prevConfig: Config) => ({
            ...prevConfig,
            station: value
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
                                                       onInput={(e) => onContentChange(parseInt(e.currentTarget.value))}
                                                       value={props.config.content}/></label>
                <br/>
                <label>Station: <input type={"text"} value={props.config.station}
                                       onInput={e => onStationChange(e.currentTarget.value)}/></label>
            </div>
        </div>
    );
}

export default ConfigPanel

import './ConfigPanel.css'
import useConfig from "../../hooks/useConfig.tsx";
import useSession from "../../hooks/useSession.tsx";

function ConfigPanel() {

    const { config, setContent, setStation } = useConfig()
    const { session, setSessionId } = useSession()

    return (
        <div className={'configPanel'}>
            <h1>Configpanel</h1>
            <div className={'fieldContainer'}>
                <label>SessionId: <input type={"text"}
                                         onInput={(e) => setSessionId(e.currentTarget.value)}
                                         value={session.sessionId}/>
                </label>
                <br/>
                <label>Contents (5% threshold): <input type={"number"}
                                                       onInput={(e) => setContent(parseInt(e.currentTarget.value))}
                                                       value={config.content}/></label>
                <br/>
                <label>Station: <input type={"text"} value={config.station}
                                       onInput={e => setStation(e.currentTarget.value)}/></label>
            </div>
        </div>
    );
}

export default ConfigPanel

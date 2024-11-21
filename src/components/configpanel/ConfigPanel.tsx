import './ConfigPanel.css'

type Props = {
    sessionId?: string
    content: number
    onSessionIdChange: (sessionId: string) => void
    onContentsChange: (contents: number) => void
}

function ConfigPanel(props: Props) {

    return (
        <div className={'configPanel'}>
            <h1>Configpanel</h1>
            <label>SessionId: <input type={"text"}
                                     onInput={(e) => props.onSessionIdChange(e.currentTarget.value)}
                                     value={props.sessionId}/>
            </label>
            <br/>
            <label>Contents (5% threshold): <input type={"number"} onInput={e => props.onContentsChange(parseInt(e.currentTarget.value))} value={props.content} /></label>
        </div>
    );
}

export default ConfigPanel

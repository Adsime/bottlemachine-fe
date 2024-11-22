import {useEffect, useState} from 'react'
import './App.css'
import ConfigPanel from "./components/configpanel/ConfigPanel.tsx";
import OverviewPanel from "./components/overviewpanel/OverviewPanel.tsx";
import {Config, Session, Vessel} from "./api/types.tsx";
import postVessel from "./api/vessel.tsx";
import ReceiptPanel from "./components/receiptpanel/ReceiptPanel.tsx";
import postFinish from "./api/finish.tsx";
import configPanel from "./components/configpanel/ConfigPanel.tsx";

const defaultSession: Session = {
    sessionId: "",
    cans: 0,
    bottles: 0,
    subtotal: 0
}

const defaultConfig: Config = {
    content: 5,
    station: "station-1"
}

function App() {
    const [session, setSession] = useState<Session>(defaultSession)
    const [config, setConfig] = useState<Config>(defaultConfig)
    const [errors, setErrors] = useState<string[]>([])
    const [showReceipt, setShowReceipt] = useState(false)
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        if (!config.station) {
            setDisabled(true)
        } else if (config.station && disabled) {
            setDisabled(false)
        }
    }, [config.station])

    const handleVessel = (vessel: Vessel) => {
        setDisabled(true)

        setTimeout(() => {
            setDisabled(false)
        }, (vessel == Vessel.BOTTLE) ? 1000 : 2000)
        postVessel(vessel, config, setSession, setErrors, session.sessionId)
    }

    const finish = () => {
        if (session != defaultSession) {
            postFinish(config.station, setErrors, setShowReceipt, session.sessionId)
        }
    }

    const restart = () => {
        setSession(defaultSession)
        setShowReceipt(false)
    }

    const mapErrors = () => errors.map((err, i) => (<h2 key={`error-${i}`}>{err}</h2>))

    return (
        <>
            <div className={'column'}>
                <ConfigPanel sessionId={session.sessionId} config={config} setSession={setSession}
                             setConfig={setConfig}/>
                {showReceipt ? <button className={"vessel"} onClick={restart}>Start på nytt</button> :
                    <>
                        <button className={'vessel'} onClick={() => handleVessel(Vessel.BOTTLE)}
                                disabled={disabled}>Pant
                            flaske
                        </button>
                        <button className={'vessel'} onClick={() => handleVessel(Vessel.CAN)} disabled={disabled}>Pant
                            boks
                        </button>
                    </>
                }


            </div>

            <div className={'column'}>
                <h1>Panteautomat</h1>
                {errors && mapErrors()}
                <div className={'circle'}></div>
            </div>

            <div className={'column'}>
                {showReceipt ? <ReceiptPanel {...session} /> : <OverviewPanel {...session} finishAction={finish}/>}
            </div>
        </>
    )
}

export default App

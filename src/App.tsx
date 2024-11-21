import {useEffect, useState} from 'react'
import './App.css'
import ConfigPanel from "./components/configpanel/ConfigPanel.tsx";
import OverviewPanel from "./components/overviewpanel/OverviewPanel.tsx";
import {Session, Vessel} from "./api/types.tsx";
import postVessel from "./api/vessel.tsx";
import ReceiptPanel from "./components/receiptpanel/ReceiptPanel.tsx";
import postFinish from "./api/finish.tsx";

const defaultState: Session = {
    sessionId: "",
    cans: 0,
    bottles: 0,
    subtotal: 0
}

function App() {
    const [session, setSession] = useState<Session>(defaultState)
    const [content, setContent] = useState(5)
    const [errors, setErrors] = useState<string[]>([])
    const [showReceipt, setShowReceipt] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [station, setStation] = useState("station-1")

    useEffect(() => {
        if(!station) {
            setDisabled(true)
        } else if (station && disabled) {
            setDisabled(false)
        }
    }, [station])

    const handleVessel = (vessel: Vessel) => {
        if (showReceipt && !errors) {
            setShowReceipt(false)
        }

        setDisabled(true)
        setTimeout(() => {
            setDisabled(false)
        }, (vessel == Vessel.BOTTLE) ? 1000 : 2000)
        postVessel(vessel, station, content, setSession, setErrors, session.sessionId)
    }

    const finish = () => {
        if (session != defaultState) {
            postFinish(station, setErrors, setShowReceipt, session.sessionId)
        }
    }

    const mapErrors = () => errors.map(err => (<h2>{err}</h2>))

    return (
        <>
            <div className={'column'}>
                <ConfigPanel sessionId={session.sessionId} content={content} station={station} setSession={setSession} setContent={setContent} setStation={setStation} />
                <button className={'vessel'} onClick={() => handleVessel(Vessel.BOTTLE)} disabled={disabled}>Pant flaske</button>
                <button className={'vessel'} onClick={() => handleVessel(Vessel.CAN)} disabled={disabled}>Pant boks</button>
            </div>

            <div className={'column'}>
                <h1>Panteautomat</h1>
                {errors && mapErrors()}
                <div className={'circle'}></div>
            </div>

            <div className={'column'}>
                {showReceipt ? <ReceiptPanel {...session} /> : <OverviewPanel {...session} finishAction={finish} />}
            </div>
        </>
    )
}

export default App

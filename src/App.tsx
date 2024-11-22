import {useEffect, useState} from 'react'
import './App.css'
import ConfigPanel from "./components/configpanel/ConfigPanel.tsx";
import OverviewPanel from "./components/overviewpanel/OverviewPanel.tsx";
import {Vessel} from "./api/types.tsx";
import ReceiptPanel from "./components/receiptpanel/ReceiptPanel.tsx";
import useConfig from "./hooks/useConfig.tsx";
import useError from "./hooks/useError.tsx";
import useApi from "./hooks/useApi.tsx";
import useSession from "./hooks/useSession.tsx";

function App() {
    const {resetSession, isEmptySession} = useSession()
    const {config} = useConfig()
    const {errors} = useError()
    const {postVessel, postFinish} = useApi()
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

        postVessel(vessel)

        setTimeout(() => {
            setDisabled(false)
        }, (vessel == Vessel.BOTTLE) ? 1000 : 2000)
    }

    const finish = () => {
        if (!isEmptySession()) {
            postFinish().then((response) => {
                    if (response.ok) {
                        setShowReceipt(true)
                    }
                }
            )
        }
    }

    const restart = () => {
        resetSession()
        setShowReceipt(false)
    }

    const mapErrors = () => errors.map((err, i) => (<h2 key={`error-${i}`}>{err}</h2>))

    return (
        <>
            <div className={'column'}>
                <ConfigPanel/>
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
                {showReceipt ? <ReceiptPanel /> : <OverviewPanel finishAction={finish}/>}
            </div>
        </>
    )
}

export default App

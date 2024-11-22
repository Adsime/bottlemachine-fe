import './OverviewPanel.css'
import useSession from "../../hooks/useSession.tsx";

type Props = {
    finishAction: () => void
}

function OverviewPanel(props: Props) {

    const {session} = useSession()

    return (
        <div className={'overviewPanel'}>
            <h1>Oversikt</h1>
            <h3>Flasker: {session.bottles}</h3>
            <h3>bokser: {session.cans}</h3>
            <h2>Kroner: {session.subtotal},-</h2>
            <button className={"overviewButton"} onClick={props.finishAction}>Betal ut</button>
        </div>
    );
}

export default OverviewPanel

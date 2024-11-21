import './OverviewPanel.css'

type Props = {
    cans: number
    bottles: number
    subtotal: number
    finishAction: () => void
}

function OverviewPanel(props: Props) {

    return (
        <div className={'overviewPanel'}>
            <h1>Oversikt</h1>
            <h3>Flasker: {props.bottles}</h3>
            <h3>bokser: {props.cans}</h3>
            <h2>Kroner: {props.subtotal},-</h2>
            <button className={"overviewButton"} onClick={props.finishAction}>Betal ut</button>
        </div>
    );
}

export default OverviewPanel

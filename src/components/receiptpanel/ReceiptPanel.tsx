import './ReceiptPanel.css'

type Props = {
    sessionId?: string
    cans: number
    bottles: number
    subtotal: number
}

function ReceiptPanel(props: Props) {

    return (
        <div className={'overviewPanel'}>
            <h1>Kvittering</h1>
            <h3>Flasker: {props.bottles}</h3>
            <h3>bokser: {props.cans}</h3>
            <h2>Kroner: {props.subtotal},-</h2>
            <p>Referanse: {props.sessionId}</p>
        </div>
    );
}

export default ReceiptPanel

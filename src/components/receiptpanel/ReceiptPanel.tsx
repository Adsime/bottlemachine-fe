import './ReceiptPanel.css'
import useSession from "../../hooks/useSession.tsx";

function ReceiptPanel() {

    const { session } = useSession()

    return (
        <div className={'overviewPanel'}>
            <h1>Kvittering</h1>
            <h3>Flasker: {session.bottles}</h3>
            <h3>bokser: {session.cans}</h3>
            <h2>Kroner: {session.subtotal},-</h2>
            <p>Referanse: {session.sessionId}</p>
        </div>
    );
}

export default ReceiptPanel

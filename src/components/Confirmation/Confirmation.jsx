import { useHistory } from 'react-router-dom'
import '../Confirmation/Confirmation.css'

const Confirmation = () => {

    const history = useHistory()

    const handleClick = () => {
        history.push('/feeling')
    }

    return (
        <div className="container">
            <h1>Thank You!</h1>
            <button onClick={handleClick}>LEAVE NEW FEEDBACK</button>
        </div>
    )
}

export default Confirmation
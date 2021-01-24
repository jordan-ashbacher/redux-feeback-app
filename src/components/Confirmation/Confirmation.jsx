import { useHistory } from 'react-router-dom'
import '../Confirmation/Confirmation.css'
import Button from '@material-ui/core/Button'

const Confirmation = () => {

    const history = useHistory()

    const handleClick = () => {
        history.push('/feeling')
    }

    return (
        <div className="container">
            <h1>Thank You!</h1>
            <Button variant="contained" onClick={handleClick}>LEAVE NEW FEEDBACK</Button>
        </div>
    )
}

export default Confirmation
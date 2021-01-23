import {useHistory} from 'react-router-dom'

const Confirmation = () => {

    const history = useHistory()
    
    const handleClick = () => {
        history.push('/home')
    }

    return (
        <>
        <h1>Thank You!</h1>
        <button onClick={handleClick}>LEAVE NEW FEEDBACK</button>
        </>
    )
}

export default Confirmation
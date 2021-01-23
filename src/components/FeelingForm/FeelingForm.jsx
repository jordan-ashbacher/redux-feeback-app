import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'

const FeelingForm = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const [feeling, setFeeling] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('in feeling handle submit')
        const action = {
            type: 'SET_FEELING',
            payload: Number(feeling)
        }

        dispatch(action)
        setFeeling('')
        history.push('/understanding')
    }

    return(
        <>
        <h1>How are you feeling today?</h1>
        <form onSubmit={handleSubmit}>
            <input 
                type="number" 
                id="feelingIn" 
                min="1" 
                max="10" 
                onChange={(e) => setFeeling(e.target.value)}
                value={feeling}
                required
            />
            <button type="submit">NEXT</button>
        </form>
            
        </>
    )
}

export default FeelingForm
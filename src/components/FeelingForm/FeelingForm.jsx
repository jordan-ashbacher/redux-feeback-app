import {useState} from 'react'
import {useDispatch} from 'react-redux'

const FeelingForm = () => {

    const dispatch = useDispatch()
    const [feeling, setFeeling] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('in feeling handle submit')
        const action = {
            type: 'SET_FEELING',
            payload: Number(feeling)
        }
        console.log(action)

        dispatch(action)
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
            />
            <button type="submit">NEXT</button>
        </form>
            
        </>
    )
}

export default FeelingForm
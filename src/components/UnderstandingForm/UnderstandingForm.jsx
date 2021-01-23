import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'

const UnderstandingForm = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const [understanding, setUnderstanding] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('in understanding handleSubmit')
        const action = {
            type: 'SET_UNDERSTANDING',
            payload: Number(understanding)
        }

        dispatch(action)
        setUnderstanding('')
        history.push('/support')
    }

    return(
        <>
        <h1>How well are you understanding the content?</h1>
        <form onSubmit={handleSubmit}>
            <input 
                type="number" 
                id="understandingIn" 
                min="1" 
                max="10" 
                onChange={(e) => setUnderstanding(e.target.value)}
                value={understanding}
                required
            />
            <button type="submit">NEXT</button>
        </form>
            
        </>
    )
}

export default UnderstandingForm
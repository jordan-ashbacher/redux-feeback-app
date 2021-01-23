import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'

const SupportForm = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const [support, setSupport] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('in support handleSubmit')
        const action = {
            type: 'SET_SUPPORT',
            payload: Number(support)
        }

        dispatch(action)
        setSupport('')
        history.push('/comment')
    }

    return(
        <>
        <h1>How well are you being supported?</h1>
        <form onSubmit={handleSubmit}>
            <input 
                type="number" 
                id="supportIn" 
                min="1" 
                max="10" 
                onChange={(e) => setSupport(e.target.value)}
                value={support}
            />
            <button type="submit">NEXT</button>
        </form>
            
        </>
    )
}

export default SupportForm
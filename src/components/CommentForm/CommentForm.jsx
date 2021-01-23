import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'

const CommentForm = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const [comment, setComment] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('in support handleSubmit')
        const action = {
            type: 'SET_COMMENT',
            payload: comment
        }

        dispatch(action)
        setComment('')
        history.push('/review')
    }

    return(
        <>
        <h1>Any comments you want to leave?</h1>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                id="commentIn"
                onChange={(e) => setComment(e.target.value)}
                value={comment}
            />
            <button type="submit">NEXT</button>
        </form>
            
        </>
    )
}

export default CommentForm
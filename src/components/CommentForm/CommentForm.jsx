import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import '../CommentForm/CommentForm.css'

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

    return (
        <div className="formContainer">
            <h1>Any comments you want to leave?</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    type="text"
                    id="commentIn"
                    label="Comment" 
                    variant="outlined"
                    onChange={(e) => setComment(e.target.value)}
                    value={comment}
                />
                <Button id="nextBtn" variant="contained" type="submit">NEXT</Button>
            </form>

        </div>
    )
}

export default CommentForm
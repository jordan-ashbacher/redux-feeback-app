import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'

const ReviewPage = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const feedback = useSelector(store => store.feedbackReducer)

    const handleSubmit = () => {
        axios
        .post('/feedback', {
            feeling: feedback.feeling,
            understanding: feedback.understanding,
            support: feedback.support,
            comment: feedback.comment
        })
        .then((response) => {
            console.log(response)
            dispatch({ type: 'RESET' })
            history.push('/confirmation')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return(
        <>
        <h1>Review Your Feedback</h1>
        <p>Feeling: {feedback.feeling}</p>
        <p>Understanding: {feedback.understanding}</p>
        <p>Support: {feedback.support}</p>
        <p>Comment: {feedback.comment}</p>
        <button onClick={handleSubmit}>SUBMIT</button>
        </>
    )
}

export default ReviewPage
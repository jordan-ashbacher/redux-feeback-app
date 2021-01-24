import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import '../ReviewPage/ReviewPage.css'
import Button from '@material-ui/core/Button'

const ReviewPage = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const feedback = useSelector(store => store.feedbackReducer)

    const handleSubmit = () => {

        if (feedback.feeling === 0) {
            alert('Missing feeling feedback')
        } else if (feedback.understanding === 0) {
            alert('Missing understanding feedback')
        } else if (feedback.support === 0) {
            alert('Missing support feedback')
        } else {
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
        
    }

    return (
        <div className="container">
            <h1>Review Your Feedback</h1>
            <p>Feeling: {feedback.feeling}</p>
            <p>Understanding: {feedback.understanding}</p>
            <p>Support: {feedback.support}</p>
            <p>Comment: {feedback.comment}</p>
            <Button id="submitBtn" variant="contained" onClick={handleSubmit}>SUBMIT</Button>
        </div>
    )
}

export default ReviewPage
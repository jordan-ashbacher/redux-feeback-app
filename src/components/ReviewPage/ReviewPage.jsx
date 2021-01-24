import axios from 'axios'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import '../ReviewPage/ReviewPage.css'
import Button from '@material-ui/core/Button'
import Edit from '@material-ui/icons/Edit'

const ReviewPage = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const feedback = useSelector(store => store.feedbackReducer)
    const [editMode, setEditMode] = useState(false)

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

    const toggleEdit = () => {
        setEditMode(!editMode)
    }

    const handleEdit = (e) => {
        console.log('in handle edit')
        if (e.currentTarget.id === 'editFeelingBtn') {
            history.push('/feeling')
        } else if (e.currentTarget.id === 'editUnderstandingBtn') {
            history.push('/understanding')
        } else if (e.currentTarget.id === 'editSupportBtn') {
            history.push('/understanding')
        } else if (e.currentTarget.id === 'editCommentBtn') {
            history.push('/comment')
        }
    }

    return (
        <div className="container">
            {editMode ?
                <div className="reviewContainer">
                    <h1>Review Your Feedback</h1>
                    <p>Feeling: {feedback.feeling} 
                        <Button className="editIconBtn" id="editFeelingBtn" onClick={handleEdit}><Edit /></Button>
                    </p>
                    <p>Understanding: {feedback.understanding} 
                        <Button className="editIconBtn" id="editUnderstandingBtn" onClick={handleEdit}><Edit /></Button>
                    </p>
                    <p>Support: {feedback.support} 
                        <Button className="editIconBtn" id="editSupportBtn" onClick={handleEdit}><Edit /></Button>
                    </p>
                    <p>Comment: {feedback.comment} 
                        <Button className="editIconBtn" id="editCommentBtn" onClick={handleEdit}><Edit /></Button>
                    </p>
                    <Button id="reviewCancelBtn" variant="contained" onClick={toggleEdit}>CANCEL</Button>
                </div>
                :
                <>
                    <h1>Review Your Feedback</h1>
                    <p>Feeling: {feedback.feeling}</p>
                    <p>Understanding: {feedback.understanding}</p>
                    <p>Support: {feedback.support}</p>
                    <p>Comment: {feedback.comment}</p>
                    <Button id="reviewEditBtn" variant="contained" onClick={toggleEdit}>EDIT</Button>
                    <Button id="reviewSubmitBtn" variant="contained" onClick={handleSubmit}>SUBMIT</Button>
                </>
            }
        </div>
    )
}

export default ReviewPage
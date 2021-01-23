import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Slider from '@material-ui/core/Slider'
import SentimentVeryDissatisfied from '@material-ui/icons/SentimentVeryDissatisfied'
import SentimentVerySatisfied from '@material-ui/icons/SentimentVerySatisfied'
import '../UnderstandingForm/UnderstandingForm.css'

const useStyles = makeStyles((theme) => ({
    root: {
        width: 500,
        margin: 30
    },
    margin: {
        height: theme.spacing(3)
    },
}))

const marks = [
    {
        value: 1,
        label: <SentimentVeryDissatisfied />
    },
    {
        value: 5,
        label: <SentimentVerySatisfied />
    }
]

const UnderstandingForm = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const classes = useStyles()

    const [understanding, setUnderstanding] = useState(1)

    const handleNext = () => {
        console.log('in understanding handleSubmit')
        const action = {
            type: 'SET_UNDERSTANDING',
            payload: Number(understanding)
        }

        dispatch(action)
        setUnderstanding('')
        history.push('/support')
    }

    const handleChange = (event, newValue) => {
        setUnderstanding(newValue)
    }

    return (
        <div className="formContainer">
            <h1>How well are you understanding the content?</h1>
            <div className={classes.root}>
                <Slider
                    value={understanding}
                    aria-labelledby="understandingSlider"
                    step={1}
                    min={1}
                    max={5}
                    marks={marks}
                    valueLabelDisplay="on"
                    onChange={handleChange}
                />
            </div>
            <button onClick={handleNext}>NEXT</button>

        </div>
    )
}

export default UnderstandingForm
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Slider from '@material-ui/core/Slider'
import SentimentVeryDissatisfied from '@material-ui/icons/SentimentVeryDissatisfied'
import SentimentVerySatisfied from '@material-ui/icons/SentimentVerySatisfied'
import '../FeelingForm/FeelingForm.css'

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


const FeelingForm = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const classes = useStyles()

    const [feeling, setFeeling] = useState(1)

    const handleNext = () => {

        console.log('in feeling handle submit')

        const action = {
            type: 'SET_FEELING',
            payload: Number(feeling)
        }

        dispatch(action)
        setFeeling('')
        history.push('/understanding')
    }

    const handleChange = (event, newValue) => {
        setFeeling(newValue)
    }

    return (
        <div className="formContainer">
            <h1>How are you feeling today?</h1>
            <div className={classes.root}>
                <Slider
                    value={feeling}
                    aria-labelledby="feelingSlider"
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

export default FeelingForm
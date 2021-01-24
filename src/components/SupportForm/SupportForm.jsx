import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Slider from '@material-ui/core/Slider'
import SentimentVeryDissatisfied from '@material-ui/icons/SentimentVeryDissatisfied'
import SentimentVerySatisfied from '@material-ui/icons/SentimentVerySatisfied'
import '../SupportForm/SupportForm.css'
import Button from '@material-ui/core/Button'

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

const SupportForm = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const classes = useStyles()

    const [support, setSupport] = useState(1)

    const handleNext = () => {
        console.log('in support handleSubmit')
        const action = {
            type: 'SET_SUPPORT',
            payload: Number(support)
        }

        dispatch(action)
        setSupport('')
        history.push('/comment')
    }

    const handleChange = (event, newValue) => {
        setSupport(newValue)
    }

    return (
        <div className="formContainer">
            <h1>How well are you being supported?</h1>
            <div className={classes.root}>
                <Slider
                    value={support}
                    aria-labelledby="supportSlider"
                    step={1}
                    min={1}
                    max={5}
                    marks={marks}
                    valueLabelDisplay="on"
                    onChange={handleChange}
                />
            </div>
            <Button id="nextBtn" variant="contained" onClick={handleNext}>NEXT</Button>

        </div>
    )
}
export default SupportForm
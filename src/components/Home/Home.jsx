import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import '../Home/Home.css'

const Home = () => {

    const history = useHistory()
    const handleNext = () => {
        history.push('/feeling')
    }

    return (
        <main>
            <div className='titleContainer'>
                <Button id="titleBtn" className='titleBtn' color="primary" variant="contained" fullWidth={true} onClick={handleNext}>How Zhu Doin'?</Button>
            </div>

        </main>

    )
}

export default Home
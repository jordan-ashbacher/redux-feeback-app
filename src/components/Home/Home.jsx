import {useHistory} from 'react-router-dom'

const Home = () => {

    const history = useHistory()
    const handleNext = () => {
        history.push('/feeling')
    }

    return (
        <div className='titleContainer'>
            <button className='titleBtn' onClick={handleNext}>How Zhu Doin'?</button>
        </div>
        
    )
}

export default Home
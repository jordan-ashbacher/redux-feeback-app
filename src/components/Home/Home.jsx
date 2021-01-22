import {useHistory} from 'react-router-dom'

const Home = () => {

    const history = useHistory()
    const handleNext = () => {
        history.push('/feeling')
    }

    return (
        <div className='titleContainer'>
            <h1>How Zhu Doin'?</h1>
            <button onClick={handleNext}>Tell Us How You Feel</button>
        </div>
        
    )
}

export default Home
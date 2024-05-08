import {useNavigate} from 'react-router-dom'

const Second = () => {
    const navigate = useNavigate()
    return(
        <>
        <h3>About Page</h3>
        <button onClick={() => navigate('/')}>Back to Homepage</button>
        </>
    )
}

export default Second
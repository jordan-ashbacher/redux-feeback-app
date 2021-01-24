import '../Admin/Admin.css'
import {useSelector} from 'react-redux'

const Admin = () => {

    const feedback = useSelector(store => store.adminReducer)
    console.log(feedback)

    return(
        <table>
            Admin table goes here.
        </table>
    )
}

export default Admin
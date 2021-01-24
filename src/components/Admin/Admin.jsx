import '../Admin/Admin.css'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import AdminItem from '../AdminItem/AdminItem'
import { useEffect } from 'react'
import Delete from '@material-ui/icons/Delete'

const Admin = () => {

    useEffect(() => getFeedback(), [])
    const dispatch = useDispatch()
  
    const getFeedback = () => {
        axios
            .get('/feedback')
            .then((response) => {
                dispatch({ type: 'SET_FEEDBACK', payload: response.data })
            })
            .catch(err => console.log(err))
    }
    
    const feedback = useSelector(store => store.adminReducer)
    console.log(feedback)

    return (
        <table>
            <thead>
                <tr>
                    <th>Feeling</th>
                    <th>Understanding</th>
                    <th>Support</th>
                    <th>Comment</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {feedback.map((item) => (
                    <AdminItem key={item.id} item={item} getFeedback={getFeedback} />
                ))}
            </tbody>
        </table>
    )
}

export default Admin
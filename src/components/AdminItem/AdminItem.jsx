import Delete from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button'
import axios from 'axios'


const AdminItem = ({ item, getFeedback }) => {

    const handleDelete = () => {
        axios
        .delete(`/feedback/${item.id}`)
        .then((response) => {
            console.log(response)
            getFeedback()
        })
        .catch(err => console.log(err))
    }

    return (
        <tr>
            <td>{item.feeling}</td>
            <td>{item.understanding}</td>
            <td>{item.support}</td>
            <td>{item.comments}</td>
            <td><Button variant="contained" onClick={handleDelete}><Delete /></Button></td>
        </tr>
    )
}

export default AdminItem
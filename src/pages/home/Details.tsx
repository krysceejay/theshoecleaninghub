import {FC, useState} from 'react'
import { useParams } from 'react-router-dom'

const Details: FC = () => {
    const [first, setfirst] = useState('')
    const {number} = useParams()

    console.log(number);
    

  return <div>Hello Details</div>
}

export default Details

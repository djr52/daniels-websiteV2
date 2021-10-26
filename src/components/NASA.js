import {useState, useEffect} from 'react'
import { CenteredDiv } from '../styles/ViewStyles';

const NASA = () =>{
    const [apod, setApod] = useState([])


    useEffect(() =>{
        getApodData();
        
        async function getApodData(){
            const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=XSFrigXlrRCJU0EjUay3tUpQLd2HUK4fClR3uWNn');
            const data = await response.json();
            setApod(data)
            console.log(data.title)

        }

    }, []);
    return(

        <CenteredDiv className="text-white">
            <h1>NASA's APOD</h1>

            <h1>Date: {apod.date}</h1>


        </CenteredDiv>
    )
}

export default NASA;
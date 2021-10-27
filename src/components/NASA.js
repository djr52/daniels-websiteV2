import {useState, useEffect} from 'react'
import { CenteredDiv, MediaHeader, MediaText, MediaContainer } from '../styles/ViewStyles';

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
            <div>
                <MediaText>While you're here; Check out this cool astronomy photo/video! Brought to you by NASA's APOD API.</MediaText>
                <MediaHeader>{apod.title}</MediaHeader>
                <MediaContainer height="600" width="500"src={apod.url} title={apod.title} frameBorder="0"></MediaContainer>

                <MediaText>{apod.date} | ©{apod.copyright}</MediaText>           
            </div>



        </CenteredDiv>
    )
}

export default NASA;
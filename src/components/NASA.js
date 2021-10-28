import {useState, useEffect} from 'react'
import { CenteredDiv, MediaHeader, MediaText, MediaContainer } from '../styles/ViewStyles';

const NASA = () =>{
    const [apod, setApod] = useState([])
    const API_KEY = 'XSFrigXlrRCJU0EjUay3tUpQLd2HUK4fClR3uWNn'
    const API_URL = '';
    console.log(API_URL);

    useEffect(() =>{
        const API_URL = 'https://api.nasa.gov/planetary/apod?api_key=' + API_KEY;

        getApodData();

        async function getApodData(){
            const response = await fetch(API_URL);
            const data = await response.json();
            setApod(data)
            console.log(data.title)

        }

    }, []);


    function VideoAPOD(props){
        return <MediaContainer height="600" width="500"src={apod.url} title={apod.title} frameBorder="0"></MediaContainer>
    } //Alternative instead of adding x-frame for firefox (gov doesnt like me taking an iframe of their website content)
    function PhotoAPOD(props){
        return <img height="600" width="500"src={apod.url} title={apod.title} frameBorder="0" alt="NASA's APOD"></img>

    }
    function DisplayAPODTag(props){
        
        if (apod.media_type === "image"){
            return <PhotoAPOD/>
        }
        return <VideoAPOD/>

    }


    return(

        <CenteredDiv className="text-white">
            <div>
                <MediaText>While you're here... Check out this cool astronomy photo/video! Brought to you by NASA's APOD API.</MediaText>
                <MediaHeader>{apod.title}</MediaHeader>
                <DisplayAPODTag/>
                <MediaText>{apod.date} | ©{apod.copyright}</MediaText>           
            </div>



        </CenteredDiv>
    )
}

export default NASA;
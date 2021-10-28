import { IntroCard, SocialMediaDiv, Icon, ContentCard } from "../styles/ViewStyles";
import NASA from "./NASA";

import github from '../assets/github-logo-60.png';
import linkedIn from '../assets/linkedin-logo-60.png';
import instag from '../assets/instagram-logo-60.png';

const HomeCard = () =>{
    return(
        <IntroCard className="position-absolute">
            <ContentCard className="border border-dark rounded-top bg-secondary px-5">
                <h1>Hello, I'm Daniel J Ramirez</h1> 
                <h5>I'm an aspiring Software Developer, with a focus towards Fullstack Web Development.</h5>
                <h5>Check out my other work and social media down below:</h5>
                <SocialMediaDiv className="rounded-top">
                    <a href="https://github.com/djr52" target="_blank" rel="noreferrer"><Icon class="icon-img" src={github} alt="Github Profile Link"/></a>
                    <a href="https://www.linkedin.com/in/daniel-ramirez-993ab81a0/" target="_blank" rel="noreferrer"><Icon class="icon-img" src={linkedIn} alt="LinkedIn Profile Link"/></a>
                    <a href="https://www.instagram.com/danny.r1221/" target="_blank" rel="noreferrer"><Icon class="icon-img" src={instag} alt="Instagram Profile Link"/></a>
                </SocialMediaDiv>
            </ContentCard>
            <NASA/>
        </IntroCard>
        

    );

}

export default HomeCard;
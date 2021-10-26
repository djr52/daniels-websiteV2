import { IntroCard, SocialMediaDiv } from "../styles/ViewStyles";
import NASA from "./NASA";


const HomeCard = () =>{
    return(
        <IntroCard>
            <div className="border border-dark rounded-top bg-secondary px-5">
                <h1>Hello, I'm Daniel J Ramirez</h1> 
                <h5>Welcome to my little Website!</h5>
                <h5>Check out my other work and social media down below</h5>
                <SocialMediaDiv>

                </SocialMediaDiv>
            </div>
            <NASA/>
        </IntroCard>
        

    );

}

export default HomeCard;
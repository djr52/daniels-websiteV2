import React from "react";
import { ContentCard, Icon, SocialContact } from "../styles/ViewStyles";

import github from '../assets/github-logo-60.png';
import linkedIn from '../assets/linkedin-logo-60.png';
import instag from '../assets/instagram-logo-60.png';

const Contact = () =>{
    return(
        <div className="container text-white">
            <ContentCard className="row">
                <div className="col">
                    <h2>Contact me @</h2>
                    <h2 className="text-info">dj.ramirez1221@gmail.com</h2>
                    <h4>Or connect with me through social media!</h4>
                </div>
                <div className="col">
                    <SocialContact>
                        <a href="https://www.linkedin.com/in/daniel-ramirez-993ab81a0/" target="_blank" rel="noreferrer"><Icon class="icon-img" src={linkedIn} alt="LinkedIn Profile Link"/></a>
                        <h3>
                            Connect with me on <h3 className="text-info">LinkedIn</h3>
                        </h3>  
                    </SocialContact>
                    <SocialContact>
                        <a href="https://www.instagram.com/danny.r1221/" target="_blank" rel="noreferrer"><Icon class="icon-img" src={instag} alt="Instagram Profile Link"/></a>
                        <h3>
                            Follow me on <h3 className="text-info">Instagram</h3>
                        </h3>
                    </SocialContact>
                    <SocialContact>
                        <a href="https://github.com/djr52" target="_blank" rel="noreferrer"><Icon class="icon-img" src={github} alt="Github Profile Link"/></a>
                        <h3>
                            Or follow me on <h3 className="text-info">GitHub!</h3>
                        </h3>                        
                    </SocialContact>


                </div>

            </ContentCard>


        </div>
    )

}

export default Contact;
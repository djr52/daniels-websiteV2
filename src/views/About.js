import React from "react";
import { AboutColOne, AboutColTwo } from "../styles/ViewStyles";

const About = () => {
    return (
        <div className="container">
            <div className="row">
                <AboutColOne className="col">
                    <h1>
                        Hello! Here's some stuff about me.
                    </h1>
                    <p>
                        As mentioned before, my name is Daniel Ramirez! I am a student currently attending New Jersey Institute of Technology, majoring in Web & Information Systems.
                    </p>
                    <p>
                        The origin of my passion involves my love for computers and software, and my more recent interest of data. I love challenging myself and seeing the results of my perseverance.
                    </p>
                    <p>
                        I wish to continue to further my experience and knowledge through my work and study!
                    </p>

                </AboutColOne>
                <AboutColTwo className="col">
                    <div class="aspects">
                        <h3>Inquisitive</h3>
                        <p>Whether if it's the problem itself or my own methods,
                            I am always questioning to find the best solution.</p>

                    </div>
                    <div class="aspects">
                        <h3>Persistent</h3>
                        <p>I don't give up easily. In the face of challenges, I will always do my best to find a way and push through.</p>
                    </div>
                    <div class="aspects">
                        <h3>Optimistic</h3>
                        <p>The last thing I ever want to bring is negativity and doubt. Bringing positive energy and sanguine feelings is one of the many things I strive for.</p>
                    </div>
                </AboutColTwo>
            </div>

        </div>
    )

}

export default About;
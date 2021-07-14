import React from 'react';

import github from '../images/github_icon.png';
import linkedin from '../images/linkedin_icon.png';

const Footer: React.FC = () => {

    return (
        <section className="footer">
            <div className="">
                <a className='nameLink' href="https://richardmillerwimmer.dev/#/" target="_blank" rel="noreferrer"><h4>Richard Miller Wimmer</h4></a>
                <div className='linkFlex'>
                    <a href="https://github.com/RichardMillerWimmer" target="_blank" rel="noreferrer">
                        <img className="icon" src={github} alt="github link" />
                    </a>
                    <br></br>
                    <a href="https://www.linkedin.com/in/richard-miller-wimmer/"
                        target="_blank" rel="noreferrer">
                        <img className="icon" src={linkedin} alt="linkedin link" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Footer;
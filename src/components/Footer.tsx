import React from 'react';

const Footer: React.FC = () => {

    return (
        <section className="footer">
            <h4>Footer</h4>
            <div className="titleContainer">
                <a className='nameLink' href="mailto: richardmmill@gmail.com"><h4>Richard Miller Wimmer</h4></a>
                <div>
                    <a href="https://github.com/RichardMillerWimmer" target="_blank" rel="noreferrer">github
                        {/* <img className="icon" src={github} alt="github link" /> */}
                    </a>
                    <br></br>
                    <a href="https://www.linkedin.com/in/richard-miller-wimmer/"
                        target="_blank" rel="noreferrer">linkedin
                        {/* <img className="icon" src={linkedin} alt="linkedin link" /> */}
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Footer;
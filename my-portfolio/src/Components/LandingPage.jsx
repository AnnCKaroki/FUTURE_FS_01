import { FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa'

function LandingPage() {
    return (
        <div className="landing-page">
            <h1>Hi, I am Ann Charity</h1>
            <p>I am the Integrated Full-Cycle Creator</p>

            <div className="social-links">
                <a href="#">
                    <FaInstagram size={30}/>
                </a>

                <a href="#">
                    <FaTwitter size={30}/>
                </a>

                <a href="#">
                    <FaLinkedin size={30}/>
                </a>

            </div>
        </div>
    )
}

export default LandingPage;

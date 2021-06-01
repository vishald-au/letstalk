import Img1 from '../chat.jpeg';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Start = () => {
    return (
        <div className='StartHere'>
            <div className='lightArea'><img src={Img1} /></div>
            <div className='darkArea'>
                <div>
                    <h2>Let's Talk<br></br>to each other</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse est enim.</p>
                    <Button className='startbtn' variant="contained"><Link to="/start">Let's Start</Link><ArrowForwardIcon /></Button>
                </div>
            </div>
        </div>
    )
}

export default Start

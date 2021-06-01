import Img1 from '../chat.jpeg';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
 

const Start = () => {
    return (
        <div className='StartHere'>
            <div className='lightArea'><img src={Img1} /></div>
            <div className='darkArea'>
                <div>
                    <h2>Let's Talk<br></br>to each other</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse est enim.</p>
                    <Button className='startbtn' variant="contained">Let's Start <ArrowForwardIcon /></Button>
                </div>
            </div>
        </div>
    )
}

export default Start

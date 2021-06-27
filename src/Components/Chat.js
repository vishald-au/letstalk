import Img1 from '../avt/avt4.png';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import LocalPhoneOutlinedIcon from '@material-ui/icons/LocalPhoneOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import TextField from '@material-ui/core/TextField';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { BrowserRouter as Link } from 'react-router-dom';

const Lists = () => {
    return (
        <div className=''>
            <div className='whitebottom'>
                <div className='row back-head'>
                    <div className='col-12'>
                        <Link to='/start' ><ChevronLeftIcon /></Link>
                    </div>
                </div>
                <div className='chat-head'>
                    <div className='row avtar-head'>
                        <div className='col-8'>
                            <img src={Img1} alt='img' />
                            <h5>Esra Grangier</h5>
                            <span>Last seen 3:54 pm</span>
                        </div>
                        <div className='col-4'>

                            <LocalPhoneOutlinedIcon />
                            <MoreVertOutlinedIcon />
                        </div>

                    </div>

                </div>
                <div className='chat-area'>
                    <div className='row'>
                        <div className='col-12'>
                            <p className='chatIn'>Lorem ipsum dolor</p>
                            <p className='chatOut'>Lorem ipsum dolor sit amet</p>
                            <p className='chatIn'>Odio turpis pharetra neque, ut tincidunt velit dui quis metus ornare vitae odio nec vehicula.</p>
                            <p className='chatOut'>Odio turpis pharetra neque, ut tincidunt velit dui quis metus ornare vitae odio nec vehicula.</p>
                            <p className='chatOut'>Lorem ipsum.</p>

                        </div>
                    </div>
                </div>
                <div className='bottom-chat'>
                    <TextField id="chat" placeholder="Write here..." className='textChat' variant='filled' />
                    <button className='chatIc'><KeyboardArrowRightIcon /></button>
                </div>


            </div>
        </div>
    )
}

export default Lists

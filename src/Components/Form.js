import Img1 from '../chat.jpeg';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import TextField from '@material-ui/core/TextField';
import { BrowserRouter as Link } from 'react-router-dom';




const Form = () => {


    return (
        <div className='StartHere'>
            <div className='lightArea'><img src={Img1} alt='img' /></div>
            <div className='darkArea'>
                <div>
                    <h2>Login</h2>
                    <form noValidate autoComplete='off'>
                        <TextField id='Username' type='text' label='Username' className='TextColor' />
                        <TextField id='standard-basic' type='password' label='Password' className='TextColor' />
                        <Link to='/start'><Button className='startbtn paddingup' variant='contained'>Submit<ArrowForwardIcon /></Button></Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form

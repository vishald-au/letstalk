import Img1 from '../chat.jpeg';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";




const Form = () => {

    
    return (
        <div className='StartHere'>
            <div className='lightArea'><img src={Img1} /></div>
            <div className='darkArea'>
                <div>
                    <h2>Login</h2>
                    <form noValidate autoComplete="off">
                        <TextField id="Username" label="Username" className='TextColor' value='' />
                        <TextField id="standard-basic" label="Password" className='TextColor' value='' />
                        <Link to="/start"><Button className='startbtn paddingup' variant="contained">Submit<ArrowForwardIcon /></Button></Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form

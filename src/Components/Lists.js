import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import TuneIcon from '@material-ui/icons/Tune';
import Data from '../Chat.json';

const Lists = ({ Link }) => {
    return (
        <div className='ListHere'>
            <div className='darktop'>
                <div className='row head-tab'>
                    <div className='col-6'>
                        <h2>Let's Talk</h2>
                    </div>
                    <div className='col-6'>
                        <SearchIcon />
                    </div>
                </div>
                <div className='row menu-bar'>
                    <div className='buttons-box'>

                        <a href='#' className='buttonm chats-menu'>Chats</a>
                        <a href='#' className='buttonm calls-menu'>Calls</a>
                        <Link to="/" className='buttonm calls-menu'>Logout</Link>

                    </div>
                </div>
            </div>
            <div className='whitebottom'>
                <div className='row sub-head'>
                    <div className='col-6'>
                        <h3>Chats <span>Friends</span></h3>
                    </div>
                    <div className='col-6'>
                        <TuneIcon />
                    </div>
                </div>
                <div className='list-head'>
                    <ul>
                        {Data.map(user => (

                            <Link to='/chat'><li key={user.id}>


                                <Badge color="secondary" overlap="circle" badgeContent={user.id}>
                                    <Avatar src={user.avtar} />
                                </Badge>

                                <h4>{user.fname}&nbsp;{user.lname}</h4>
                                <p>{user.chat}</p>
                                <span className='time'>{user.time}</span>

                            </li></Link>

                        ))}
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Lists

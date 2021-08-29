import { Avatar } from '@material-ui/core'
import './headerOption.css'

function HeaderOption({Icon, title, avatar, notificationNumber, notiBubble}) {
    return (
        <div className="headerOption">
            
            <div className="icon">
            {Icon && <Icon className="headerOption__icon" />}
            </div>
            
            {avatar && <Avatar src={avatar} className="headerOption__avatar" />}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOption

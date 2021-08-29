import React from 'react'
import { Search, Home, SupervisorAccount, Business, Chat, Notifications } from '@material-ui/icons';
import './header.css'
import HeaderOption from './HeaderOption';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />

                <Search className="mobileSearch" />
                <div className="header__search">
                
                    <Search/>
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div className="header__right">
              <HeaderOption title="Home" Icon={Home} />
              <HeaderOption title="My Network" Icon={SupervisorAccount} />
              <HeaderOption title="Business" Icon={Business} />
              <HeaderOption title="Messaging" Icon={Chat} />
              <HeaderOption title="Notifications"  Icon={Notifications} notificationNumber="3" notiBubble={true} />
              <HeaderOption title="Me" avatar="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/94b8ae12d42a54bb81aa1680747e097a-1597411939115/2273c727-3d7e-45b2-92ba-6805551820c0.jpg" />
            </div>

        </div>
    )
}

export default Header

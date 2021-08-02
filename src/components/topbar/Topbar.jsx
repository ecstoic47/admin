import React from 'react';
import './topbar.css'
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Admin</span>
                </div>
                <div className="topRight">
                    <div className="topIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topIconContainer">
                        <Settings />
                    </div>
                    <div className="topIconContainer">
                        <img src="assets/tareq.png" alt="" className="topAvatar" />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

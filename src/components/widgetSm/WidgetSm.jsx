import React from 'react'
import './widgetSm.css';
import { Visibility } from '@material-ui/icons';

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">Newly Joined Member</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img className="widgetSmImg" src="assets/tareq.png" alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Ecstoic</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetSmImg" src="assets/tareq.png" alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Ecstoic</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetSmImg" src="assets/tareq.png" alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Ecstoic</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetSmImg" src="assets/tareq.png" alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Ecstoic</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetSmImg" src="assets/tareq.png" alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Ecstoic</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

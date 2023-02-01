import { Tooltip } from 'antd';
import moment from 'moment';
import React, { Component } from 'react'
import { CONSTANTS } from './constants';
import './index.scss'

export default class ImageDescription extends Component {

    getDate = () => {
        let date = new Date(this.props.date * CONSTANTS.DATE_MULTIPLIER).toISOString();
        let updatedTime = moment(date).format(CONSTANTS.DATE_FORMAT);
        return updatedTime
    }

    getTitle = (title) => {
        if (title.length > 85) {
            return (
                <Tooltip title={title}>
                    {title.slice(0, 85) + "..."}
                </Tooltip>
            )
        }
        return title
    }

    render() {
        return (
            <div className='descriptionmain'>
                <div className='__header'>
                    <span className='mainheader'>
                        {this.getTitle(this.props.title)}
                    </span>
                    <span className='subheader'>
                        {this.props.author_name}
                    </span>
                </div>
                <p className='__footer'>{this.getDate()}</p>
            </div>
        )
    }
}

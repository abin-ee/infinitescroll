import { Skeleton } from 'antd'
import React, { Component } from 'react'
import './index.scss'

export default class Loader extends Component {
    render() {
        return (
            <div className='loader'>
                <Skeleton active />
            </div>
        )
    }
}

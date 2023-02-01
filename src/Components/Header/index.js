import React from 'react'
import SearchBox from '../SearchBox'
import './index.scss'

export default function Header() {
    return (
        <div className='header'>
            <span className='__left'>Orkes</span>
            <SearchBox />
        </div>
    )
}

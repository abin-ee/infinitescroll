import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import ImageBox from '../../../../Components/ImageBox'
import Loader from '../../../../Components/Loader'
import ImageDescription from '../ImageDescription/indsex'
import './index.scss'

export default class ImageList extends Component {

    getEndMessage = () => {
        return (
            <p className='endmessage'>
                <b>Yay! You have seen it all</b>
            </p>
        )
    }

    render() {
        return (
            <div>
                <InfiniteScroll
                    dataLength={this.props.ImageDataFetchApi.data.length}
                    hasMore={this.props.currentPage !== 3}
                    next={this.props.callApi}
                    height={850}
                    loader={<Loader />}
                    endMessage={this.getEndMessage()}
                >
                    <ul className='imagelist'>
                        {this.props.ImageDataFetchApi.data.map((item, index) => {
                            return (
                                <li key={index}>
                                    <ImageBox
                                        height={250}
                                        width={500}
                                        imageUrl={item.node.ImageStyle_thumbnail}
                                    />
                                    <ImageDescription
                                        date={item.node.last_update}
                                        title={item.node.title}
                                        author_name={item.node.author_name}
                                    />
                                </li>
                            )
                        })
                        }
                    </ul>
                </InfiniteScroll>
            </div>
        )
    }
}

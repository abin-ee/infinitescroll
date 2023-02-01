import React, { Component } from 'react'
import { Image } from 'antd'
import PropTypes from 'prop-types';
import './index.scss'

export default class ImageBox extends Component {
    render() {
        return (
            <div>
                <Image
                    preview={this.props.preview}
                    src={this.props.imageUrl}
                    height={this.props.height}
                    width={this.props.width}
                />
            </div>
        )
    }
}

ImageBox.propTypes = {
    imageUrl: PropTypes.string,
    preview: PropTypes.bool,
    height: PropTypes.number,
    width: PropTypes.number,
};

ImageBox.deafaultProps = {
    height: 250,
    width: 500
}
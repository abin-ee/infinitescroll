import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Input } from 'antd'
import './index.scss'
const { Search } = Input;

export default class SearchBox extends Component {

    getSearchBox = () => {
        return (
            <>
                <Search
                    placeholder={this.props.placeholder}
                    onSearch={(event, value) => {
                        this.props.onSearch(event, value)}
                    }
                    allowClear={this.props.allowClear}

                />
            </>
        )
    }

    render() {
        return (
            <div className='searchbox'>
                {this.getSearchBox()}
            </div>
        )
    }
}

SearchBox.propTypes = {
    allowClear: PropTypes.bool,
    placeholder: PropTypes.string,
    onSearch: PropTypes.func,
};

import ImageList from './children/ImageList';
import { constants } from './constants';
import React, { Component } from 'react'
import { MainLoader } from '../../Components/MainLoader';
import Header from '../../Components/Header';

export default class Home extends Component {

  componentDidMount() {
    this.callAPI()
  }

  callAPI = () => {
    if (!this.props.ImageDataFetchApi.isLoading) {
      let pageNumber = this.props.currentPage + constants.PAGE_ADD_VALUE
      this.props.getImageDatas({ page: pageNumber })
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        {
          this.props.ImageDataFetchApi.isLoading && this.props.ImageDataFetchApi.data.length < 1 ? <MainLoader />
            : <div>
              <ImageList
                callApi={() => this.callAPI()}
              />
            </div>
        }
      </React.Fragment>
    )
  }
}



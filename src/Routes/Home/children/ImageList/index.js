import { connect } from 'react-redux';
import ImageList from './ImageList';
import {  } from '../../../../Redux/Action';

function mapStateToProps(state) {
    return {
        ...state.ImageFetchReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);
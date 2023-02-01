import { connect } from 'react-redux';
import Home from './Home';
import { getImageDatas } from '../../Redux/Action';

function mapStateToProps(state) {
    return {
        ...state.ImageFetchReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getImageDatas: (params) => {
            dispatch(getImageDatas(params));
          }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
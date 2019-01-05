import {Component} from "react";
import withApiData from "../../components/hocs/withApiData";
import {childrenWithProps} from "../../utils";
import {apiOptions} from "../../utils/api/apiOptions";

class RepositoryController extends Component {
    render(){
        return childrenWithProps(this.props);
    }
}

export default withApiData({repositories: apiOptions.repositories})(RepositoryController);
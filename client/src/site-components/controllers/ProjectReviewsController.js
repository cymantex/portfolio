import {Component} from "react";
import withApiData from "../../components/hocs/withApiData";
import {childrenWithProps} from "../../utils";
import {apiOptions} from "../../utils/api/apiOptions";

class ProjectReviewsController extends Component {
    render(){
        return childrenWithProps(this.props);
    }
}

export default withApiData(apiOptions.projectReviews)(ProjectReviewsController);
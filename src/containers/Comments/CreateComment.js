import { connect } from 'react-redux';
import { createComment as createCommentAction } from "../../actions";
import CreateComment from '../../components/Comments/CreateComment';

const mapDispatchToProps = dispatch => {
    return {
        onCreateComment: comment => {
            dispatch(createCommentAction(comment));
        }
    }
};

export default connect(null, mapDispatchToProps)(CreateComment);
import React from 'react';
import { connect } from 'react-redux';
import Comment from '../../components/Comments/Comment';
import { deleteComment } from "../../actions";

function CommentsList({ comments, onDelete }) {

    return (
        <div>
            {comments.map(comment => {
                return (
                    <Comment comment={ comment } onDelete={ onDelete } key={ comment.id } />
                );
            })}
        </div>
    );
}

const mapStateToProps = state => {

    return {
        comments: state.comments
    };
};

const mapDispatchToProps = dispatch => {

    return {
        onDelete: id => {
            dispatch(deleteComment(id));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentsList);
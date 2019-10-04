import uuid from 'uuid/v4';
import { ADD_COMMENT, DELETE_COMMENT} from "./types";

export const createComment = ({ author, text }) => ({

    type: ADD_COMMENT,
    payload: {
        id: uuid(),
        author,
        text
    }

});

export const deleteComment = id => ({
    type: DELETE_COMMENT,
    payload: {
        id
    }
});
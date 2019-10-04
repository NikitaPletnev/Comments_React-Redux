import { ADD_COMMENT, DELETE_COMMENT } from "../actions/types";

const initialState = window.localStorage ? JSON.parse(window.localStorage.getItem('comments')) : [];

export default function commentsReducer(state = initialState, action) {

    switch (action.type) {

        case ADD_COMMENT:

            state = [...state, action.payload];

            if (window.localStorage)
                window.localStorage.setItem('comments', JSON.stringify(state));

            return state;

        case DELETE_COMMENT:

            state = state.filter(comment => comment.id !== action.payload.id);

            if (window.localStorage)
                window.localStorage.setItem('comments', JSON.stringify(state));

            return state;

        default:

            return state;

    }

}
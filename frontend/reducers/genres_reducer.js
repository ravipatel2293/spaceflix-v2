import { RECEIVE_GENRES } from "../actions/genre_actions";


// Do I need an oldState default here?
const genresReducer = (oldState, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_GENRES:
            return Object.assign({}, {genres: action.genres})
        default:
            return oldState;
    }
}

export default genresReducer;
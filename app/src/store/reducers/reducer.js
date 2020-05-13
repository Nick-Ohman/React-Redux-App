import { FETCH_COINS_START, FETCH_COINS_SUCCESS } from "../actions"

const initialState = {
    isFetching: false,
    data: null,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COINS_START:
            return {
                ...state,
                isFetching: true
            };
            case FETCH_COINS_SUCCESS:
                return {
                    ...state,
                    isFetching: false,
                    data: action.payload
                };

        default:
            return state;
    }

}
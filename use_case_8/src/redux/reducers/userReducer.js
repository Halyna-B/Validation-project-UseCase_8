const initialState = {
    users: [],
};

export const userReducer = (state = initialState, action) => {
    if (action.type === 'ADD_USER') {
        return {
            ...state,
            users: [...state.users, action.payload]
        };
    } else {
        return state;
    }
};


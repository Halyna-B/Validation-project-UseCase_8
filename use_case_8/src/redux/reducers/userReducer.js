const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
};

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE_USER':
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

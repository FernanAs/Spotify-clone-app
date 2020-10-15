export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // remove after finish devlopment...
    //token: 'BQBcomZ0H1q3pPl3NqzflIbBQwwubFz7s46BI2_5MeBhOjIHsztsr3xTSceYQKXwKqp-Hw_6Ox1ZAf1SWgkEPQjL2VdAWXBZwPrLREHSPXzhYYOfvN7guOp8JCD16mdoYTw7z7QWqWFf7V_bUxx3b9ghM6Y_MS-bvg'
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
        return {
            ...state,
            user: action.user
        };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }

        default:
            return state;
    }
}

export default reducer;
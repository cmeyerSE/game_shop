function ItemsReducer(state = [], action) {
    switch (action.type) {
        case "GET_ITEMS":
            return action.payload
        default: 
            return state;
    }
}

export default ItemsReducer;
const initialState = {
    users: [],
    currentUser: {},
    productData: {}

}

export default (state = initialState, action) => {
    switch (action.type) {
        case "FACEBOOKUSER":
            return ({
                ...state,
                currentUser: action.payload
            })
        case "GOOGLELOGIN":
            return ({
                ...state,
                currentUser: action.payload
            })
        case "PRODUCTDATA":
            return ({
                ...state,
                productData: action.payload
            })
        default:
            return state;
    }
}
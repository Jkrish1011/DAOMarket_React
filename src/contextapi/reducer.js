export const initialState = {
    wallet : null
};

const reducer = (state, action) => {
    
    switch(action.type){
        case 'CONNECTED_TO_WALLET':
        {
            // Logic for adding item to basket!
            console.log('FROM REDUCER!')
            console.log(action.item);
            return { wallet: action.item};
        }
        
        default: 
            return state;
    }
}

export default reducer;
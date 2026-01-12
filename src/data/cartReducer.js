const storedCart = JSON.parse(localStorage.getItem("cart"));

export const initialState = {
    products : [],
    cart :storedCart? storedCart : [],
    loading: true,
    error : null,

}

export const reducerFn = (state, action)=>{
    switch(action.type){

        case "set_products" : 
            return{
                ...state,
                products: action.payload,
                loading: false,
                
            }
       
        case "add_to_cart": {

             const exist = state.cart.find(item=> item.id === action.payload.id);

            if(exist){
                return{
                    ...state,
                    cart: state.cart.map(item=> item.id === action.payload.id ? {...item, qty: item.qty + 1} : item)
                }
            }return{
                ...state,
                cart : [...state.cart, {...action.payload, qty :1}]
            }

        }
           
        case "increaseQty": 
            return{
                ...state,
                cart: state.cart.map(item=> item.id === action.payload && item.qty < 5 ? {...item, qty: item.qty + 1} : item)
            }

        case "decreaseQty":
            return{
                ...state,
                cart: state.cart.map(item=> item.id === action.payload && item.qty > 1? {...item, qty: item.qty - 1}: item).filter(item=> item.qty > 0)
            }

        case "removeFromCart":
            return{
                ...state,
                cart: state.cart.filter(item=> item.id !== action.payload)
            }

        case "clearCart":
            return{
                ...state,
                cart: []
            }

        default : return state;
            


    }
}
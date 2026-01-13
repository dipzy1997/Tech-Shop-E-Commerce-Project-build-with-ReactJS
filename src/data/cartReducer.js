const storedCart = JSON.parse(localStorage.getItem("cart"));

export const initialState = {
    products : [],
    filteredProducts : [],
    cart :storedCart? storedCart : [],
    loading: true,
    error : null,

    filters :{
        brands : [],
        categories : [],
        sort : "",
        price: 15000
    },
    maxprice: 0,

}

export const reducerFn = (state, action)=>{
    switch(action.type){

        case "set_products" : 
            return{
                ...state,
                products: action.payload,
                filteredProducts: action.payload,
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

        case "set_brands_filter":
            return{
                ...state,
                filters : {...state.filters, brands : action.payload}
            }

        case "set_category_filter":
            return{
                ...state,
                filters: {...state.filters, categories: action.payload}
            }

        case "set_price_filter":
            return{
                ...state,
                filters: {...state.filters, price: action.payload}
            }

        case "set_sort_filter":
            return {
                ...state,
                filters: {...state.filters, sort: action.payload}
        };

        case "clear_filter":
            return{
                ...state,
                filters: {
                    brands: [],
                    categories: [],
                    price: state.maxprice,
                    sort: ""
                },
                filteredProducts : state.products
            }

        case "apply_filters":
            return{
                ...state,
                filteredProducts : action.payload
            }

        case "set_max_price":
            return{
                ...state,
                maxprice: action.payload,
                filters: {...state.filters, price: action.payload}

            }

        default : return state;
            


    }
}
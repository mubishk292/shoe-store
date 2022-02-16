import { createStore, combineReducers } from 'redux'

let adData = {
    currentProduct: [],
}



function FirstSection(oldData = adData, newData) {

    oldData = { currentProduct: [...oldData.currentProduct] }

    switch (newData.type) {
        case 'CART':
            oldData.currentProduct.push(newData.product);
            break;
        case 'QUANTITY':
            // newData.indexProduct
            // newData.qtyProduct

            oldData.currentProduct[newData.indexProduct].qty = newData.qtyProduct

            // let found;
            // found = oldData.currentProduct.find((product , index)=>{
            //     if(product.id == newData.indexProduct){
            //         return oldData.currentProduct[index]
            //     }
            // })
            
            // console.log(oldData.currentProduct[newData.indexProduct]);

            break;
    }


    return { ...oldData };

}

let initialData = {
    currentUser: {},
}
function UserSection(oldData = initialData, newData) {
    switch (newData.type) {
        case 'LOGIN':
            oldData.currentUser = newData.user;
            break;
        case "LOGOUT_HOGYA":
            oldData.currentUser = {};
            localStorage.removeItem('myToken');
            break;
    }

    return { ...oldData }
}

let rootReducer = combineReducers({ FirstSection, UserSection })

let myStore = createStore(rootReducer);
export default myStore;
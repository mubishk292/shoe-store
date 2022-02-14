import { createStore, combineReducers } from 'redux'

let adData = {
    currentProduct: [],
}



function FirstSection(oldData = adData, newData) {

    oldData = {currentProduct:[...oldData.currentProduct]}

    switch (newData.type) {
        case 'CART':
            
            oldData.currentProduct.push(newData.product);
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
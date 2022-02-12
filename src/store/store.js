import { createStore, combineReducers } from 'redux'

let adData = ["apple", "banana", "carott"];

function FirstSection(oldData = adData, newData) {

    if (newData.type == "FRUIT_ADD") {

        oldData.push(newData.fname);

    } else if (newData.type == "FRUIT_DELETE") {

        oldData.splice(newData.index, 1);

    } else if (newData.type == "FRUIT_UPDATE") {

        oldData[newData.index] = newData.nName;

    }

    return oldData;

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
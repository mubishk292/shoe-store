import {createStore , combineReducers} from 'redux'

function FirstSection(oldData , newData){

}

let initialData = {
    currentUser : {},
}
function UserSection(oldData = initialData, newData){
    switch(newData.type){
        case 'LOGIN' :
            oldData.currentUser = newData.user;
            break;
    }

    return {...oldData}
}

let allComponents  = combineReducers(FirstSection , UserSection)

let myStore = createStore(allComponents);
export default myStore;
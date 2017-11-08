import {combineReducers} from 'redux';

function images(state={
    imgurl:'\images\\cat-1285634_960_720.png'
},action){

    switch (action.type) {
        case 'CHANGE_IMAGE':
            return {
                ...state,
                imgurl:action.payload
            }
            break;
        default:
            break;
    }
    return state;
}
var getInitialstate=[{"imgurl":"\images\\cat-1285634_960_720.png"},{"imgurl":"\images\\Images.jpg"},{"imgurl":"\images\\pexels-photo-248797.jpeg"}]
function Allimages(state=getInitialstate,action){
    return state;
}

var Imagereducer=combineReducers({
    images:images,
    Allimages:Allimages
})

export default Imagereducer;
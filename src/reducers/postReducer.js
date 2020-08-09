import {EDIT_POST, FETCH_POST, NEW_POST, UPDATE_POST_FIELD, RESET_POST, DELETE_POST} from '../actions/types';
import uuid from 'react-uuid';

const initialState = {
    items: [],
    item: {title: '', body: '', id: ''}
}

export default function (state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case FETCH_POST:
            return {
                ...state,
                items: [...action.payload]
            }
        case NEW_POST:
            if (state.item.id)
                return {
                    ...state,
                    items: state.items.map(el => (el.id === state.item.id ? {...el, ...state.item} : el)),
                    item: initialState.item
                }
            else{
                return {
                    ...state,
                    items: [{...state.item, id:uuid()}, ...state.items],
                    item: initialState.item
                }
            }

        case EDIT_POST:
            return {
                ...state,
                item: {...action.payload}
            }
        case UPDATE_POST_FIELD:
            return {
                ...state,
                item: {...state.item, [action.payload.field]: action.payload.value}
            }
        case RESET_POST:
            return {
                ...state,
                item: initialState.item,
            }
        case DELETE_POST:
            return {
                ...state,
                items: state.items.filter(card => card.id !== action.payload)
            }
        default:
            return state;
    }
}
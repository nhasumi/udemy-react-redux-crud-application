import _ from 'lodash'
import {READ_EVENTS, READ_EVENT, CREATE_EVENTS, UPDATE_EVENT, DELETE_EVENTS} from '../actions'


// eslint-disable-next-line import/no-anonymous-default-export
export default (events = {}, action) => {
    
    switch (action.type){
        case READ_EVENTS:
            return _.mapKeys(action.response.data,'id')
        case READ_EVENT:
        case CREATE_EVENTS:
        case UPDATE_EVENT:
            const data = action.response.data
            return {...events,[data.id]:data}
        case DELETE_EVENTS:
            delete events[action.id] 
            return {...events};
        default:
            return events;
    }
}
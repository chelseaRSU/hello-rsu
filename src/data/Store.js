import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import ActionTypes from './ActionTypes';
import Dispatcher from './Dispatcher';
import Counter from './Counter';
import Person from './Person';

class Store extends ReduceStore {
    constructor() {
        super(Dispatcher)
    }

    getInitialState() {
        return Immutable.OrderedMap();
    }

    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.ADD_PERSON:
                if (!action.text) {
                    return state;
                }
                const id = Counter.increment();
                return state.set(id, new Person({
                    id, 
                    text: action.text,
                }));
            
            case ActionTypes.DELETE_PERSON:
                return state.delete(action.id);

            default:
                return state;
        }
    }
}

export default new Store();
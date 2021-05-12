import ActionTypes from './ActionTypes';
import Dispatcher from './Dispatcher';

const Actions = {
    addPerson(text) {
        Dispatcher.dispatch({
            type: ActionTypes.ADD_PERSON,
            text,
        });
    },

    deletePerson(id) {
        Dispatcher.dispatch({
            type: ActionTypes.DELETE_PERSON,
            id,
        });
    },

    updateDraft(text) {
        Dispatcher.dispatch({
            type: ActionTypes.UPDATE_DRAFT,
            text,
        });
    },
};

export default Actions;
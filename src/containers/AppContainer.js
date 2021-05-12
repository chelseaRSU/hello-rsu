import PeopleView from '../views/PeopleView';
import {Container} from 'flux/utils';
import Store from '../data/Store';
import Actions from '../data/Actions';
import DraftStore from '../data/DraftStore'

function getStores() {
    return [
        Store,
    ];
}

function getState() {
    return {
        people: Store.getState(),
        draft: DraftStore.getState(),

        onAdd: Actions.addPerson, 
        onDelete: Actions.deletePerson,
        onUpdateDraft: Actions.updateDraft,
    };
}

export default Container.createFunctional(PeopleView, getStores, getState);
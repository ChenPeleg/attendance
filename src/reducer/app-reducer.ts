import {StoreClass} from '../store/factory/Store.class.ts';
import {AppAction} from '../models/AppAction.ts';

export const appReducer = <T extends string | number | symbol>(store: StoreClass<T>, action: AppAction): StoreClass<T> => {
    switch (action.type) {

        default:
            return store;
    }
}


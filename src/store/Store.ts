import {StoreClass} from './factory/Store.class.ts';

export const globalStore = new StoreClass
({
    defaultState: {
        children: [],
        count: 0
    }
})

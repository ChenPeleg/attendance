import {ServicesResolver} from './provider/ServiceResolverClass.ts';
import {AbstractBaseService} from './provider/AbstractBaseService.ts';
import {LocalStorageService} from './LocalStorage.service.ts';
import {AttendanceStore} from '../models/AttendanceStore.ts';
import {StoreFactory} from '../store/factory/StoreFactory.ts';
import {AppAction} from '../models/AppAction.ts';
import {appReducer} from '../reducer/app-reducer.ts';
import {initialState} from '../store/Store.ts';


export class StoreService extends AbstractBaseService {
private _store: StoreFactory<AppAction, AttendanceStore, typeof appReducer> | null = null;
    constructor(provider: ServicesResolver) {
        super(provider);
    }
    get store() {
        if (!this._store) {
            this.createStore();
        }
        return this._store;
    }
    private createStore() {
        const stateFromLocalStorage = this.servicesResolver.
        getService(LocalStorageService).
        getObjectOrNull(LocalStorageService.STORE_SETTINGS) as AttendanceStore | null;

        const globalStore : StoreFactory<AppAction, AttendanceStore, typeof appReducer > = new StoreFactory
        ({
            reducer: appReducer  ,
            defaultState: stateFromLocalStorage || initialState
        })
        globalStore.subscribe((state: AttendanceStore) => {
            this.servicesResolver.getService(LocalStorageService).setObject(LocalStorageService.STORE_SETTINGS, state);
        })
        this._store = globalStore;
    }

}

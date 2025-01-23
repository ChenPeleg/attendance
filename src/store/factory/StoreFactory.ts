import {StoreAction} from './Store.model.ts';


export type StoreState<K extends Record<string, any>> = {
    [key in keyof K]: any
};

export type StoreReducer<K extends Record<string, any>,ACT> = (state: StoreState<K>, action: StoreAction<ACT>) => StoreState<K>;


/**
 * @description
 * Store class to manage the state of the application
 */
export class StoreFactory<ACT,K extends Record<string, any> ,R extends StoreReducer<K,ACT> > {
    subscribers: { cb: (newState: StoreState<K>) => void, id: number }[];
    private state: StoreState<K>;
    private subscriberId = 0;
    private readonly reducer: R;

    constructor({
                    defaultState,
                    reducer
                }: { defaultState: StoreState<K>; reducer: R  }) {
        this.state = defaultState;
        this.reducer = reducer;
        this.subscribers = [];
    }

    getState() {
        return this.state;
    }

    dispatch(action: StoreAction<any>) {
        this.state = this.reducer(this.state, action);
    }

    setState(newState: StoreState<K>) {
        this.state = newState;
        this.subscribers.forEach(sub => sub.cb(newState));
    }

    subscribe(fn: (newState: StoreState<K>) => void) {
        this.subscribers.push({
            cb: fn,
            id: this.subscriberId
        });
        return () => this.unsubscribe(this.subscriberId++);
    }

    unsubscribe(id: number) {
        this.subscribers = this.subscribers.filter(sub => sub.id !== id);
    }
}

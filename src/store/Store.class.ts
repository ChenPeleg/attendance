import {StoreState} from './Store.model.ts';

export class StoreClass<K extends string | number | symbol   > {
    subscribers: { cb: (newState: StoreState<K  >) => void, id: number }[];
    private state: StoreState<K  > ;
    private subscriberId = 0;

    constructor({defaultState}: { defaultState: StoreState<K> }) {
        this.state = defaultState;
        this.subscribers = [];
    }

    getState() {
        return this.state;
    }

    setState(newState: StoreState<K>) {
        this.state = newState;
        this.subscribers.forEach(sub => sub.cb(newState));
    }

    subscribe(fn: (newState: StoreState<K  >) => void) {
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

export type StoreState<K extends string | number | symbol   > = {
    [key in K]: any
};

export interface StoreAction<T> {
    actionType: string,
    payload: T
}

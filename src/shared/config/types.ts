export interface INote {
    id?: string;
    task: string;
    complete: false;
}
export interface IState {
    todos: INote[];
    status: null | string;
    error: null | string;
}
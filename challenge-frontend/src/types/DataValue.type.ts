export interface DataValueType {
    render?: (value:string|boolean|number) => JSX.Element;
}
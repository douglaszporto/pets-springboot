export interface DataColumnType {
    label: string;
    key: string;
    width: number;
    align: 'left' | 'center' | 'right';
    render?: (value: any, row: Record<string, string|boolean|number>) => JSX.Element;
}
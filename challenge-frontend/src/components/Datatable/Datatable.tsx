import { DataColumnType } from '../../types/DataColumn.type';
import * as Tags from './Datatable.styles';

interface DatatableProps {
    columns: DataColumnType[];
    data: Record<string, string|boolean|number>[];
    onClickRow?: (row: Record<string, string|boolean|number>) => void;
}

const Datatable:React.FC<DatatableProps> = ({columns, data, onClickRow}:DatatableProps) => {

    const handleClick = (row: Record<string, string|boolean|number>) => {
        onClickRow && onClickRow(row);
    }

    const render = (column:DataColumnType, value: string|boolean|number, row:Record<string, string|boolean|number>) => {
        if (typeof column.render === 'function') {
            return column.render(value, row);
        }
        return String(value);
    }

    return (
        <Tags.Datatable>
            <thead>
                <Tags.DataHeader>
                    {columns.map((column, index) => (
                        <Tags.DataHeaderColumn $definition={column} key={index}>{column.label}</Tags.DataHeaderColumn>
                    ))}
                </Tags.DataHeader>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <Tags.DataRow key={index} onClick={()=>handleClick(row)}>
                        {columns.map((column, index) => (
                            <Tags.DataColumn $definition={column} key={index}>{render(column, row[column.key], row)}</Tags.DataColumn>
                        ))}
                    </Tags.DataRow>
                ))}
            </tbody>
        </Tags.Datatable>
    );
}

export default Datatable;
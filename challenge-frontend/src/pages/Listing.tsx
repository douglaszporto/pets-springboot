import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header/Header";
import Switch from "../components/Switch/Switch";
import Datatable from "../components/Datatable/Datatable";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import { DataColumnType } from "../types/DataColumn.type";
import { changeAdoptAnimal, getAnimalsList } from "../services/animals";

const tableColumns:DataColumnType[] = [{
    label: 'Name',
    key: 'name',
    width: 30,
    align: 'left'
},{
    label: 'Birthdate',
    key: 'birthDate',
    width: 20,
    align: 'center',
    render: (value) => {
        if (value) {
            const dt = new Date(value);
            const d = String(dt.getUTCDate()).padStart(2,"0");
            const m = String(dt.getUTCMonth()+1).padStart(2,"0");
            const y = String(dt.getUTCFullYear());
            return <span>{`${d}/${m}/${y}`}</span>
        }
        return <span></span>
    }
},{
    label: 'Category',
    key: 'category',
    width: 20,
    align: 'left',
    render: (value) => {
        switch(value) {
            case 'CAT': return <span>Cat</span>;
            case 'DOG': return <span>Dog</span>;
            default: return <span></span>;
        }
    }
},{
    label: 'Age',
    key: 'age',
    width: 10,
    align: 'right',
    render: (_, row) => {
        if (row.birthDate) {
            const birthDate = new Date(row.birthDate as string);
            const age = Math.floor((new Date().getTime() - birthDate.getTime())/(1000*60*60*24*365));
            return <span>{age} year{age > 1 ? 's' : ''}</span>
        }
        return <span></span>
    }
},{
    label: 'Status',
    key: 'adopted',
    width: 20,
    align: 'right',
    render: (value, row) => {
        return <Switch 
            value={value} 
            labels={['Available','Adopted']}
            onChange={(e)=>{
                e.stopPropagation();
                changeAdoptAnimal(!value, parseInt(row.id as string));
            }}
         />
    }
}];

const Listing:React.FC = () => {

    const [data, setData] = useState<Record<string, string|boolean|number>[]>([]);
    const [error, setError] = useState<string>();

    const navigate = useNavigate();


    useEffect(()=>{
        getAnimalsList().then((res)=>{
            console.log(res);
            if (res.data) {
                setData(res.data as unknown as Record<string, string|boolean|number>[]);
            } else {
                setError(res.error);
            }
        });
    }, []);

    return <>
        <Header onAddNew={()=>navigate('/new')} />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Datatable 
            columns={tableColumns} 
            data={data} 
            onClickRow={(row) => navigate(`/edit/${row.id}`)}
        />
    </>
}

export default Listing;
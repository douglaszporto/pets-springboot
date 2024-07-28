import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../components/Header/Header";
import AnimalForm from "../components/AnimalForm/AnimalForm";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import { AnimalSaveType } from "../services/types/AnimalsResponses.types";
import { createAnimal, updateAnimal, getAnimal, deleteAnimal } from "../services/animals";

const Form:React.FC = () => {

    const [animal, setAnimal] = useState<AnimalSaveType>();
    const [error, setError] = useState<string>();

    const navigate = useNavigate();
    const params = useParams();

    const handleSave = (data: AnimalSaveType) => {
        if (params.id) {
            updateAnimal(data, params.id).then((req) => {
                if (req.error) {
                    setError(req.error);
                } else {
                    navigate('/');
                }
            });
        } else {
            createAnimal(data).then((req) => {
                if (req.error) {
                    setError(req.error);
                } else {
                    navigate('/');
                }
            });
        }
    };

    const handleDelete = () => {
        if (params.id) {
            deleteAnimal(params.id).then((req) => {
                if (req.error) {
                    setError(req.error);
                } else {
                    navigate('/');
                }
            });
        }
    };


    useEffect(() => {
        if(params.id){
            getAnimal(params.id).then((res)=>{
                if (res.error) {
                    setError(res.error);
                } else {
                    setAnimal(res.data);
                }
            });
        }
    }, [params.id]);


    return <>
        <Header />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <AnimalForm 
            animal={animal}
            onSubmit={handleSave}
            onDelete={handleDelete}
            onCancel={()=>navigate(-1)} 
            onError={setError}
        />
    </>
}

export default Form;
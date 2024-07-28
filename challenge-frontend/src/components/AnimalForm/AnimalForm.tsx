import { useEffect, useState } from 'react';

import * as Tags from './AnimalForm.styles';
import { AnimalSaveType } from '../../services/types/AnimalsResponses.types';

interface AnimalFormProps {
    animal?: AnimalSaveType;
    onSubmit?: (formData:AnimalSaveType) => void;
    onDelete?: () => void;
    onCancel?: () => void;
    onError?: (error:string) => void;
}

const AnimalForm:React.FC<AnimalFormProps> = ({animal, onSubmit, onDelete, onCancel, onError}:AnimalFormProps) => {

    const [name, setName] = useState<string>('');
    const [birthDate, setBirthDate] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [status, setStatus] = useState<string>('');
    const [image, setImage] = useState<string>('');


    const handleSave = () => {
        if (!name) {
            return onError && onError('Name is required');
        }

        if (!category) {
            return onError && onError('Category is required');
        }

        onSubmit && onSubmit({
            name,
            birthDate,
            category,
            description,
            adopted: status === 'Adopted',
            image
        });
    }

    const handleCancel = () => {
        onCancel && onCancel();
    }


    useEffect(() => {
        if(animal){
            setName(animal.name);
            setBirthDate(animal.birthDate ?? '');
            setCategory(animal.category);
            setDescription(animal.description ?? '');
            setStatus(animal.adopted ? 'Adopted' : 'Available');
            setImage(animal.image ?? '');
        }
    }, [animal]);

    return (
        <Tags.Form>
            {image ? <Tags.Image src={image} alt="" /> : null}
            <Tags.FormRow>
                <Tags.FormGroup>
                    <Tags.Label>Name</Tags.Label>
                    <Tags.Input value={name} onChange={(e)=>setName((e.target as HTMLInputElement).value)} type="text" />
                </Tags.FormGroup>
                <Tags.FormGroup>
                    <Tags.Label>Birthdate</Tags.Label>
                    <Tags.Input value={birthDate} onChange={(e)=>setBirthDate((e.target as HTMLInputElement).value)} type="date" />
                </Tags.FormGroup>
            </Tags.FormRow>
            <Tags.FormRow>
                <Tags.FormGroup>
                    <Tags.Label>Category</Tags.Label>
                    <Tags.Select value={category} onChange={(e)=>setCategory((e.target as HTMLSelectElement).value)}>
                        <option value=""></option>
                        <option value="CAT">Cat</option>
                        <option value="DOG">Dog</option>
                    </Tags.Select>
                </Tags.FormGroup>
                <Tags.FormGroup>
                    <Tags.Label>Status</Tags.Label>
                    <Tags.Select value={status} onChange={(e)=>setStatus((e.target as HTMLSelectElement).value)}>
                        <option value="Available">Available</option>
                        <option value="Adopted">Adopted</option>
                    </Tags.Select>
                </Tags.FormGroup>
            </Tags.FormRow>
            <Tags.FormGroup>
                <Tags.Label>Description</Tags.Label>
                <Tags.TextArea value={description} onChange={(e)=>setDescription((e.target as HTMLTextAreaElement).value)} />
            </Tags.FormGroup>
            <Tags.FormGroup>
                <Tags.Label>Image URL</Tags.Label>
                <Tags.Input value={image} onChange={(e)=>setImage((e.target as HTMLInputElement).value)} type="text" />
            </Tags.FormGroup>
            <Tags.ButtonGroup>
                {animal?.id ? <Tags.Button onClick={onDelete} color="#f00">Remove</Tags.Button> : null}
                <Tags.Button onClick={handleSave}>Save</Tags.Button>
                <Tags.Button onClick={handleCancel} color="var(--theme-color-background-hover)">Cancel</Tags.Button>
            </Tags.ButtonGroup>
        </Tags.Form>
    );
}

export default AnimalForm;
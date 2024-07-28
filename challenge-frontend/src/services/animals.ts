import urls from '../urls';
import { AnimalsListingResponse, AnimalSaveType } from './types/AnimalsResponses.types';
import { RequestHandler } from './request/request';


export const getAnimalsList = async () => {
    return await new RequestHandler<AnimalsListingResponse[]>().get(urls.animals.resource);
};

export const getAnimal = async (id: string) => {
    return await new RequestHandler<AnimalsListingResponse>().get(urls.animals.data(id));
};

export const createAnimal = async (data:AnimalSaveType) => {
    return await new RequestHandler<void>().post(urls.animals.resource, data);
};

export const updateAnimal = async (data:AnimalSaveType, id: string) => {
    return await new RequestHandler<void>().put(urls.animals.data(id), data);
};

export const changeAdoptAnimal = async (isAdopted:boolean, id: string) => {
    return await new RequestHandler<void>().put(urls.animals.adopt(id), {
        isAdopted
    });
};

export const deleteAnimal = async (id: string) => {
    return await new RequestHandler<void>().delete(urls.animals.data(id));
};
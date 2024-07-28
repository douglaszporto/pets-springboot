export interface AnimalsListingResponse {
    id: number;
    name: string;
    category: string;
    birthdate?: string;
    description?: string;
    image?: string;
    status?: string;
}

export interface AnimalSaveType {
    id?: number;
    name: string;
    category: string;
    birthDate?: string;
    description?: string;
    image?: string;
    adopted?: boolean;
}
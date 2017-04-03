import { Abstract } from './abstract.model';
export interface Professional extends Abstract{
    name: string;
    photoUrl: string;
    addressLine: string;
    mobile?: string;
    team?: boolean;
    subcategoryKey: string; 
}
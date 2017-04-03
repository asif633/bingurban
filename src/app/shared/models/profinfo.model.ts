import { Abstract } from './abstract.model';
export interface ProfInfo extends Abstract{
    photoUrls?: string[];
    price?: string;
    experience?: string;
    website?: string;
    introduction: string;
    professionalKey?: string;
}
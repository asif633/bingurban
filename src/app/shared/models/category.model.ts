import { Abstract } from './abstract.model';

export interface Category extends Abstract{
    name: string;
    tagline?: string;
    icon: string;
}
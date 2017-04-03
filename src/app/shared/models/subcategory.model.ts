import { Abstract } from './abstract.model';

export interface SubCategory extends Abstract{
    name: string;
    categoryKey?: string;
    icon: string;
}
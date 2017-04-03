import { Injectable } from '@angular/core';
import { Image } from '../models/image.model';
@Injectable()
export class ImageUpload{
    
    constructor(){
        this.profileImage ={ id: 1, src: ''};
        this.images = [
            { id: 1, src: ''},
            { id: 2, src: ''},
            { id: 3, src: ''},
            { id: 4, src: ''},
            { id: 5, src: ''},
            { id: 6, src: ''},
            { id: 7, src: ''},
            { id: 8, src: ''},
            { id: 9, src: ''},
            { id: 10, src: ''}
        ];
    }

    profileImage: Image;
    images: Image[];

}
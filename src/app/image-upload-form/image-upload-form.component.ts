import { Component, OnInit } from '@angular/core';
import { ImageResult, ResizeOptions } from 'ng2-imageupload';
import { ImageUpload } from '../shared/services/imageupload.serivce';
import { Image } from '../shared/models/image.model';

@Component({
  selector: 'app-image-upload-form',
  templateUrl: './image-upload-form.component.html',
  styleUrls: ['./image-upload-form.component.scss']
})
export class ImageUploadFormComponent implements OnInit {

  constructor(private imgUpServ: ImageUpload) { }

  profileImg: Image;
  images: Image[];

  ngOnInit() {
    this.profileImg = this.imgUpServ.profileImage;
    this.images = this.imgUpServ.images;
  }

  //src: string = "";
  resizeOptions: ResizeOptions = {
    resizeMaxHeight: 256,
    resizeMaxWidth: 256
  };

  selectedProfileImage(imageResult: ImageResult) {
    this.profileImg.src = imageResult.resized
      && imageResult.resized.dataURL
      || imageResult.dataURL;
    console.log("img "+ this.profileImg.src);
  }

  selectImage(imageResult: ImageResult, img: Image){
    this.images.forEach(x=> 
      {
        if(x.id == img.id){
          x.src = imageResult.resized && imageResult.resized.dataURL || imageResult.dataURL;
        }
      })
  }

}

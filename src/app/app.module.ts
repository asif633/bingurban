import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TypeaheadModule } from 'ng2-bootstrap/typeahead';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { ImageUploadModule } from 'ng2-imageupload';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { CatContainerComponent } from './cat-container/cat-container.component';
import { CategoryService } from './shared/services/category.service';
import { SubCategoryService } from './shared/services/subcategory.service';
import { ProfessionalService } from './shared/services/professional.service';
import { ProfInfoService } from './shared/services/profinfo.service';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { SubcatContainerComponent } from './subcat-container/subcat-container.component';
import { routes } from './app.routes';
import { ProfessionalComponent } from './professional/professional.component';
import { ProfContainerComponent } from './prof-container/prof-container.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HeroCarouselComponent } from './hero-carousel/hero-carousel.component';
import { HeroSimpleComponent } from './hero-simple/hero-simple.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroCarContainerComponent } from './hero-car-container/hero-car-container.component';
import { HeroCarItemComponent } from './hero-car-item/hero-car-item.component';
import { CategoriesComponent } from './categories/categories.component';
import { SubcategoriesComponent } from './subcategories/subcategories.component';
import { ProfessionalsComponent } from './professionals/professionals.component';
import { ProfessionaldetailsComponent } from './professionaldetails/professionaldetails.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { SliderSubcategoryComponent } from './slider-subcategory/slider-subcategory.component';
import { ProfDetailHeaderComponent } from './prof-detail-header/prof-detail-header.component';
import { ProfDetailImagesComponent } from './prof-detail-images/prof-detail-images.component';
import { ProfDetailInfoComponent } from './prof-detail-info/prof-detail-info.component';
import { UserComponent } from './user/user.component';
import { ProfessionalFormComponent } from './professional-form/professional-form.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { ProfInfoFormComponent } from './prof-info-form/prof-info-form.component';
import { ImageUploadFormComponent } from './image-upload-form/image-upload-form.component';
import { ImageUpload } from './shared/services/imageupload.serivce';
import { AdminComponent } from './admin/admin.component';
import { CategoryAdminFormComponent } from './category-admin-form/category-admin-form.component';
import { CategoryAdminTableComponent } from './category-admin-table/category-admin-table.component';
import { SubcategoryAdminTableComponent } from './subcategory-admin-table/subcategory-admin-table.component';
import { SubcategoryAdminFormComponent } from './subcategory-admin-form/subcategory-admin-form.component';

export const firebaseConfig = {
    apiKey: "AIzaSyBLqkxSteV3j1FR9vuRukIskZHyH_IjWhA",
    authDomain: "bingurban.firebaseapp.com",
    databaseURL: "https://bingurban.firebaseio.com",
    storageBucket: "bingurban.appspot.com",
    messagingSenderId: "616893181432"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Anonymous,
  method: AuthMethods.Anonymous
};

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CatContainerComponent,
    SubcategoryComponent,
    SubcatContainerComponent,
    ProfessionalComponent,
    ProfContainerComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    HeroCarouselComponent,
    HeroSimpleComponent,
    HeroFormComponent,
    HeroCarContainerComponent,
    HeroCarItemComponent,
    CategoriesComponent,
    SubcategoriesComponent,
    ProfessionalsComponent,
    ProfessionaldetailsComponent,
    FrontpageComponent,
    SliderSubcategoryComponent,
    ProfDetailHeaderComponent,
    ProfDetailImagesComponent,
    ProfDetailInfoComponent,
    UserComponent,
    ProfessionalFormComponent,
    CategoryFormComponent,
    ProfInfoFormComponent,
    ImageUploadFormComponent,
    AdminComponent,
    CategoryAdminFormComponent,
    CategoryAdminTableComponent,
    SubcategoryAdminTableComponent,
    SubcategoryAdminFormComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    TypeaheadModule.forRoot(),
    DropdownModule.forRoot(),
    TabsModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    ImageUploadModule,

  ],
  providers: [
    CategoryService,
    SubCategoryService,
    ProfessionalService,
    ProfInfoService,
    ImageUpload
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

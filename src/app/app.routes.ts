import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CategoriesComponent } from './categories/categories.component';
import { SubcategoriesComponent } from './subcategories/subcategories.component';
import { ProfessionalsComponent } from './professionals/professionals.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ProfessionaldetailsComponent } from './professionaldetails/professionaldetails.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
    {path: '', component: AppComponent, children:[
        
        {path: '', component: MainComponent, children:[
            // {path: '', component: CategoriesComponent},
            {path: '', component: FrontpageComponent},
            {path: 'admin', component: AdminComponent},
            {path: 'user', component: UserComponent},
            {path: 'subcategory/:id', component: ProfessionalsComponent},
            {path: 'professional/:id', component: ProfessionaldetailsComponent},
            {path:'category/:id', children: [
                    {path: '', component: SubcategoriesComponent},
                    {path: 'subcategory/:id', component: ProfessionalsComponent}
                ]}
            ]}
    ]}
    
]

export const routes = RouterModule.forRoot(appRoutes, {useHash: false});
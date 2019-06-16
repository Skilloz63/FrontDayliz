import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesBackendComponent } from './companies-backend/companies-backend.component';
import { SingleCompanyBackendComponent } from './single-company-backend/single-company-backend.component';
import { BackendComponent } from './backend/backend.component';
import { PremiumsBackendComponent } from './premiums-backend/premiums-backend.component';
import { SinglePremiumBackendComponent } from './single-premium-backend/single-premium-backend.component';
import { SubCategoriesBackendComponent } from './sub-categories-backend/sub-categories-backend.component';
import { SingleSubCategoryBackendComponent } from './single-sub-category-backend/single-sub-category-backend.component';
import { UsersBackendComponent } from './users-backend/users-backend.component';
import { SingleUserBackendComponent } from './single-user-backend/single-user-backend.component';

const routes: Routes = [
  { path: 'companies', component: CompaniesBackendComponent},
  { path: "detail-company/:id", component: SingleCompanyBackendComponent},
  { path: 'backend', component: BackendComponent},
  { path: 'premiums', component: PremiumsBackendComponent},
  { path: "detail-premium/:id", component: SinglePremiumBackendComponent},
  { path: 'subcategories', component: SubCategoriesBackendComponent},
  { path: "detail-subcategory/:id", component: SingleSubCategoryBackendComponent},
  { path: "users", component: UsersBackendComponent},
  { path: "detail-user/:id", component: SingleUserBackendComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

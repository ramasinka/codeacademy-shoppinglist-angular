import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginFormComponent} from './users/login-form/login-form.component';
import {RegistrationFormComponent} from './users/registration-form/registration-form.component';
import {UsersComponent} from './users/users.component'
import {MainPageComponent} from './main-page/main-page.component'
import {ShoppingListsComponent} from './main-page/shopping-lists/shopping-lists.component';
import {ShareHistoriesComponent} from './main-page/share-histories/share-histories.component';



const APP_Routes: Routes = [

{path: '', component: LoginFormComponent},

{path: 'signUp', component: RegistrationFormComponent},

{path: 'main', component: MainPageComponent},

{path: 'lists', component: ShoppingListsComponent},

{path: 'shareHistory', component: ShareHistoriesComponent},


]
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_Routes);

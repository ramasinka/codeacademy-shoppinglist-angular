import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {routing} from './app.routing';

import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {LoginFormComponent} from './users/login-form/login-form.component';
import {RegistrationFormComponent} from './users/registration-form/registration-form.component';
import {RolesComponent} from './roles/roles.component';
import {UsersService} from './users/shared/user.service';
import {AuthorizationService} from './users/authorization/shared/authorization.service';
import {MainPageComponent} from './main-page/main-page.component';
import {ShoppingListsComponent} from './main-page/shopping-lists/shopping-lists.component';
import {ShareHistoriesComponent} from './main-page/share-histories/share-histories.component';
import {HeadersComponent} from './main-page/headers/headers.component';
import {ProductItemsComponent} from './main-page/shopping-lists/product-items/product-items.component';
import {ShoppingListService} from './main-page/shopping-lists/shared/shopping-list.service';
import {HeaderService} from './main-page/headers/shared/header.service';

import {MDBBootstrapModule} from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    RolesComponent,
    MainPageComponent,
    ShoppingListsComponent,
    ShareHistoriesComponent,
    HeadersComponent,
    ProductItemsComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    routing,
    HttpModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [UsersService, AuthorizationService, ShoppingListService, HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

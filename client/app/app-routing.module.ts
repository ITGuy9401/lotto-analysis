// DEPENDENCIES
import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

/* START MY VIEWS IMPORT */
// Do not edit this comment content, it will be overwritten in next EasyDev generation
import { HomeComponent} from './pages/home/home.component';
import { ExtractionEditComponent} from './pages/extraction-edit/extraction-edit.component';
import { ExtractionListComponent} from './pages/extraction-list/extraction-list.component';
import { RouteEditComponent} from './pages/route-edit/route-edit.component';
import { RouteListComponent} from './pages/route-list/route-list.component';

/* END MY VIEWS IMPORT */

// SECURITY
import { LoginComponent } from './pages/login/login.component';
import { ManageUserEditComponent } from './security/manage-user/edit-user/manage-user-edit.component';
import { ManageUserListComponent } from './security/manage-user/list-user/manage-user-list.component';
import { ProfileComponent } from './security/profile/profile.component';
import { AuthGuard } from "./security/auth.guard";

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'  },

    /* START MY VIEWS */

    { path: 'home',  component: HomeComponent , canActivate: [AuthGuard] },
    { path: 'extractions/:id',  component: ExtractionEditComponent , canActivate: [AuthGuard] },
    { path: 'extractions',  component: ExtractionListComponent , canActivate: [AuthGuard] },
    { path: 'routes/:id',  component: RouteEditComponent , canActivate: [AuthGuard] },
    { path: 'routes',  component: RouteListComponent , canActivate: [AuthGuard] },

 /* END MY VIEWS */
    
    { path: 'home', component: HomeComponent},
    // SECURITY
    { path: 'manage-users',  component: ManageUserListComponent, canActivate: [AuthGuard], data:['ADMIN']},
    { path: 'manage-users/:id',  component: ManageUserEditComponent, canActivate: [AuthGuard], data:['ADMIN']},
    { path: 'profile',  component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent}
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
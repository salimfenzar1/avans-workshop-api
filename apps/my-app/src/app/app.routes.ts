import { Route } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { UserDetailsComponent, UserEditComponent, UserListComponent, ColumnsComponent } from '@avans-nx-workshop/features';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RecipesComponent } from './components/recipe/recipe.component';
import { RecipeAddComponent } from './components/recipe-add/recipe-add.component';
import { RecipeDetailComponent } from './components/recipe/recipe_detail.component';

export const appRoutes: Route[] = [
    // Hier komen onze URLs te staan.
    { path: '', pathMatch: 'full', redirectTo: 'dashboard'}, 
    { path: 'dashboard', component: DashboardComponent },
    { path: 'about', pathMatch: 'full', component: AboutComponent },
    { path: 'users', pathMatch: 'full', component: UserListComponent },
    { path: 'users/:id', component: UserDetailsComponent },
    { path: 'users/new', component: UserEditComponent },
    { path: 'users/:id/edit', component: UserEditComponent },
    {path: 'columns',component: ColumnsComponent, children:[
        {path: ':id', component: UserDetailsComponent}
    ] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'recipes', component: RecipesComponent },
    { path: 'recipes/add', component: RecipeAddComponent },
    { path: 'recipes/:id', component: RecipeDetailComponent }, 



    { path: '**', redirectTo: 'dashboard'}
];

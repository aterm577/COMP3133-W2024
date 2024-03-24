import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

export const routes: Routes = [
    {path: '', redirectTo: 'hero', pathMatch: 'full'},
    {path: '**', redirectTo: 'hero'},
    //{path: 'app', component: AppComponent},
    {path: 'hero', component: HeroesComponent}

];

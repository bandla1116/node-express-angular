import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const HomeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    { path: 'home', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(HomeRoutes)],
    exports: [RouterModule],
})

export class HomeRoutingModule {
}
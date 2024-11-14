// import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './modules/settings/components/settings/settings.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'settings',
        component: SettingsComponent
    }
];

export const ROUTING = RouterModule.forRoot(routes);

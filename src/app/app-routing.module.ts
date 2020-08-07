import { Routes, RouterModule } from '@angular/router';

import { ListarComponent } from './components/listar/listar.component';
import { AñadirComponent } from './components/añadir/añadir.component';


const routes: Routes = [
    { path: '', component: ListarComponent},
    { path: 'new', component: AñadirComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);

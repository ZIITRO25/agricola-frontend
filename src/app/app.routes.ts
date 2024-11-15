import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { ConsejosComponent } from './consejos/consejos.component';
import { CultivosComponent } from './cultivos/cultivos.component';
import { HerramientasComponent } from './herramientas/herramientas.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'cultivos', component: CultivosComponent },
    { path: 'herramientas', component: HerramientasComponent },
    { path: 'consejos', component: ConsejosComponent },
   { path: 'configuracion', component: ConfiguracionComponent },
];


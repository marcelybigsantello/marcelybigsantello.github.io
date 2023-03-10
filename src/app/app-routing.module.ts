import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdemServicoService } from './services/ordem-servico.service';
import { ClienteCreateComponent } from './views/components/cliente/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './views/components/cliente/cliente-delete/cliente-delete.component';
import { ClienteReadComponent } from './views/components/cliente/cliente-read/cliente-read.component';
import { ClienteUpdateComponent } from './views/components/cliente/cliente-update/cliente-update.component';
import { HomeComponent } from './views/components/home/home.component';
import { OrderServiceCreateComponent } from './views/components/order-service/order-service-create/order-service-create.component';
import { OrderServiceDeleteComponent } from './views/components/order-service/order-service-delete/order-service-delete.component';
import { OrderServiceReadComponent } from './views/components/order-service/order-service-read/order-service-read.component';
import { OrderServiceUpdateComponent } from './views/components/order-service/order-service-update/order-service-update.component';
import { OrderServiceViewComponent } from './views/components/order-service/order-service-view/order-service-view.component';
import { OrderServicesClosedComponent } from './views/components/order-service/order-services-closed/order-services-closed.component';
import { SobreComponent } from './views/components/sobre/sobre.component';
import { TecnicoCreateComponent } from './views/components/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoDeleteComponent } from './views/components/tecnico/tecnico-delete/tecnico-delete.component';
import { TecnicoReadComponent } from './views/components/tecnico/tecnico-read/tecnico-read.component';
import { TecnicoUpdateComponent } from './views/components/tecnico/tecnico-update/tecnico-update.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tecnicos', component: TecnicoReadComponent },
  { path: 'tecnicos/create', component: TecnicoCreateComponent },
  { path: 'tecnicos/update/:id', component: TecnicoUpdateComponent },
  { path: 'tecnicos/delete/:id', component: TecnicoDeleteComponent },
  { path: 'clientes', component: ClienteReadComponent },
  { path: 'clientes/create', component: ClienteCreateComponent },
  { path: 'clientes/update/:id', component: ClienteUpdateComponent },
  { path: 'clientes/delete/:id', component: ClienteDeleteComponent },
  { path: 'ordem-servico', component: OrderServiceReadComponent },
  { path: 'ordem-servico/create', component: OrderServiceCreateComponent },
  { path: 'ordem-servico/update/:id', component: OrderServiceUpdateComponent },
  { path: 'ordem-servico/delete/:id', component: OrderServiceDeleteComponent },
  { path: 'ordem-servico/view/:id', component: OrderServiceViewComponent }, 
  { path: 'ordem-servico/closed', component: OrderServicesClosedComponent },
  { path: 'sobre', component: SobreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

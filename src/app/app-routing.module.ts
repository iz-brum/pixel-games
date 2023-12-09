import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RestritoComponent } from './restrito/restrito.component';
import { GuardGuard } from './guard.guard';

// Definindo as rotas da aplicação
const routes: Routes = [
  { path: 'inicio', component: InicioComponent },   // Rota para o componente InicioComponent
  { path: 'login', component: LoginComponent },     // Rota para o componente LoginComponent
  { path: 'restrito', component: RestritoComponent, canActivate: [GuardGuard]}, // Rota para o componente RestritoComponent
  { path: '', redirectTo: '/inicio', pathMatch: 'full' } // Rota padrão, redireciona para /inicio
]

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configurando as rotas no módulo de roteamento
  exports: [RouterModule] // Exportando o módulo de roteamento para uso externo
})
export class AppRoutingModule { }

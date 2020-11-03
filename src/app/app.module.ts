import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TecnicosComponent } from './tecnicos/tecnicos.component';
import { TecnicoService } from './tecnicos/tecnico.service';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './tecnicos/form.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DetalleComponent } from './tecnicos/detalle.component';

const routes: Routes = [
  {path: '', redirectTo: '/tecnicos', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'tecnicos', component: TecnicosComponent},
  {path: 'tecnicos/form', component: FormComponent},
  {path: 'tecnicos/detalle/:id', component: DetalleComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TecnicosComponent,
    FormComponent,
    HomeComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TecnicoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

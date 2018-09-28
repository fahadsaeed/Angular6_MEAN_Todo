import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule} from  '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { MaterialModules } from '../custom-modules/material-modules';

import { IssuesService} from  './issues.service'


import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';


const routes: Routes = [
  {path: 'create', component : CreateComponent},
  {path: 'edit/:id', component : EditComponent},
  {path: 'list', component : ListComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModules,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [IssuesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

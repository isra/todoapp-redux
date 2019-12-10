import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


// ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { AppReducers } from './app.reducers';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodosListComponent } from './todo/todos-list/todos-list.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { TodoFooterComponent } from './todo/todo-footer/todo-footer.component';
import { FooterComponent } from './footer/footer.component';
import { TodoHeaderComponent } from './todo/todo-header/todo-header.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodosListComponent,
    TodoItemComponent,
    TodoFooterComponent,
    FooterComponent,
    TodoHeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot(AppReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}


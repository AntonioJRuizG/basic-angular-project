import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPage } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainPage, ListComponent, FormComponent],
  imports: [CommonModule, FormsModule],
  exports: [MainPage],
})
export class DbzModule {}

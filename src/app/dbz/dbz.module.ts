import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPage } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [MainPage, ListComponent, FormComponent],
  imports: [CommonModule],
  exports: [MainPage],
})
export class DbzModule {}

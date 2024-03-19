import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MbComponent } from './mb/mb.component';
import { SpecComponent } from './spec/spec.component';

const routes: Routes = [
  {
    path: 'mb',
    component: MbComponent,
    children: [
      {
        path: 'spec',
        component: SpecComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

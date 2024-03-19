import { Routes } from '@angular/router';
import { SdkComponent } from './sdk/sdk.component';
import { MbComponent } from './mb/mb.component';
import { SpecComponent } from './spec/spec.component';

export const routes: Routes = [
  // {
  //   path: '**',
  //   component: MbComponent
  // },
  {
    path: 'mb',
    component: MbComponent
    // children: [
    //   {
    //     path: 'spec',
    //     component: SpecComponent
    //   }
    // ]
  }
];

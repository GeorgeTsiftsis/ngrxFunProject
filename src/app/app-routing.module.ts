import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './home/shell/shell.component';
import { PageNotFoundComponent } from './home/page-not-found.component';
import { WelcomeComponent } from './home/welcome/welcome.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent },
      {
        path: 'products',

        loadChildren: () =>
          import('./products/product.module').then(m => m.ProductModule)
      },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

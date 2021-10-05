import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompareArtistsComponent } from './feature/compare-artists/compare-artists.component';
import { DetailViewComponent } from './feature/detail-view/detail-view.component';
import { MainViewComponent } from './feature/main-view/main-view.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch:'full'

  },
  {

    path:'dashboard',
    component:MainViewComponent


  },

  {
     path:'compare',
     component:CompareArtistsComponent

      
  }

  ,

  {
     path:'detail/:mbid',
     component:DetailViewComponent

      
  }
  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

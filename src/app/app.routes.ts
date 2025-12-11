import { RouterLink, Routes } from '@angular/router';
import { MiddleContent } from './middle-content/middle-content';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Services } from './services/services';
import { Login } from './login/login';
import { Pagenotfound } from './pagenotfound/pagenotfound';
import { Admin } from './admin/admin';
import { Profile } from './admin/profile/profile';
import { ViewProduct } from './admin/view-product/view-product';
import { AdminContact } from './admin/admin-contact/admin-contact';
import { Dashboard } from './dashboard/dashboard';


export const routes: Routes = [

  { path:'about', component: About },
  { path:'middlecontent', component: MiddleContent },
  { path:'contact', component: Contact },
  { path:'services', component: Services },
  { path:'login', component: Login },

  
  {
    path:'admin', 
    component:Admin,
    children:[
      { path:'profile', component:Profile },
    {path:'admin-contact',component:AdminContact},
      {path:'viewproduct',component:ViewProduct},
      { path:'', redirectTo:'profile', pathMatch:'full' }
    ]
  },
 {
  path:'dashboard',
  loadChildren: () =>
    import('./dashboard/dashboard.routes').then(m => m.dashboardRoutes),
},



  { path:'', redirectTo:'middlecontent', pathMatch:'full' },
  { path:'**', component:Pagenotfound }

];


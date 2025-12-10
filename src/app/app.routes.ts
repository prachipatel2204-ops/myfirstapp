import { RouterLink, Routes } from '@angular/router';
import { MiddleContent } from './middle-content/middle-content';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Services } from './services/services';
import { Login } from './login/login';
import { Pagenotfound } from './pagenotfound/pagenotfound';


export const routes: Routes = [
{
    path:'about',component:About
},
{
    path:'middlecontent',component:MiddleContent
},
{
    path:'contact',component:Contact
},
{
    path:'services',component:Services
},
{
    path:'login',component:Login
},
{
    path:'',redirectTo:'middlecontent',pathMatch:'full'
},
{
    path:'**',component:Pagenotfound
}
];

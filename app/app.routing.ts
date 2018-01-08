import {LoginComponent} from "./pages/login/login.component";
import {ListComponent} from "./pages/list/list.component";
import {SignupComponent } from "./pages/signup/signup.component";
// Business Signup
import {BusinessInfoComponent} from "./pages/business/signup/info/info.component";
import {CashBackComponent} from "./pages/business/signup/cashBack/cashBack.component";
import {LocationComponent} from "./pages/business/signup/location/location.component";
import {SigningUpComponent} from "./pages/business/signup/signingUp/signingUp.component";
// Business main 
import {BusinessHomeComponent} from "./pages/business/home/home.component";

export const routes= [
    {path:"",component: LoginComponent},
    {path:"list",component:ListComponent},
    {path:"signup",component:SignupComponent},
    //Business Signup
    {path:"business-info",component:BusinessInfoComponent},
    {path:"business-cash-back",component:CashBackComponent},
    {path:"business-location",component:LocationComponent},
    {path:"business-signing-up",component:SigningUpComponent},
    //Business Main  
    {path:"business-home",component:BusinessHomeComponent}
]; 

export const navigatableComponents =[
    LoginComponent,
    ListComponent,
    SignupComponent,
    //Business Signup
    BusinessInfoComponent,
    CashBackComponent,
    LocationComponent,
    SigningUpComponent,
    //Business Main
    BusinessHomeComponent
];
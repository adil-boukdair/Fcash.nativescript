import {LoginComponent} from "./pages/login/login.component";
import {ListComponent} from "./pages/list/list.component";
import { SignupComponent } from "./pages/signup/signup.component";
// Business Signup
import {BusinessInfoComponent} from "./pages/business/info/info.component";
import {CashBackComponent} from "./pages/business/cashBack/cashBack.component";
import {LocationComponent} from "./pages/business/location/location.component";
import {SigningUpComponent} from "./pages/business/signingUp/signingUp.component";

export const routes= [
    {path:"",component: LoginComponent},
    {path:"list",component:ListComponent},
    {path:"signup",component:SignupComponent},
    //Business
    {path:"business-info",component:BusinessInfoComponent},
    {path:"business-cash-back",component:CashBackComponent},
    {path:"business-location",component:LocationComponent},
    {path:"signing-up",component:SigningUpComponent}  
];

export const navigatableComponents =[
    LoginComponent,
    ListComponent,
    SignupComponent,
    //Business
    BusinessInfoComponent,
    CashBackComponent,
    LocationComponent,
    SigningUpComponent
];
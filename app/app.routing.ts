import {LoginComponent} from "./pages/login/login.component";
import {ListComponent} from "./pages/list/list.component";
import { SignupComponent } from "./pages/signup/signup.component";
import {BusinessInfoComponent} from "./pages/business/info/info.component";

export const routes= [
    {path:"",component: LoginComponent},
    {path:"list",component:ListComponent},
    {path:"signup",component:SignupComponent},
    {path:"business-info",component:BusinessInfoComponent}
];

export const navigatableComponents =[
    LoginComponent,
    ListComponent,
    SignupComponent,
    BusinessInfoComponent
];
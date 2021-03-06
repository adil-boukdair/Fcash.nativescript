import { Component,OnInit,ElementRef,ViewChild } from "@angular/core";
import {User} from "../../shared/user/user";
import {Router} from "@angular/router";
import {Page} from "ui/page";
import {Color} from "color";
import {View} from "ui/core/view";

// Services
import {UserService} from "../../shared/user/user.service";

@Component({
  selector: "my-app",
  providers:[UserService],
  templateUrl :"./pages/login/login.html",
  styleUrls:["pages/login/login-common.css", "pages/login/login.css"]
})
export class LoginComponent implements OnInit {


  user:User;
  isLoggingIn:boolean = true;
  @ViewChild("container") container: ElementRef; // get Reference to the element StackLayout for the animation
  

  constructor(
    private router:Router, 
    private userService:UserService,
    private page:Page){ 

    this.user = new User();
    this.user.email="good_adil@gmail.com";
    this.user.password="adil";
  }
  
  ngOnInit(){
    this.page.actionBarHidden = true;
    this.page.backgroundImage = "res://bg_login";
  }
 

 
 signUp(){ 
  this.router.navigate(["signup"]);
 }


}
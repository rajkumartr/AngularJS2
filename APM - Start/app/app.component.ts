// import { Component } from '@angular/core';
import { Component } from '@angular/core';

@Component ({ 
    selector : 'pm-app',
    template : `<h1 style="text-align:center">{{pageTitle}}</h1><div>Welcome to Website</div><div>{{myName}}`
 })

 export class AppComponent{
     pageTitle : string = 'Rajkumar - Website';
     myName : string ="Cognizant Technology Solutions";
 }
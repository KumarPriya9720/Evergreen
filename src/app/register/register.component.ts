// import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../auth.service';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-register',
//   standalone: true,
//   imports: [FormsModule],
//   templateUrl: './register.component.html',
//   styleUrl: './register.component.scss'
// })
// export class RegisterComponent implements OnInit{
//     email: string="";
//     password: string="";
//     fullname:string="";
  
//     constructor(private auth:AuthService){}
//     ngOnInit(): void {
//     }
//     register(){
     
//       if(this.email==''){
//         alert('please enter email');
//         return;
//       }
//       if(this.password==''){
//         alert('please enter password');
//         return;
//       }
//       this.auth.register(this.email,this.password);
  
//       this.email="";
//       this.password="";
    
//     }
  
//   }



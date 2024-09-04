import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  email: string="";
  password: string="";

  constructor(private afAuth:AngularFireAuth,private router:Router){}
  ngOnInit(): void {
  }
//   login(){
//     if(this.email==''){
//       alert('please enter email');
//       return;
//     }
//     if(this.password==''){
//       alert('please enter password');
//       return;
//     }
//     this.auth.login(this.email,this.password);
//     this.email="";
//     this.password="";
//   }
login() {
  this.afAuth.signInWithEmailAndPassword(this.email, this.password)
    .then((user) => {
      console.log('Logged in successfully:', user);
      this.router.navigate(['/dashboard']); // Redirect to a dashboard or home page
    })
    .catch((error) => {
      console.error('Login error:', error);
    });
}
}



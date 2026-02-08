import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-float',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-float.html',
  styleUrls: ['./social-float.css']
})
export class SocialFloatComponent {

  socials = [

    {
      icon: 'bi bi-linkedin',
      link: 'https://www.linkedin.com/in/moksh-mehan-7280381b3/',
      color: '#0077b5'
    },

    {
      icon: 'bi bi-github',
      link: 'https://github.com/mehanmoksh/',
      color: '#333'
    },

    {
      icon: 'bi bi-envelope-fill',
      link: 'mailto:itzmemoksh2002@gmail.com',
      color: '#ea4335'
    }

  ];

}
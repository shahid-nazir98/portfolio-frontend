import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
   roles: string[] = [
    'a Full Stack Developer',
    'a Frontend Developer',
    'a Backend Developer',
    'a Web Developer',
    'a .Net Core & Angular Specialist'
  ];
  skills = [
    {
    name: 'HTML5',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
  },
  {
    name: 'CSS3',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
  },
  {
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  {
    name: 'TypeScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
  },
  {
    name: 'Angular',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg'
  },
  {
    name: '.NET Core',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg'
  },
  {
    name: 'SQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
  },
  {
    name: 'Git',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
  },
  {
    name: 'GitHub',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
  }
];
projects = [
  {
    title: 'Portfolio Website',
    description: 'Responsive personal portfolio built with Angular, HTML, CSS, Angular Material.',
   icon:'article_person'
    // link: 'https://your-portfolio-link.com'
  },
  {
    title: 'Task Manager App',
    description: 'CRUD-based task manager using Angular, Web API, and SQL Server.',
    icon:'add_task'
    // link: 'https://github.com/shahid-nazir98/task-manager'
  },
  {
    title: 'E-Commerce UI',
    description: 'Frontend UI for an e-commerce platform with Angular.',
   icon:'shopping_bag_speed'
    // link: 'https://github.com/shahid-nazir98/ecommerce-ui'
  },
  {
    title: 'Cloud Drive',
    description: 'A Google Drive–like file storage platform where users can upload, view, and manage files. Built with Angular.',
   icon: 'drive_folder_upload',
    // link: 'https://github.com/shahid-nazir98/ecommerce-ui'
  },
    {
    title: 'VTU SGPA/CGPA Converter',
   description: 'A helpful academic tool that calculates VTU students’ SGPA and CGPA. Built with HTML,CSS,JavaScript and hosted for easy access.',
    icon: 'school',
    // link: 'https://github.com/shahid-nazir98/ecommerce-ui'
  }
];



  displayText: string = '';
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
   loading = false;

  constructor(private _snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.typeEffect();
  }

   formData = {
    name: '',
    email: '',
    title: '',
    message: ''
  };
   sendEmail() {
    this.loading = true;
    const serviceID = 'service_0xdlabd';       
    const templateID = 'template_2nt7mgg';      
    const publicKey = 'aSoOHjDy2UfPyLOpE';       
    emailjs.send(serviceID, templateID, this.formData, publicKey)
     .then((result: EmailJSResponseStatus) => {
        this.loading = false;
        this._snackBar.open('Message sent successfully!', 'Close', {
          duration: 4000,
          panelClass: ['snackbar-success']
        });
      }, (error) => {
        this.loading = false;
        this._snackBar.open('Failed to send message. Please try again.', 'Close', {
          duration: 4000,
          panelClass: ['snackbar-error']
        });
      });
  }

  typeEffect(): void {
    const currentRole = this.roles[this.roleIndex];
    const fullText = currentRole;

    if (this.isDeleting) {
      this.displayText = fullText.substring(0, this.charIndex--);
    } else {
      this.displayText = fullText.substring(0, this.charIndex++);
    }

    // Typing speed
    let typingSpeed = this.isDeleting ? 35 : 45;

    if (!this.isDeleting && this.charIndex === fullText.length) {
      // Pause at full word
      typingSpeed = 1000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      typingSpeed = 300;
    }

    setTimeout(() => this.typeEffect(), typingSpeed);
  }

}

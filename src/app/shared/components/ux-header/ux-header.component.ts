import { Component, ChangeDetectionStrategy } from '@angular/core';
import { provideRoutes, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';


@Component({
    selector: 'app-ux-header',
    templateUrl: './ux-header.component.html',
    styleUrls: ['./ux-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [AuthService]
})

export class UxHeaderComponent {
    public user$: Observable<any> = this.authSvc.afAuth.user;

  
    constructor(private authSvc: AuthService, private router:Router) { }
  
  
    async onLogout(){
      try{
        await this.authSvc.logout();
        this.router.navigate(['/login']);
      }
      catch(error){console.log(error);
      }
      
    }
 }

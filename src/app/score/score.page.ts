import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {
  no=0;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  up() {
  this.no+=1;
  }

  down() {
  if(this.no>0) {
    this.no-=1;
  }
  }

  homePage() {
  this.route.navigate(['/home']);
  }

}

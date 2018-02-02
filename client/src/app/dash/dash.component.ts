import { Component, OnInit } from '@angular/core';
import { InterlinkService } from '../interlink.service';
import { Router } from '@angular/router';
import {BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  userName: string
  errMsg:string = ""
  allQuestions: object[]
  constructor(private _interlink:InterlinkService, private _router: Router) { }

  ngOnInit() {
    this._interlink.allQuestions.subscribe((allQ)=>{
      this.allQuestions = allQ;
      console.log('find back in component',this.allQuestions)
    })
    this._interlink.showQuestions()
    this._interlink.checkSess((userName) => {
      if (userName['user']) {
        this.userName = userName['user']['name'];
        console.log("un",this.userName);
      } else {
        this._router.navigate(['/']);
      }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { InterlinkService } from '../interlink.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  question: object
  answer: object
  errMsg: string
  id: string
  constructor(private _interlink: InterlinkService, private _router: Router, private route: ActivatedRoute) {
    this.answer = {
      content: "",
      details: ""
    }
    this.errMsg = "";
  }
  newAnswer(id) {
    this.answer['content'] = this.answer['content'].trim();
    if (this.answer['content'].length >= 7) {
      this.errMsg = ""
      this._interlink.newAnswer(this.answer, this.id, (res)=> {
        this._router.navigate(['dash'])
      })
    } else {
      this.errMsg = "Answers must be at least 8 characters"
      this.answer['content'] = ""
    }
  }
  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    console.log("where am i")
    this._interlink.checkSess((userName) => {
      if (userName['user']) {
      } else {
        this._router.navigate(['/']);
      }
    })
  }
}

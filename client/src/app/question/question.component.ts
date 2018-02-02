import { Component, OnInit } from '@angular/core';
import { InterlinkService } from '../interlink.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  question: object = {}
  id:string
  allAnswers: object[] = []
  constructor(private _interlink: InterlinkService, private _router: Router, private route: ActivatedRoute) {
  }
  like(id){
    this._interlink.like(()=>{
      console.log("back in components for like")
    })
  }
  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    
    this._interlink.question.subscribe((res)=>{
      console.log("back in component", res)
      this.question = res;
      console.log("part 2", this.question)
    })
    this._interlink.grabQuestion(this.id)
    

    this._interlink.checkSess((userName) => {
      if (userName['user']) {
      } else {
        this._router.navigate(['/']);
      }
    })
    //all answers
    this._interlink.allAnswers.subscribe((allA)=>{
      this.allAnswers = allA;
      console.log('answers back in component',this.allAnswers)
    })
    this._interlink.showAnswers(this.id)
  }
}

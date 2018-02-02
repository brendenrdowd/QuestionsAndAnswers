import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs'

@Injectable()
export class InterlinkService {
  allQuestions: BehaviorSubject<any[]> = new BehaviorSubject([])
  allQArr: object[]
  allAnswers: BehaviorSubject<any[]> = new BehaviorSubject([])
  allAnArr: object[]
  question: BehaviorSubject<object> = new BehaviorSubject(Object)
  constructor(private _http: Http) { }
  newQuestion(question,cb){
    this._http.post('/newQuestion', question).subscribe((res)=>{
      this.showQuestions();
      cb(res.json());
    })
  }
  newAnswer(answer,id,cb){
    this._http.post('/newAnswer', answer, id).subscribe((res)=>{
      this.showAnswers(id);
      cb(res.json())
    })
  }
  showQuestions(){
    this._http.get('/showAll').subscribe((res)=>{
      this.allQArr = res.json();
      this.allQuestions.next(this.allQArr);
    })
  }
  grabQuestion(id){ 
    this._http.get('/question/' + id).subscribe((res)=>{
      console.log("find one back in service",res.json());
      this.question.next(res.json())
      return
    })
  }
  showAnswers(id){
    console.log("in answer service function")
    this._http.get('/showAllAnswers' + id).subscribe((res)=>{
      console.log("here?",this.allAnArr,res)
      this.allAnArr = res.json();
      this.allAnswers.next(this.allAnArr);
    })
  }
  like(id){
    this._http.get('/like/' + id).subscribe((res)=>{
      console.log("like back in service",res)
    })
  }
  //login services
  login(user,cb){
    this._http.post('/login', user).subscribe((res)=>{
      cb(res.json())
    })
  }
  checkSess(cb){
    this._http.get('/sess').subscribe((res)=>{
      cb(res.json());
    })
  }
}
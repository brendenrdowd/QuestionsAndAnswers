import { Component, OnInit } from '@angular/core';
import { InterlinkService } from '../interlink.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  question: object
  errMsg:string = ""
  constructor(private _interlink: InterlinkService, private _router: Router) { 
    this.question = {
      content: '',
      desc: '',
    }
  }
  newQuestion(){
    this.question['content'] = this.question['content'].trim();
    if(this.question['content'].length > 7){
      this.errMsg = ""
      this._interlink.newQuestion(this.question,()=>{
        console.log("back in component")
        this._router.navigate(['dash'])
      })
    }else{
      this.errMsg = "Questions must be at least 8 characters"
      this.question['content'] = ""
    }
  }
  ngOnInit() {
    this._interlink.checkSess((userName) => {
      if (userName['user']) {
      } else {
        this._router.navigate(['/']);
      }
    })
  }
}


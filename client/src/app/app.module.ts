import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';
import { InterlinkService } from './interlink.service';
import { NewComponent } from './new/new.component';
import { AnswerComponent } from './answer/answer.component';
import { QuestionComponent } from './question/question.component';


@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    LoginComponent,
    NewComponent,
    AnswerComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      HttpModule,
      AppRoutingModule 
    ],
  providers: [InterlinkService],
  bootstrap: [AppComponent]
})
export class AppModule {}

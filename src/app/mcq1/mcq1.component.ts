import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-mcq1',
  templateUrl: './mcq1.component.html',
  styleUrls: ['./mcq1.component.scss']
})
export class Mcq1Component implements OnInit {
  public questions: any;
  public bingo: string = 'Bingo!';
  public oops: string = 'Oops!';
  public val: boolean;
  public questionIndex = 0;
  public clicked = false;
  public totalQuestions;
  @Input() score: number = 0; //'score' has data that has to be shared with another component
  public questionDetails: any;
  
  constructor(public db: AngularFireDatabase, private route: Router, private sharedService: SharedService) {
    this.getQuestions()         //extracting data from the database for each question 
      .subscribe(result => {
        this.questions = result;
        this.totalQuestions = this.questions.length;
        console.log("result", result, this.totalQuestions);
        this.nextQuestion();    //calling this because questionIndex starts from 0
      });   
  }

  nextQuestion() {    //to navigate to the next question
    if (this.questionIndex < this.totalQuestions) {
      this.questionIndex += 1;
      this.questionDetails = this.questions[this.questionIndex - 1];
    }
    this.reset();
  }

  prevQuestion() {    //to navigate to the previous question

    if (this.questionIndex <= this.totalQuestions) {
      this.questionIndex -= 1;
      this.questionDetails = this.questions[this.questionIndex - 1];
    }
  }

  ngOnInit(): void {

  }

  getQuestions() {          //fetching the required data from the database
    return this.db.list('MCQs').valueChanges();
  }

  submitAnswer(form: NgForm, ans: any) {    //checking if the selected option's value matches 
    this.clicked = true;                    //with the correct answer
    ans = '{"option":"' + ans + '"}';
    if (JSON.stringify(form.value) === ans) {
      this.val = true;
      this.score += 5;
      this.bingo='Bingo!'
    } else {
      this.val = false;
      this.bingo='Oops!'
    }
    //console.log('-----HHH-----', JSON.stringify(form.value), ans, this.val, this.score);
    return this.val;
  }

  endQuiz() {       //to go out of the quiz zone
    this.sharedService.score = this.score;
    this.route.navigate(["/result"]);
  }

  reset(){
    this.clicked=false;       //resetting the status after submitting an answer
    
  }
}

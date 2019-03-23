import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from './views/questions/questions.component';
import { UserComponent } from './views/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './views/home/home.component';
import { PostQuestionComponent } from './views/post-question/post-question.component';
import { QuestionComponent } from './views/question/question.component';
const routes: Routes = [
  { path: 'questions', component: QuestionsComponent },
  { path: 'question/:id', component: QuestionComponent },
  { path: 'user', component: UserComponent },
  { path: 'post-question', component: PostQuestionComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
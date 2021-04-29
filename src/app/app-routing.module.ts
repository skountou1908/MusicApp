import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { LeaderboardsComponent } from './leaderboards/leaderboards.component';
import { InstructionsComponent } from './instructions/instructions.component';



const routes: Routes = [
  {path:'main-menu', component: MainMenuComponent},
  {path:'leaderboards', component: LeaderboardsComponent},
  {path: 'instructions', component: InstructionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MainMenuComponent, LeaderboardsComponent,InstructionsComponent]
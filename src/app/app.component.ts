import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  conversation: any;

  onConversationSelector(conversation: any){
    this.conversation = conversation;
  }
}

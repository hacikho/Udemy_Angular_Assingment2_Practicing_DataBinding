import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  username = "";
  constructor() {
    this.isUserNameEmpty = true;
  }

  onUpdateUserName(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
  }
}

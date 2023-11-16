import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  // newServerName = '';
  newServerContent = '';
  @Output("serverCreated") serverAdded = new EventEmitter();
  @Output() blueprintAdded = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    console.log(nameInput.value)
    this.serverAdded.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent
    })
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintAdded.emit({
      blueprintName: nameInput.value,
      blueprintContent: this.newServerContent
    })
  }

}

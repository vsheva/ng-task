import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  // newServerName = '';
  //newServerContent = '';
  @Output("serverCreated") serverAdded = new EventEmitter();
  @Output() blueprintAdded = new EventEmitter();
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;


  constructor() {
  }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    // console.log(this.serverContentInput)
    // console.log(nameInput.value)

    this.serverAdded.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintAdded.emit({
      blueprintName: nameInput.value,
      blueprintContent: this.serverContentInput.nativeElement.value
    })
  }

}

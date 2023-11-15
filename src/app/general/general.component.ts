import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
 @Output() serverAdded= new EventEmitter();
 @Output() blueprintAdded= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverAdded.emit({serverName:this.newServerName, serverContent:this.newServerContent})
  }

  onAddBlueprint() {
    this.blueprintAdded.emit( {blueprintName:this.newServerName, blueprintContent:this.newServerContent})
  }

}

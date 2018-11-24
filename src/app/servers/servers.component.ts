import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Test';
  serverCreated = false;
  servers = ["s1", "s2"];

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {
  }

  onCreateServer(){
    if(this.serverName){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! server name is ' + this.serverName;
  }else {
    this.serverCreationStatus = 'No server was created';
  }
  }
  onUpdateServerName(event: Event){
    this.serverName = event.target.value;
  }
}

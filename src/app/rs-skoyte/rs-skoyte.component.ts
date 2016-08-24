import { Component, OnInit } from '@angular/core';
import {SkoyteService} from "./shared/skoyte.service.";

@Component({
  selector: 'app-rs-skoyte',
  templateUrl: 'rs-skoyte.component.html',
  providers: [SkoyteService]
})
export class RsSkoyteComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}

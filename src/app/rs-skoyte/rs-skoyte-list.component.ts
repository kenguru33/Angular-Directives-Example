import { Component, OnInit } from '@angular/core';
import {SkoyteService} from "./shared/skoyte.service.";
import {Skoyte} from "./shared/skoyte";

@Component({
  selector: 'app-rs-skoyte-list',
  templateUrl: 'rs-skoyte-list.component.html'
})
export class RsSkoyteListComponent implements OnInit {

  skoyter: Skoyte[];

  constructor(private skoyteService: SkoyteService) { }

  ngOnInit() {
    this.skoyter = this.skoyteService.getSkoyter();
  }

}

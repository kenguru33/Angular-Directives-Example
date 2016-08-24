import { Injectable } from '@angular/core';
import {Skoyte} from "./skoyte";
import {SkoyteMannskapsType} from "./skoyte-type";

@Injectable()
export class SkoyteService {

private _skoyter: Skoyte[];
  constructor() {
    this._skoyter  = [
      {id: 1, name: 'SjøUgla', mannskapsType: SkoyteMannskapsType.Frivillig},
      {id: 2, name: 'HavTurner', mannskapsType: SkoyteMannskapsType.Fast},
      {id: 1, name: 'SjøUgla', mannskapsType: SkoyteMannskapsType.Frivillig},
      {id: 2, name: 'HavTurner', mannskapsType: SkoyteMannskapsType.Fast},
    ];
  }

  getSkoyter() {
    return this._skoyter;
  }
  addSkoyte(skoyte: Skoyte) {
    this._skoyter.push(skoyte);
  }
  getskoyte(id: number) {
    // TODO: implement getSkoyte
  }

  removeSkoyte(skoyte: Skoyte) {
    // TODO: implement removeskoyte
  }
}

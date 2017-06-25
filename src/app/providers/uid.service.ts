import { Injectable } from '@angular/core';

@Injectable()
export class UidService {

  constructor() { }

  private UID(): string {
    let random_id: string = '';
    if(typeof(window) !== "undefined" && typeof(window.crypto) != undefined && typeof(window.crypto.getRandomValues) !== "undefined") {
      let buf: Uint16Array = new Uint16Array(8);
      window.crypto.getRandomValues(buf);
      for(var i = 0; i < 8; i++)
        random_id += this.pad4(buf[i]);
      return random_id;

    }
    else {
      for(var i = 0; i < 8; i++)
        random_id += this.random4();
      return random_id;
    }
  }

  private pad4(num: number): string {
    let ret: string = num.toString(16);
    while(ret.length < 4) {
      ret = '0' + ret;
    }
    return ret;
  }

  private random4(): string {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  public generate(): string {
    return this.UID();
  }

}

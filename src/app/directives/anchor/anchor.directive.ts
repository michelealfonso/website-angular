import { Directive, HostListener, Input } from '@angular/core';
import { ManagerDirective } from '../manager/manager.directive';

@Directive({
  selector: '[appAnchor]'
})
export class AnchorDirective {

  @Input('appAnchor') id!: string | number;

  constructor(private manager: ManagerDirective) {}

  @HostListener('click')
  scroll() {
    this.manager.scroll(this.id);
  }
}

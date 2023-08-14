import { Directive, ElementRef, Input } from '@angular/core';
import { ManagerDirective } from '../manager/manager.directive';

@Directive({
  selector: '[appSelection]'
})
export class SelectionDirective {
  @Input('appSSection') id!: string | number;

  constructor(private host: ElementRef<HTMLElement>, private manager: ManagerDirective) {}

  ngOnInit() {
    this.manager.register(this);
  }

  ngOnDestroy() {
    this.manager.remove(this);
  }

  scroll() {
    this.host.nativeElement.scrollIntoView({
      behavior: 'smooth',
    });
  }
}

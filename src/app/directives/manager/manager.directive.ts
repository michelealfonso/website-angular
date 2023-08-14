import { Directive } from '@angular/core';
import { SelectionDirective } from '../selection/selection.directive';

@Directive({
  selector: '[appManager]'
})
export class ManagerDirective {

  constructor() { }

  private sections = new Map<string | number, SelectionDirective>();

  scroll(id: string | number) {
    this.sections.get(id)!.scroll();
  }

  register(section: SelectionDirective) {
    this.sections.set(section.id, section);
  }

  remove(section: SelectionDirective) {
    this.sections.delete(section.id);
  }
}


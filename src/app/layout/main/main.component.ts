import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { TaksComponent } from '../../features/task/view/taks/taks.component';
import { CategoryComponent } from '../../features/category/view/category/category.component';

const COMPONENTS = [TaksComponent, CategoryComponent];

const MODULES = [MatDividerModule];

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [...COMPONENTS, ...MODULES],
  template: `<div class="h-screen flex w-full">
    <!--Cateogias -->
    <app-category class="w-1/4" />

    <!--Divisor -->

    <mat-divider class="h-full opacity-50" vertical />

    <!--Tarefas -->
    <app-taks class="w-3/4" />
  </div>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}

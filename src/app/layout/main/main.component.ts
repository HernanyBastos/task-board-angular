import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CategoryComponent } from '../../features/categories/view/components/services/category/category.component';
import { MatDividerModule } from '@angular/material/divider';
import { TaksComponent } from '../../features/task/view/taks/taks.component';

const COMPONENTS = [CategoryComponent, TaksComponent];

const MODULES = [MatDividerModule];

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [...COMPONENTS, ...MODULES],
  template: `<div class="h-screen flex w-full border-4 border-blue-700">
    <!--Cateogias -->
    <app-category class="w-1/4 border-4 border-orange-600" />

    <!--Divisor -->

    <mat-divider class="h-full opacity-50" />

    <!--Tarefas -->
    <app-taks class="w-3/4 border-4 border-green-700" />
  </div>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}

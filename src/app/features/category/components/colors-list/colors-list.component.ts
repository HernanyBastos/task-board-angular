import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { CategoryService } from '../../services/category.service';
import { categoryBackgrondColors } from '../../constants/category-colors';

@Component({
  selector: 'app-colors-list',
  standalone: true,
  imports: [MatDividerModule],
  template: `
    <section class="flex flex-col gap-4 w-full h-auto mb-12">
      <mat-divider class="h-full opacity-50" />

      <!--Lista de cores -->
      <div class="flex flex-wrap justify-center items-center px-4 gap-4">
        @for (category of categories(); track category.id) {
          <span
            class="flex items-center justify-center cursor-pointer {{
              categoryBackgrondColors[category.color]
            }} px-4 py-2 rounded-md text-center text-white font-semibold shadow-xl"
            >{{ category.name }}</span
          >
        }
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorsListComponent {
  private readonly categoryService = inject(CategoryService);

  public categories = this.categoryService.categories;

  public categoryBackgrondColors = categoryBackgrondColors;
}

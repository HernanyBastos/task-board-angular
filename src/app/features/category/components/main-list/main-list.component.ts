import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-main-list',
  standalone: true,
  imports: [],
  template: `
    <section class="mt-16 mx-12 pl-8">
      <span class="text-2xl font-bold">Categoria</span>
      <ul class="mt-4 space-y-4">
        @for (category of categories(); track category.id) {
          <li class="text-base font-normal cursor-pointer">
            {{ category.name }}
          </li>
        }
      </ul>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainListComponent {
  private readonly categoryService = inject(CategoryService);

  public categories = this.categoryService.categories;
}

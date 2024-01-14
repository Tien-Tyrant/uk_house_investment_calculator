import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormComponent } from './components/form.component';

@Component({
  selector: 'ns-root',
  standalone: true,
  template: `<h1>UK House Investment Calculator</h1>
  <house-form/>
`,
  styleUrl: './app.component.css',
  imports: [CommonModule, FormComponent]
})
export class AppComponent {
  title = 'UK House Investment Calculator';
}

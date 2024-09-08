import { Component } from '@angular/core';
import { ResponseComponent } from "../response/response.component";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ResponseComponent, ResponseComponent, ReactiveFormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  method = new FormControl('GET');
  apiEndpoint = new FormControl('');
  apiKey = new FormControl('');

  constructor(private apiService: ApiServiceService) { }

  onCallApi() {
    if (this.apiEndpoint.value && this.method.value) {
    this.apiService.getData(this.apiEndpoint.value, this.method.value);
    }
    if (this.apiEndpoint.value && this.method.value && this.apiKey.value) {
      this.apiService.getData(this.apiEndpoint.value, this.method.value, this.apiKey.value);
    }
  }
  resetInput(input: FormControl) {
   input.reset();
  }
}

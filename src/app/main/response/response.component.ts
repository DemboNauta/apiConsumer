import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-response',
  standalone: true,
  imports: [],
  templateUrl: './response.component.html',
  styleUrl: './response.component.css'
})
export class ResponseComponent {
  @ViewChild('responseText') responseText!: ElementRef;
  @ViewChild('copyNotification') copyNotification!: ElementRef;

  constructor(private apiService: ApiServiceService) { 
    this.apiService.responseSubject.subscribe((res) => {
      this.responseText.nativeElement.innerText = '';
      this.responseText.nativeElement.innerText = JSON.stringify(res, null, 2);
    });
  }

  exampleJsonResponse = `{
    "example": {
      "description": "Este es un JSON de ejemplo compacto para demostrar datos relacionados con la programación.",
      "funFact": "¿Sabías que el término 'bug' en programación proviene de una polilla real encontrada en un ordenador antiguo?",
      "data": {
        "developer": {
          "id": 101,
          "name": "Alice Smith",
          "email": "alicesmith@example.com",
          "skills": [
            "JavaScript",
            "TypeScript",
            "Angular",
            "Python"
          ],
          "projects": [
            {
              "projectName": "CodeExplorer",
              "role": "Lead Developer",
              "status": "In Progress",
              "note": "Este proyecto ayuda a explorar el código con estilo."
            },
            {
              "projectName": "DebugMaster",
              "role": "Senior Developer",
              "status": "Completed",
              "note": "Un proyecto para vencer a los errores con un solo clic."
            }
          ],
          "preferences": {
            "favoriteEditor": "VSCode",
            "preferredLanguage": "TypeScript",
            "quirk": "Organiza el código en el café y las librerías en el teclado."
          }
        },
        "metadata": {
          "recordCount": 1,
          "requestTime": "2024-09-08T12:34:56Z",
          "additionalInfo": "Recuerda siempre hacer 'commit' de tus cambios. ¡El futuro te lo agradecerá!"
        }
      }
    }
  }`;


  copyToClipboard(text: string) {
    window.navigator.clipboard.writeText(text);
    const notification = this.copyNotification.nativeElement;
    notification.classList.add('show');

    setTimeout(() => {
      notification.classList.remove('show');
    }, 1000);
  }
  
}

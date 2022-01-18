import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  // Cargamos Servicio en el decorador
  providers: [ProjectService]
})
export class CreateComponent implements OnInit {
  public title:string;
  public project: Project;
  public status!: string;

  constructor(
    private _projectService: ProjectService
  ) {
      this.title = 'Crear Proyecto';
      this.project = new Project('','','','','',2022,'');
    }

  ngOnInit(): void {
  }

  onSubmit(form: any){
    this._projectService.saveProject(this.project).subscribe(
      response => {
        if(response.project){
          this.status = 'success';
          form.reset();
        }else{
          this.status = 'failed';
        }
      });
  }

}

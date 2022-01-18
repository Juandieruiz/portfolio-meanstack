import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { HttpClientModule } from '@angular/common/http';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  // Cargamos Servicio en el decorador
  providers: [ProjectService,UploadService]
})
export class CreateComponent implements OnInit {
  public title:string;
  public project: Project;
  public status!: string;
  public filesToUpload!: Array<File>;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ) {
      this.title = 'Crear Proyecto';
      this.project = new Project('','','','','',2022,'');
    }

  ngOnInit(): void {
  }
          // Guardar los datos del formulario
  onSubmit(form: any){
    this._projectService.saveProject(this.project).subscribe(
      response => {
        if(response.project){

          // Subir imagen
          this._uploadService.makeFileRequest(Global.url+'upload-image/'+response.project._id,[],this.filesToUpload,'image')
          .then((result:any) => {
            console.log(result);
          this.status = 'success';
          form.reset()     
          })

        }else{
          this.status = 'failed';
        }
      });
  }


  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}

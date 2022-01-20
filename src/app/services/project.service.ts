import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  public url:string;

  constructor(
    private _http:HttpClient
  ) {
      this.url = Global.url
    }

    // Servicios
    testService(){
      return 'Probando el servicio de Angular';
    }

    // Guardar Proyecto
    saveProject(project: Project): Observable<any>{
      let params = JSON.stringify(project);
      let headers = new HttpHeaders().set('Content-Type','application/json');


      return this._http.post(this.url+'save-project', params, {headers: headers});
    }

    // Devolver un listado de proyectos
    getProjects(): Observable<any>{
      let headers = new HttpHeaders().set('Content-type','application/json');

      return this._http.get(this.url+'get-projects', {headers: headers});
    }

    //Devolver un proyecto por id
    getProject(id: any): Observable<any>{
      let headers = new HttpHeaders().set('Content-type','application/json');

      return this._http.get(this.url+'project/'+id, {headers: headers});
    }

    // Borrar un Proyecto por id
    deleteProject(id : any): Observable<any>{
      let headers = new HttpHeaders().set('Content-type','application/json');
      
      return this._http.delete(this.url+'project/'+id, {headers: headers});
    }
















}

import { Injectable } from '@angular/core';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  public url:string;

  constructor() {
    this.url = Global.url;
  }

  // Metodo para subir archivos al servidor(Backend)
  makeFileRequest(url:string, params: Array<string>,files: Array<File>, name: string){
    return new Promise((resolve,reject) => {
      const formData:any = new FormData(); // Objeto para subir archivos
      const xhr = new XMLHttpRequest(); // XMLHttpRequest es una clase nativa de JS

      for(let i = 0; i < files.length; i++){
        formData.append(name,files[i],files[i].name); // Agregamos el archivo al formData
      }

      xhr.onreadystatechange = () => { // Cuando el estado de la peticion cambie
        if(xhr.readyState == 4){ // Si el estado es 4
          if(xhr.status == 200){ // Si el estado es 200
            resolve(JSON.parse(xhr.response)); // Resolvemos la promesa
          }else{
            reject(xhr.response); // Rechazamos la promesa
          }
        }
      }

      xhr.open('POST',url,true); // Metodo POST
      xhr.send(formData); // Enviamos el formData
    });
  }

}

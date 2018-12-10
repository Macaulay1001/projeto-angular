import { Component, OnInit } from '@angular/core';

import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.component.html',
  styleUrls: ['./loguin.component.css']
})

export class LoguinComponent implements OnInit {

  usuarios: Usuario[];
  usuarioInput: Usuario;
  
  constructor(private usuarioService: UsuarioService){}


  ngOnInit() {
    this.get();
  }

  get() : void {
    this.usuarios = this.usuarioService.getUsuario();
    console.log(this.usuarios);
  }

  logar(usuarioInput: Usuario){
    if (usuarioInput.loguin !== '' || usuarioInput.senha !=='') {
      
    }
  }

  autenticaLoguin(loguin : string): boolean{
    this.usuarios.forEach(element => {
      if(element.loguin === loguin){
        return true;
      }
    });
    return true;
  }

  autenticaSenha(senha : string): boolean{
    this.usuarios.forEach(element => {
      if(element.loguin === senha){
        return true;
      }
    });
    return true;
  }

}

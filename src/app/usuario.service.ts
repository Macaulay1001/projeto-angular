import { Injectable } from '@angular/core';
import { USUARIOS } from './dis-usuario';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  getUsuario(): Usuario[]{
    return USUARIOS;
  }

  constructor() { }
}

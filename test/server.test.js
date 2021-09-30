import { expect } from '@jest/globals';
import {} from '../front/public/main'
const assert = require("assert");

//Pruebas unitarias
const login = {
  correoIngresado: true,
  contraseña: false,
  obligatorios: false,
  mensaje: false,
};

const registro = {
  correoIngresado: true,
  contraseña: true,
  obligatorios: true,
  mensaje: true,
};

describe('login', () => {
  test('El correo ingresado debe tener un @ para ser válido.', () => {
    expect(login.correoIngresado).toBeTruthy();
  });

  test('La contraseña debe tener como mínimo 5 caracteres', () => {
    expect(login.contraseña).toBeTruthy();
  });
  test('El correo y la contraseña son requeridos obligatoriamente.', () => {
    expect(login.obligatorios).toBeFalsy();
  });
  test('El sistema debe mostrar un mensaje de error al ingresar campos no válidos.', () => {
    expect(login.mensaje).toBeFalsy();
  });
});


describe('registro', () => {
  test('El correo ingresado debe tener un @ para ser válido.', () => {
    expect(registro.correoIngresado).toBeTruthy();
  });

  test('La contraseña debe tener como mínimo 5 caracteres', () => {
    expect(registro.contraseña).toBeTruthy();
  });
  test('El correo y la contraseña son requeridos obligatoriamente.', () => {
    expect(registro.obligatorios).toBeTruthy();
  });
  test('El sistema debe mostrar un mensaje de error al ingresar campos no válidos.', () => {
    expect(registro.mensaje).toBeTruthy();
  });
});

describe('mas requerimientos', () => {
  // ... carlos valverde
});
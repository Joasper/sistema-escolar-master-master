import React from "react";
import img from "../public/undraw_male_avatar_g98d.svg";
import imgWoman from "../public/undraw_female_avatar_efig.svg";

const columns = [
  { name: "MATRICULA", uid: "Matricula" },

  { name: "NOMBRE", uid: "Nombre" },
  { name: "APELLIDO", uid: "Apellido" },
  { name: "FECHA DE NACIMIENTO", uid: "FechaNacimiento" },
  { name: "SEXO", uid: "Sexo" },
  { name: "EDAD", uid: "Edad" },
  { name: "ESTADO", uid: "Estado" },

  { name: "ACTIONS", uid: "actions" },
];

const users = [
  {
    id: 1,
    Matricula: "#372837",
    Nombre: "Tony Reichert",
    Apellido: "Feliz Cuevas",
    FechaNacimiento: "10/10/2015",
    Sexo: "Masculino",
    Edad: "8 años",
    Estado: "Inscrito",

    status: "active",

    avatar: img,
  },
  {
    id: 2,

    Matricula: "#372837",
    Nombre: "Ashley Zahivis",
    Apellido: "Ferreras Ramirez",
    FechaNacimiento: "30/10/2012",
    Sexo: "Femenino",
    Edad: "10 años",
    Estado: "Desinscrito",

    status: "paused",

    avatar: imgWoman,
  },
  {
    id: 3,
    Matricula: "#372837",
    Nombre: "Ashley Zahivis",
    Apellido: "Ferreras Ramirez",
    FechaNacimiento: "30/10/2012",
    Sexo: "Femenino",
    Edad: "10 años",
    Estado: "Desinscrito",

    status: "paused",

    avatar: imgWoman,
  },
  {
    id: 4,
    Matricula: "#372837",
    Nombre: "Ashley Zahivis",
    Apellido: "Ferreras Ramirez",
    FechaNacimiento: "30/10/2012",
    Sexo: "Femenino",
    Edad: "10 años",
    Estado: "Desinscrito",

    status: "paused",

    avatar: imgWoman,
  },
  {
    id: 5,
    Matricula: "#372837",
    Nombre: "Ashley Zahivis",
    Apellido: "Ferreras Ramirez",
    FechaNacimiento: "30/10/2012",
    Sexo: "Femenino",
    Edad: "10 años",
    Estado: "Desinscrito",

    status: "paused",

    avatar: imgWoman,
  },
];

export { columns, users };

import { EstudiantesSliceProps } from "./../../Types/Estudiante";
import { createSlice } from "@reduxjs/toolkit";

export const EstudianteSlice = createSlice({
  //nombre del slice con el que se vincula al store
  name: "estudiantes",
  //declaracion del estado inicial de las variables
  initialState: {
    estudiantes: [],
    EstudianteActive: [],
    Modal: null,
  },
  //funciones que modifican el estado
  reducers: {
    OnSetEstudents: (state, { payload }: EstudiantesSliceProps[]) => {
      state.estudiantes = payload;
    },
    OnActiveStudent: (state, { payload }) => {
      state.EstudianteActive = payload;
    },
    OpenModal: (state, { payload }) => {
      state.Modal = payload;
    },
  },
  //incremeta por una cantidad dada
});

export const { OnSetEstudents, OnActiveStudent, OpenModal } =
  EstudianteSlice.actions;

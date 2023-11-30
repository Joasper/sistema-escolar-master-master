import { EstudiantesSliceProps } from "./../../Types/Estudiante";
import { createSlice } from "@reduxjs/toolkit";

export const EstudianteSlice = createSlice({
  //nombre del slice con el que se vincula al store
  name: "estudiantes",
  //declaracion del estado inicial de las variables
  initialState: {
    estudiantes: [],
  },
  //funciones que modifican el estado
  reducers: {
    OnSetEstudents: (state, { payload }: EstudiantesSliceProps[]) => {
      state.estudiantes = payload;
    },
    decrement: (state) => {},
    //incremeta por una cantidad dada
    incrementByAmount: (state, action) => {},
  },
});

export const { OnSetEstudents, decrement, incrementByAmount } =
  EstudianteSlice.actions;

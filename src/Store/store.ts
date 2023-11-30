import { EstudianteSlice } from "../Store/Estudiantes/EstudianteSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    estudiantes: EstudianteSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;

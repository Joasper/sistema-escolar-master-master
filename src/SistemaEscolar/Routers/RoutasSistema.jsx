import React from "react";
import SideBar from "../../../components/SideBar";
import { Route, Routes } from "react-router-dom";
import { Inicio } from "../Paginas/Inicio";
import { Estudiantes } from "../Paginas/Estudiantes";

export const RoutasSistema = () => {
  return (
    <SideBar>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="estudiantes" element={<Estudiantes />} />
      </Routes>
    </SideBar>
  );
};

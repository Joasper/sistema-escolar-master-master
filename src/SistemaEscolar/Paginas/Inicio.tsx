import React from "react";
import { useEffect } from "react";
import { useSystemEstudiantes } from "../../Hooks/useSystemEstudiantes";

export const Inicio = () => {
  const { startSetEstudents } = useSystemEstudiantes();
  useEffect(() => {
    startSetEstudents();
  }, []);

  return (
    <div>
      <button>Hola</button>
    </div>
  );
};

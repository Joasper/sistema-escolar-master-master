import { useEffect } from "react";
import App from "../../../components/Table";
import { useSystemEstudiantes } from "../../Hooks/useSystemEstudiantes";
export const Estudiantes = () => {
  const { startSetEstudents, estudiantes } = useSystemEstudiantes();
  useEffect(() => {
    startSetEstudents();
  }, []);

  const newStudents = estudiantes.estudiantes?.map((estudiante) => ({
    ...estudiante,
  }));
  console.log(newStudents);
  return (
    <div>
      <App />
    </div>
  );
};

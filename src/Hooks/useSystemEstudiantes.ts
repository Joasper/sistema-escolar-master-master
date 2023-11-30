import { useDispatch, useSelector } from "react-redux/es/exports";
import { OnSetEstudents } from "../Store/Estudiantes/EstudianteSlice";
import Peticiones from "../Api/Peticiones";

export const useSystemEstudiantes = () => {
  const dispatch = useDispatch();
  const { estudiantes, EstudianteActive, Modal } = useSelector(
    (state): any => state.estudiantes
  );

  const startSetEstudents = async () => {
    try {
      const { data } = await Peticiones.get("/estudiante");
      console.log(data);
      dispatch(OnSetEstudents(data));
    } catch (error) {
      console.log(error);
    }
  };

  const startCreateStudent = async (student) => {
    let fecha = `${student.FechaNacimiento}T00:00:00.000Z`;
    console.log({ fecha, student });
    try {
      const { data } = await Peticiones.post("/estudiante", {
        Matricula: student.Matricula,
        Nombre: student.Nombre,
        Apellido: student.Apellido,
        FechaNacimiento: fecha,
        Sexo: student.Sexo,
        Edad: student.Edad,
        Estado: student.Estado,
      });
      // dispatch(OnSetEstudents(data));
      startSetEstudents();
    } catch (error) {
      console.log(error);
    }
  };

  const startDeleteStudent = async (id) => {
    try {
      const { data } = await Peticiones.delete(`/estudiante/${id}`);
      console.log(data);
      // dispatch(OnSetEstudents(data));
      startSetEstudents();
    } catch (error) {
      console.log(error);
    }
  };

  const startUpdateStudent = async (student, id) => {
    let fecha = `${student.FechaNacimiento}T00:00:00.000Z`;
    console.log({ fecha, id });
    try {
      const { data } = await Peticiones.put(`/estudiante/${id}`, {
        Matricula: student.Matricula,
        Nombre: student.Nombre,
        Apellido: student.Apellido,
        FechaNacimiento: fecha,
        Sexo: student.Sexo,
        Edad: student.Edad,
        Estado: student.Estado,
      });
      console.log(data);
      // dispatch(OnSetEstudents(data));
      startSetEstudents();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    //* PROPIEDADES
    estudiantes,
    EstudianteActive,

    //* METODOS
    startSetEstudents,
    startCreateStudent,
    startDeleteStudent,
    startUpdateStudent,
    Modal,
  };
};

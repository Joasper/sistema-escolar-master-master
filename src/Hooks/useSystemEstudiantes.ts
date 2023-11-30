import { useDispatch, useSelector } from "react-redux/es/exports";
import { OnSetEstudents } from "../Store/Estudiantes/EstudianteSlice";
import Peticiones from "../Api/Peticiones";

export const useSystemEstudiantes = () => {
  const dispatch = useDispatch();
  const { estudiantes } = useSelector((state): any => state.estudiantes);

  const startSetEstudents = async () => {
    try {
      const { data } = await Peticiones.get("/estudiante");
      dispatch(OnSetEstudents(data));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    //* PROPIEDADES
    estudiantes,

    //* METODOS
    startSetEstudents,
  };
};

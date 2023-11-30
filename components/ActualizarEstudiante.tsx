import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Checkbox,
  Input,
  Link,
  Button,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useForm } from "../src/SistemaEscolar/Hooks/useForm";
import { OnActiveStudent } from "../src/Store/Estudiantes/EstudianteSlice";
import { useDispatch } from "react-redux";
import { useSystemEstudiantes } from "../src/Hooks/useSystemEstudiantes";
import { useEffect } from "react";
const init = {
  Matricula: "1234",
  Nombre: "",
  Apellido: "",
  FechaNacimiento: "",
  Sexo: "",
  Edad: "",
  Estado: "",
};

export const ActualizarEstudiante = ({
  isOpen,
  openModal,
  closeModal,
  user,
}) => {
  const { startCreateStudent, EstudianteActive, startUpdateStudent } =
    useSystemEstudiantes();
  console.log(user);
  const [SexoUser, setSexoUser] = useState(EstudianteActive.Sexo);

  const dispatch = useDispatch();
  // const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const {
    formState,
    onInputChange,
    setFormState,
    Matricula,
    Nombre,
    Apellido,
    FechaNacimiento,
    Sexo,
    Edad,
    Estado,
  } = useForm(init);
  useEffect(() => {
    setSexoUser(EstudianteActive.Sexo || "");
  }, [EstudianteActive]);

  useEffect(() => {
    setFormState({
      Matricula: EstudianteActive?.Matricula,
      Nombre: EstudianteActive?.Nombre,
      Apellido: EstudianteActive?.Apellido,
      FechaNacimiento: EstudianteActive?.FechaNacimiento,
      Sexo: user?.Sexo,
      Edad: EstudianteActive?.Edad,
      Estado: user?.Estado,
    });
  }, [EstudianteActive]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Matricula");
    console.log(formState);
    startUpdateStudent(formState, EstudianteActive._id);

    //startCreateStudent(formState);
    closeModal();
    // dispatch(OnActiveStudent(formState));
  };

  return (
    <div>
      {" "}
      <Modal
        isOpen={isOpen}
        onOpenChange={openModal}
        placement="top-center"
        backdrop="blur"
        size={"full"}
        className="modal"
      >
        <form action="" onSubmit={handleSubmit}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Actualizar Estudiante
                </ModalHeader>
                <ModalBody>
                  <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                    <Input
                      type="text"
                      variant={"bordered"}
                      label="Matricula"
                      name="Matricula"
                      value={Matricula}
                      onChange={onInputChange}
                      size="lg"
                    />
                    <Input
                      type="name"
                      variant={"bordered"}
                      label="Nombre"
                      name="Nombre"
                      value={Nombre}
                      onChange={onInputChange}
                      size="lg"
                    />
                    <Input
                      type="text"
                      variant={"bordered"}
                      label="Apellido"
                      name="Apellido"
                      value={Apellido}
                      onChange={onInputChange}
                      size="lg"
                    />
                    <Input
                      type="date"
                      variant={"bordered"}
                      placeholder="none"
                      name="FechaNacimiento"
                      value={FechaNacimiento}
                      onChange={onInputChange}
                      label="Fecha de Nacimiento"
                      size="lg"
                    />
                    <Select
                      variant={"bordered"}
                      label="Sexo"
                      fullWidth
                      name="Sexo"
                      defaultSelectedKeys={[user.Sexo]}
                      value={Sexo}
                      onChange={onInputChange}
                      className="input-sex"
                    >
                      <SelectItem key={"Masculino"} value={"Masculino"}>
                        Masculino
                      </SelectItem>
                      <SelectItem key={"Femenino"} value={"Femenino"}>
                        Femenino
                      </SelectItem>
                    </Select>
                    <Input
                      type="text"
                      variant={"bordered"}
                      name="Edad"
                      value={Edad}
                      onChange={onInputChange}
                      label="Edad"
                      size="lg"
                    />
                    <Select
                      variant={"bordered"}
                      label="Estado de Inscripcion"
                      fullWidth
                      name="Estado"
                      value={Estado}
                      onChange={onInputChange}
                      defaultSelectedKeys={[user.Estado]}
                      className="input-sex"
                    >
                      <SelectItem key={"Inscrito"} value={"Inscrito"}>
                        Inscrito
                      </SelectItem>
                      <SelectItem key={"Desinscrito"} value={"Desinscrito"}>
                        Desinscrito
                      </SelectItem>
                      <SelectItem key={"Proceso"} value={"Proceso"}>
                        Proceso
                      </SelectItem>
                    </Select>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={closeModal}>
                    Cancelar
                  </Button>
                  <Button color="primary" type="submit">
                    Crear
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </form>
      </Modal>
    </div>
  );
};

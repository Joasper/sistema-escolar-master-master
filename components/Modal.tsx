import React from "react";
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
} from "@nextui-org/react";

export const ModalEstudiante = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div>
      {" "}
      <Button onPress={onOpen} color="primary">
        Agregar Estudiante
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        backdrop="blur"
        size={"full"}
        className="modal"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Agregar Estudiante
              </ModalHeader>
              <ModalBody>
                <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                  <Input
                    type="text"
                    variant={"bordered"}
                    label="Matricula"
                    size="lg"
                  />
                  <Input
                    type="name"
                    variant={"bordered"}
                    label="Nombre"
                    size="lg"
                  />
                  <Input
                    type="text"
                    variant={"bordered"}
                    label="Apellido"
                    size="lg"
                  />
                  <Input
                    type="text"
                    variant={"bordered"}
                    label="Fecha de Nacimiento"
                    size="lg"
                  />
                  <Input
                    type="text"
                    variant={"bordered"}
                    label="Sexo"
                    size="lg"
                  />
                  <Input
                    type="text"
                    variant={"bordered"}
                    label="Edad"
                    size="lg"
                  />
                </div>

                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

import { Switch } from "@nextui-org/react";
import React from "react";

interface ComponentProps {
  darkTheme: boolean;
  cambiarTema: () => void;
}

const TemaAplicacion = ({ darkTheme, cambiarTema }: ComponentProps) => {
  const [isSelected, setIsSelected] = React.useState(true);
  return (
    <div className="flex flex-col gap-2">
      <Switch isSelected={darkTheme} onValueChange={cambiarTema}></Switch>
    </div>
  );
};

export default TemaAplicacion;

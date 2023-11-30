import React from "react";
import { Menu } from "antd";
import { RxDashboard } from "react-icons/rx";
import { FcBusinessman } from "react-icons/fc";
import { MdOutlinePayments } from "react-icons/md";
import { Link } from "react-router-dom";

interface MenuListProps {
  darkTheme: boolean;
}

const MenuList = ({ darkTheme }: MenuListProps) => {
  return (
    <Menu
      theme={darkTheme ? "dark" : "light"}
      mode="inline"
      className="menu-bar"
      style={{
        height: "100vh",
        marginTop: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        fontSize: "1rem",
        position: "relative",
      }}
    >
      <Menu.Item key={"Inicio"} icon={<RxDashboard size="20px" />}>
        <Link to={"/"}> Inicio</Link>
      </Menu.Item>
      <Menu.Item key={"Estudiantes"} icon={<FcBusinessman size="20px" />}>
        <Link to={"/estudiantes"}> Estudiantes</Link>
      </Menu.Item>
      <Menu.Item key={"Tutores"} icon={<RxDashboard />}>
        Tutores
      </Menu.Item>
      <Menu.Item key={"Pagos"} icon={<MdOutlinePayments />}>
        Pagos
      </Menu.Item>
      <Menu.SubMenu
        key={"Configuracion"}
        icon={<MdOutlinePayments />}
        title="Configuracion"
      >
        <Menu.Item key={"Configuracion"} icon={<MdOutlinePayments />}>
          Configuracion
        </Menu.Item>
        <Menu.Item key={"Configuracion"} icon={<MdOutlinePayments />}>
          Configuracion
        </Menu.Item>
        <Menu.Item key={"Configuracion"} icon={<MdOutlinePayments />}>
          Configuracion
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

export default MenuList;

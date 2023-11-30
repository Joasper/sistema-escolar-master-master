"use client";
import React, { useState } from "react";
import { Layout, theme } from "antd";
import Logo from "./Logo";
import MenuList from "./MenuList";
import TemaAplicacion from "./TemaAplicacion";
import { Button } from "@nextui-org/button";
import { IoMdMenu } from "react-icons/io";
const { Header, Sider, Content } = Layout;

const SideBar = ({ children }: any) => {
  const [darkTheme, setdarkTheme] = useState(true);
  const [colapsar, setcolapsar] = useState(false);
  const cambiarTema = () => {
    setdarkTheme(!darkTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Layout>
        <Sider
          className="text-white w-10"
          theme={darkTheme ? "dark" : "light"}
          collapsed={colapsar}
          width={350}
        >
          <Logo />
          <MenuList darkTheme={darkTheme} />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100px",
            }}
          >
            <Button
              color="primary"
              variant="light"
              onClick={() => setcolapsar(!colapsar)}
            >
              {colapsar ? <IoMdMenu /> : <IoMdMenu />}{" "}
            </Button>
            <div className="">
              <TemaAplicacion darkTheme={darkTheme} cambiarTema={cambiarTema} />
            </div>
          </Header>
          <Layout
            style={{
              padding: "30px",
            }}
          >
            <Content
              style={{
                padding: 24,
                margin: 0,
                borderRadius: "20px",
                minHeight: 280,
                background: colorBgContainer,
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default SideBar;

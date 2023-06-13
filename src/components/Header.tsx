"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Container, Nav, Navbar } from "react-bootstrap";

import { MenuItems } from "@/interfaces/i-menu-items";
import ThemeSwitcher from "./ThemeSwitcher";
import IntlLink from "./IntlLink";
import LocaleSwitcher from "./LocaleSwitcher";

const Header = () => {
  const t = useTranslations("MenuCp");
  useEffect(() => {
    // let el = document.querySelector('.nav-link-wrap[data-rr-ui-event-key="' + pathname + '"]');
    // if (!el) throw Error("element is not assigned");
    // el.classList.add("active");
  }, []);

  const onNavbarSelect = (event: any) => {
    // let el = document.querySelector('.nav-link-wrap[data-rr-ui-event-key="' + pathname + '"]');
    // if (!el) throw Error("element is not assigned");
    // el.classList.remove("active");
  };

  return (
    <header>
      <Navbar collapseOnSelect expand="md">
        <Container fluid>
          <IntlLink className="navbar-brand" href="/">
            {t("logo")}
          </IntlLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav style={{ marginInlineEnd: "auto" }} onSelect={onNavbarSelect}>
              {MenuItems.map((item) => {
                return (
                  <Nav.Link key={item.id} as="div" bsPrefix="nav-link-wrap" eventKey={item.pathname}>
                    <IntlLink
                      className="nav-link"
                      href={{
                        pathname: item.pathname,
                        query: item.query,
                      }}
                    >
                      {t(item.title)}
                    </IntlLink>
                  </Nav.Link>
                );
              })}
            </Nav>
            <Nav className="align-items-center">
              <LocaleSwitcher />
              <ThemeSwitcher />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

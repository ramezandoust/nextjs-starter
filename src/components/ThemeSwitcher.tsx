"use client";

import { useEffect, useState } from "react";
import { Dropdown, NavDropdown, NavLink } from "react-bootstrap";
import { BsSunFill, BsFillMoonStarsFill, BsCircleHalf } from "react-icons/bs";

import { useAppContext } from "@/context/AppContext";

const ThemeSwitcher = () => {
  const { appState, appDispatch } = useAppContext();
  const [themeIcon, setThemeIcon] = useState<React.ReactNode>(<BsSunFill />);
  const themeValues = [
    { label: <BsSunFill />, value: "light" },
    { label: <BsFillMoonStarsFill />, value: "dark" },
    { label: <BsCircleHalf />, value: "auto" },
  ];

  useEffect(() => {
    themeValues.forEach((element) => {
      if (element.value === appState.theme) return setThemeIcon(element.label);
    });
  }, [appState.theme]);

  const handleThemeChange = (eventKey: string | null) => {
    appDispatch({
      type: "SET_THEME",
      payload: eventKey,
    });
  };

  return (
    <Dropdown onSelect={handleThemeChange} align={{ lg: "end" }} style={{ cursor: "pointer" }}>
      <Dropdown.Toggle as={"div"} role="group">
        {themeIcon}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {themeValues.map((item) => (
          <Dropdown.Item as="div" key={item.value} eventKey={item.value} className="d-flex align-items-center gap-2 ">
            {item.label}
            <span>{item.value}</span>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ThemeSwitcher;

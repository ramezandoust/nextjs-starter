interface IMenuItems {
  id: number;
  title: string;
  pathname: string;
  query?: string;
}
export const MenuItems: IMenuItems[] = [
  { id: 1, title: "home", pathname: "/" },
  { id: 2, title: "about", pathname: "/about" },
];

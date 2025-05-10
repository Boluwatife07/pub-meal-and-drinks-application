export type MenuItem = {
  id: string;
  name: string;
  type: string;
  image: string;
};

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Afang Stew",
    type: "Stew",
    image: "/afang.jpg",
  },
  {
    id: "2",
    name: "Banga Stew",
    type: "Stew",
    image: "/banga.jpg",
  },
];

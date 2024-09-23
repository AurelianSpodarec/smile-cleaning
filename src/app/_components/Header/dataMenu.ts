export interface IMenuItem {
  name: string;
  url: string;
  isActive?: boolean;
}

const dataMenu: IMenuItem[] = [
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "Blog",
    url: "/blog"
  },
  {
    name: "Pricing",
    url: "#pricing",
  },
  {
    name: "Support",
    url: "/support",
  },
]

export default dataMenu;

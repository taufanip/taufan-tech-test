import * as Icons from "../icons";

export const NAV_DATA = [
  {
    label: "MAIN MENU",
    items: [
      {
        title: "Dashboard",
        url: "/tables",
        icon: Icons.Table,
        items: [
          {
            title: "Admin",
            url: "/tables",
          },
          {
            title: "Employees",
            url: "/tables",
          },
          {
            title: "Employee Leaves",
            url: "/tables",
          },
        ],
      }
    ],
  }
];

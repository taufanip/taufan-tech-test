import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css"
import {
  MdDashboard,
  MdAdminPanelSettings,
  MdPeople,
  MdLogout
 } from "react-icons/md";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard/>
      },
      {
        title: "Admin",
        path: "/dashboard/admin",
        icon: <MdAdminPanelSettings/>
      },
      {
        title: "Employee",
        path: "/dashboard/employee",
        icon: <MdPeople/>
      },
    ]
  }
]

const Sidebar = () => {
  return(
    <div className={styles.container}>
      <div className={styles.userAdmin}>
        <img className={styles.userImage} src="/admin.svg" alt="" width="50" height="50"/>
        <div className={styles.userDetail}>
          <span className={styles.username}>Super Admin</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
      {
      menuItems.map(cat=>(
        <li key={cat.title}>
          <span className={styles.cat}>{cat.title}</span>
          {cat.list.map(item=>(
            <MenuLink item={item} key={item.title}/>
          ))}
        </li>
      ))}
      </ul>
      <button className={styles.logout}>
        <MdLogout />
        Logout
      </button>
    </div>
  )
}

export default Sidebar
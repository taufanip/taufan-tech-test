"use client"
import styles from "@/app/ui/dashboard/admin/admin.module.css"
import Search from "../../ui/dashboard/search/search"
import Link from 'next/link'
import { useEffect, useState } from 'react'
// import axios from 'axios';

const AdminPage = () => {
  const [data, setData] = useState(null);

      useEffect(() => {
        async function fetchData() {
          const res = await fetch('http://localhost:8000/admin'); // Adjust port and endpoint
          const fetchedData = await res.json();
          setData(fetchedData);
        }
        fetchData();
      }, []);

  // return(
  //   <div className={styles.container}>
  //     <div className={styles.top}>
  //       <Search placeholder="Search for user admin" />
  //       <Link href="/dashboard/admin/add">
  //         <button className={styles.addButton}>Add New</button>
  //       </Link>
  //       </div>
  //     <table className={styles.table}>
  //       <thead>
  //         <tr>
  //           <td>Fullname</td>
  //           <td>Email</td>
  //           <td>Birthdate</td>
  //           <td>Gender</td>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         <tr>
  //           <td>Ini Fullname</td>
  //           <td>Ini Email</td>
  //           <td>Ini Birthdate</td>
  //           <td>ini Gender</td>
  //           <td>
  //             <div className={styles.buttons}>
  //               <Link href="/">
  //                 <button className={`${styles.button} ${styles.view}`}>
  //                   View
  //                 </button>
  //               </Link>
  //                 <button className={`${styles.button} ${styles.delete}`}>
  //                   Delete
  //                 </button>
  //               </div>
  //           </td>
  //         </tr>
  //       </tbody>
  //     </table>
  //   </div>
  // )

   return (
        <div>
          {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
        </div>
      );
}

export default AdminPage
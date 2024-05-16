import { Link } from "react-router-dom"
import "./AdminNavbar.scss"

function AdminNavbar() {
  return (
    <div className="adminnavbar">
      <ul>
        <li><Link to={"/adminlayout"}>AdminPanel</Link></li>
        <li><Link to={"/adminlayout/add"}>Add</Link></li>
      </ul>
    </div>
  )
}

export default AdminNavbar
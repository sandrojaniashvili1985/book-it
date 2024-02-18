import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { ReactQueryDevtools } from 'react-query/devtools'


function Layout() {
  return (<nav>
    <NavBar />
    <Outlet />
    <footer>
      <hr />
      Footer
      <ReactQueryDevtools />
    </footer>
  </nav>);
}

export default Layout;
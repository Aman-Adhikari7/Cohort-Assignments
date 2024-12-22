
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
       < nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/form-fillup">Form fillup</Link></li>
        </ul>
      </nav>

      <Outlet />

{/* Footer */}
<footer>
  <p>Footer content here</p>
</footer>
        
        

    </div>
  );
};

export default Layout;
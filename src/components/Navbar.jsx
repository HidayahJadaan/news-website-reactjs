
const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">

        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">
            NewsMag
          </span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end bg-dark text-white"
          tabIndex="-1"
          id="navbarNav"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Menu</h5>

            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav ms-auto">
              

              <li className="nav-item">
                <div className="nav-link" onClick={()=>setCategory("technology")}>Technology</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={()=>setCategory("business")}>Business</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={()=>setCategory("health")}>Health</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={()=>setCategory("sports")}>Sports</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={()=>setCategory("entertainment")}>Entertiment</div>
              </li>

             
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;


export default function Navbar() {
  return (
      <div className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="logo">
              <a href="index.html">
                <img src="images/logo.png" alt="Logo da Empresa" />
              </a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul margin-left="0px" className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    Sobre Nós
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#catalogo">
                    Catálogo
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contato">
                    Contato
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="news.html">
                    News
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      
      </div>

              
  )
} 

import { NavLink } from "react-router-dom"


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Convertidor de Archivo</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')} to='/descuentos'>Descuentos</NavLink>
                        <NavLink className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')} to='/rechazos'>Rechazados</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

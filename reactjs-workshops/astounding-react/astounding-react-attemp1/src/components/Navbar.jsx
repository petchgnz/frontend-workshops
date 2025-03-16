import './Navbar.css'

function Navbar() {
    return(
        <div className="navbar">
            <div className="container">
                <div className="navbar-grid">
                    <div className="navbar-logo">
                        <h2>Astounding</h2>
                        <p>Free PSD Website Templates</p>
                    </div>

                    <ul className="navbar-menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Styledemo</a></li>
                        <li><a href="#">Full Width</a></li>
                        <li><a href="#">Dropdown</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Gallery</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
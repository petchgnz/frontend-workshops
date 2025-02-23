import './Navbar.css'

const Navbar = () => {
    return(
        <div className="header">
            <div className="container">
                <div className="header-grid">
                    <div className="header-logo">
                        <h2>Astounding</h2>
                        <p>Free PSD Website Templates</p>
                    </div>

                    <ul className="header-menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Styledemo</a></li>
                        <li><a href="#">Full width</a></li>
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
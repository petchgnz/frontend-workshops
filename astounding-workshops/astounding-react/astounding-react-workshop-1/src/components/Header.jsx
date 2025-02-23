import "./Header.css"

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header-grid">
          <div className="logo">
            <h1>Astounding</h1>
            <p>Free PSD Website Templates</p>
          </div>

          <ul className="menu">
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
export default Header

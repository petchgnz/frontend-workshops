import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-grid-items">
            <h2>From the Blog</h2>
            <h3>Post Title</h3>
            <p><a href="#">Admin,</a> domainname.com</p>
            <span className="dates">Wednesday, 5th March</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus neque voluptas reiciendis est ullam sunt tenetur voluptatum rem odit architecto.</p>
            <a href="#" className="read-more">Read More </a>
          </div>

          <div className="footer-grid-items">
           <h2>Quick Links</h2> 
           <ul className="links">
            <li><a href="#">Lorem ipsum dolor sit amet.</a></li>
            <li><a href="#">Lorem ipsum dolor sit amet.</a></li>
            <li><a href="#">Lorem ipsum dolor sit amet.</a></li>
            <li><a href="#">Lorem ipsum dolor sit amet.</a></li>
            <li><a href="#">Lorem ipsum dolor sit amet.</a></li>
            <li><a href="#">Lorem ipsum dolor sit amet.</a></li>
            <li><a href="#">Lorem ipsum dolor sit amet.</a></li>
            <li><a href="#">Lorem ipsum dolor sit amet.</a></li>
           </ul>
          </div>
          
          <div className="footer-grid-items">
           <h2>Lastest Tweets</h2> 
           <p><a href="#">@namehere</a> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste laborum debitis minima maxime! Modi molestias a quod perferendis, eos provident cupiditate numquam aspernatur soluta nulla.</p>
           <p><a href="#">@namehere</a> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste laborum debitis minima maxime! Modi molestias a quod perferendis, eos provident cupiditate numquam aspernatur soluta nulla.</p>
          </div>

          <div className="footer-grid-items">
            <h2>Contact Us</h2>
            <form action="">
              <input type="text" name="fullName" id="fullName" placeholder="Full Name" />
              <input type="email" name="email" id="email" placeholder="Email Address" />
              <input type="text" name="subject" id="subject" placeholder="Subject" />
              <textarea name="message" id="message" placeholder="Message" />
              <button type="submit" id="submitButton">Submit</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Footer;

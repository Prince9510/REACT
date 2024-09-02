import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="main">
          <div className="main1">
            <a href="">Agency</a>
          </div>
          <div className="main2">
            <a href="">What we Do?</a>
          </div>
        </div>

        <header>
          <nav className="nav1">
            <img src="/logo.png" alt="" />
          </nav>
          <nav className="nav2">
            <ul>
              <li>home</li>
              <li>about</li>
              <li>services</li>
              <li>pages</li>
              <li>mega</li>
              <li>contact</li>
            </ul>
          </nav>
          <nav className="nav3">
            <div className="nav-circle"><i className="fa-brands fa-facebook-f"></i></div>
            <div className="nav-circle"><i className="fa-solid fa-earth-americas"></i></div>
            <div className="nav-circle"><i className="fa-brands fa-flickr"></i></div>
            <div className="nav-circle"><i className="fa-brands fa-instagram"></i></div>
            <div className="nav-circle"><i className="fa-brands fa-linkedin-in"></i></div>
            <div className="nav-circle"><i className="fa-brands fa-pinterest-p"></i></div>
          </nav>
        </header>

        <div className="input-main">
          <h4>Stay in touch with us</h4>
          <input type="email" placeholder="Email Address..." />
          <button>VIEW PROJECT</button>
        </div>

        {/* Removed the comment block and added closing braces for render method */}

        <div className="made">
          <h6>Made By Pixel</h6>
          <img src="https://preview.colorlib.com/theme/pixel/img/core-img/x.png" alt="" />
        </div>

        <div className="btn-main">
          <div className="btn" id="btn1">All Projects</div>
          <div className="btn" id="btn2">Visual</div>
          <div className="btn" id="btn3">Advertising</div>
          <div className="btn" id="btn4">Web Development</div>
        </div>

        <div className="pinepal">
          <div className="pi animate__animated animate__zoomInDown" id="pi1" style={{ backgroundImage: 'url(5.jpg)' }}>
            <div className="pi-in" id="pi-in1"><i className="fa-regular fa-eye"></i> <br /> <h2>Branding Identity</h2></div>
          </div>
          <div className="pi animate__animated animate__zoomInDown" id="pi2" style={{ backgroundImage: 'url(6.jpg)' }}>
            <div className="pi-in" id="pi-in2"><i className="fa-regular fa-eye"></i> <br /> <h2>Branding Identity</h2></div>
          </div>
          <div className="pi animate__animated animate__zoomInDown" id="pi3" style={{ backgroundImage: 'url(7.jpg)' }}>
            <div className="pi-in" id="pi-in3"><i className="fa-regular fa-eye"></i> <br /> <h2>Branding Identity</h2></div>
          </div>
        </div>

        <center>
          <div className="made">
            <h6>Get In Touch</h6>
            <img src="https://preview.colorlib.com/theme/pixel/img/core-img/x.png" alt="" />
          </div>
        </center>

        <center>
          <div className="input-box">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="E-mail" />
            <input type="text" placeholder="Subject" />
            <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
          </div>

          <button className="bahir-btn">
            SEND MESSAGE
          </button>
        </center>

        <br /><br /><br />

        <footer>
          <div className="fot" id="fot1">
            <img src="https://preview.colorlib.com/theme/pixel/img/core-img/logo.png" alt="" />
          </div>
          <div className="fot" id="fot2">
            <h4>Services</h4>
            <br />
            <ul>
              <li>Drone Mapping</li>
              <li>Real State</li>
              <li>Commercial</li>
              <li>Construction</li>
            </ul>
          </div>
          <div className="fot" id="fot3">
            <h4>Support</h4>
            <br />
            <ul>
              <li>Drone Mapping</li>
              <li>Real State</li>
              <li>Commercial</li>
              <li>Construction</li>
            </ul>
          </div>
          <div className="fot" id="fot4">
            <h4>Contact Us</h4>
            <br />
            <ul>
              <li>Drone Mapping</li>
              <li>Contact@gmail.com</li>
              <li>Contact</li>
              <li>10 (87) 789-5412</li>
            </ul>
          </div>

          <button id="topBtn">Top</button>
        </footer>
      </div>
    );
  }
}

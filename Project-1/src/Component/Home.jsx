import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
            <div class="main">
            <div class="main1">
                <a href="">Agency</a>
            </div>
            <div class="main2">
                <a href="">What we Do?</a>
            </div>
        </div>
        

        <header>
            <nav class="nav1">
                <img src="/logo.png" alt=""/>
            </nav>
            <nav class="nav2">
                <ul>
                    <li>home</li>
                    <li>about</li>
                    <li>services</li>
                    <li>pages</li>
                    <li>mega</li>
                    <li>contact</li>
                </ul>
            </nav>
            <nav class="nav3">
                <div class="nav-circle"><i class="fa-brands fa-facebook-f"></i></div>
                <div class="nav-circle"><i class="fa-solid fa-earth-americas"></i></div>
                <div class="nav-circle"><i class="fa-brands fa-flickr"></i></div>
                <div class="nav-circle"><i class="fa-brands fa-instagram"></i></div>
                <div class="nav-circle"><i class="fa-brands fa-linkedin-in"></i></div>
                <div class="nav-circle"><i class="fa-brands fa-pinterest-p"></i></div>
            </nav>
        </header>



        <div class="input-main">
            <h4>
                Stay in touch with us
            </h4>

            <input type="email" placeholder="Email Address..."/>
            <button>VIEW PROJECT</button>
        </div>
      </div>
    )
  }
}

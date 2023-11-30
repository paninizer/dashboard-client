import React from 'react';
import {Button} from '@chakra-ui/react'

export function LandingPage(props) {

  const [pos, setPos] = React.useState(false);
  
  const login = () => window.location.href = "https://dashboard-blucher.panzer-chan.repl.co/api/auth/discord/redirect";
  
  return (
    <div>
<section className="header">
    <nav>
      <a href="#top">
        <img src="https://azurlane.netojuu.com/images/d/df/Bl%C3%BCcherShipyardIcon.png"></img>
      </a>
      <div className="nav-links" id="navLinks" style={{right: pos ? 0 : -200}}>
        <i className="fa fa-times" onClick={() => setPos(false)}></i>
        <ul>
          <li><a href="#top">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#support">SUPPORT</a></li>
          <li><a href="#donate">DONATE</a></li>
          <li><a href="https://github.com/panzer-chan/Blucher">GITHUB REPO</a></li>
          <li><a href="https://blucher-docs.panzer-chan.repl.co">DOCUMENTATION</a></li>
          <li><Button colorScheme='blue' onClick={login}>Login</Button></li>
        </ul>
      </div>
      <i className="fa fa-bars" onClick={() => setPos(true)}></i>
    </nav>
    <div className="text-box">
      <h1>A Discord Bot with a PERSONALITY</h1>
      <p>Blücher is powered with a powerful AI, making her a chat bot with a personality. <br></br>Customizable to your
        every need, she's the perfect solution for any server.</p>
      <a href="https://discord.com/api/oauth2/authorize?client_id=854776549260394526&permissions=8&scope=bot%20applications.commands"
        className="support-btn">Invite the Bot</a>
    </div>
  </section>

  <section className="about" id="about">
    <h1>About Blücher</h1>
    <p>Blücher is a multipurpose bot that went through a lot to become what she is now. Started out from a pet project,
      the source code quickly expanded and her functions multiplied. She now is a full fledged Discord bot that has
      commands of all categories, which will suit your server perfectly. Also, she's sharded already, so there would be
      next to no delay between commands. We will be transfering more of her commands to be slash commands in the future,
      so stay tuned!</p>

    <div className="row1">
      <div className="func-col">
        <h3>Moderation</h3>
        <p>Blücher has a robust collection of moderation commands that is supported by MongoDB database to provide 24/7
          surveillance and surgical response to any violation of automod. Just like the ship, this bot has a lot of
          weapons at her and your disposal.</p>
      </div>
      <div className="func-col">
        <h3>VC</h3>
        <p>Using Lavalink, Blücher can play a wide variety of music from a wide variety of sources, so there's no
          worries of not finding your favourite song!</p>
      </div>
      <div className="func-col">
        <h3>Fun</h3>
        <p>Compete levels with your friends in chat? Or play minigames with the bot? No problem. Blücher has a huge
          selection of fun commands to keep you entertained!</p>
      </div>
    </div>
    <div className="row2">
      <div className="func-col">
        <h3>AI Chat</h3>
        <p>Blücher has a personality which you can chat to every day! Powered by <a
            href="https://brainshop.ai/">Brainshop</a>, you can pass your time chatting with this wonderful AI!</p>
      </div>
      <div className="func-col">
        <h3>Customization</h3>
        <p>Blücher can be customized to do a wide variety of duties, such as automod, AI chat, antinuke, etc. Your
          server will feel ever more welcoming after you setup the bot in your server!</p>
      </div>
      <div className="func-col">
        <h3>Ease of Use</h3>
        <p>Simple graphic interfaces using Discord's buttons and select menus make navigation of Blücher ever easier.
          You wouldn't feel lost while using this bot!</p>
      </div>
    </div>

  </section>

  <section className="support" id="support">
    <h1>Are You Encountering Bugs?</h1>
    <p>Maybe the bot is having a bad day, or you are confused on how to use it. We can help.<br></br> Join the support
      Discord server now and open a ticket to get your questions answered!</p>

    <div className="row">
      <a href="https://blucher-docs.panzer-chan.repl.co">
        <div className="device">
          <img src="eduford_img/london.png"></img>
          <div className="layer">
            <h3>DOCS</h3>
          </div>
        </div>
      </a>
      <a href="https://discord.gg/azurlane">
        <div className="device">
          <img src="eduford_img/newyork.png"></img>
          <div className="layer">
            <h3>DISCORD</h3>
          </div>
        </div>
      </a>
      <a href="https://discord.js.org/#/docs/discord.js/v13/general/welcome">
        <div className="device">
          <img src="eduford_img/washington.png"></img>
          <div className="layer">
            <h3>INFO</h3>
          </div>
        </div>
      </a>
    </div>
  </section>

  <section className="donate" id="donate">
    <h1>Donate to Us</h1>
    <p>Blücher is a free-to-use bot,<br></br>and we'd like to keep it that way!<br></br>Donations help us a lot to<br></br>maintain our
      codebase and database.</p>
    <a href="" className="support-btn">DONATE NOW</a>
  </section>

  <section className="footer">
    <h4>About Us</h4>
    <p>Blücher is a free-to-use Discord bot featuring<br></br>over 400 commands of all categories. <br></br>Courtesy of developer
      Panzer Chan, it's now free!</p>
    <div className="icons">
      <i className="fa fa-desktop"></i>
      <i className="fa fa-linux"></i>
      <i className="fa fa-apple"></i>
      <i className="fa fa-android"></i>
    </div>
    <p>Made with <i className="fa fa-heart-o"></i> by Panzer Chan</p>
  </section>    
    </div>
  )
}
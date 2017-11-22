import React, { Component } from 'react';

import Config from 'Config';

import CampusMapsImg from 'img/campus-maps/campus-maps-icon.svg';

import Icon from '../components/common/Icon';
import SocialLinks from '../components/common/SocialLinks';
import Square from '../components/common/Square';


export default class IndexPage extends Component {

  openChat = () => {
    window.open(Config.chat_url, 'newwindow', 'width=500, height=600'); return false;
  }

  render() {
    return (
      <div className="home">
        <button
          className="btn btn-primary btn-action btn-lg tooltip tooltip-left circle"
          data-tooltip="Talk to me right meow"
          onClick={this.openChat}
        >
          <Icon name="social-facebook-messenger" size={1.5} />
        </button>
        <header className="splash">
          <div className="hero">
            <div>
              <h1>
                <small>Hello! I&apos;m </small><br />
                <big>Brynn<br />Hawker</big><br />
                <small>an artist / designer</small>
              </h1>
              <SocialLinks links={Config.social_links} linkClass={['btn', 'btn-link', 'btn-lg', 'tooltip-bottom']} />
            </div>
          </div>
        </header>
        <main className="container grid-720 projects">
          <div className="columns">
            <div className="column col-6 col-md-12">
              <Square title="Campus Maps" subtitle="UX Design / Digital Illustration" image={CampusMapsImg} />
            </div>
            <div className="column col-6 col-md-12">
              <Square title="Campus Maps" subtitle="UX Design / Digital Illustration" image={CampusMapsImg} />
            </div>
          </div>
        </main>
      </div>
    );
  }
}


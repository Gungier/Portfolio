import React, { Component } from 'react'

export default class About extends Component 
{
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I'm a father, husband and son.  I also dabble in photography, painting and crafting.  I'm a huge superhero nerd and proud of it.  I've traveled to many parts of the world and look forward to experiences more of this strange and amazing place that we all share as a home.</p>                    <p>I have descovered joy and excitment through the practice and learning of developing softwares and technologies and feel an insatiable thirst to create more and learn more.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-6 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-monitor" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have experience building websites and chrome extentions using JavaScript, React, NodeJS, Express, MySQL, Postman, JQuery, Handlebars, PHP, CLI, Heroku, GIT and HTML/CSSS</p>
                </div>
                </div>
            </div>
            <div className="col-md-6 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>I have fundamental grasp of algorithms and basic concepts of DSA</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}

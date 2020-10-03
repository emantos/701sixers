import React, {Component} from 'react';
import { connect } from 'react-redux';
import {PropTypes} from 'prop-types';
// import Hero from '../containers/Hero';
import { selectRoot } from "react-formio";

const Home = class extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  render() {
    const {auth} = this.props;
    return (
      <div>
				<section id="banner" data-video="images/banner">
					<div className="inner">
						<header>
							<h1>Full Motion</h1>
							<p>A responsive video gallery template with a functional lightbox<br />
							designed by <a href="https://templated.co/">Templated</a> and released under the Creative Commons License.</p>
						</header>
						<a href="#main" class="more">Learn More</a>
					</div>
				</section>

        {/* <Hero /> */}
        <div className="container">
          { auth.authenticated ? (
            <div className="well text-center">
              { (auth.user && auth.user.data) ?
                (
                  <h3>
                    You are logged in as&nbsp;
                    <strong>{ auth.user.data.email }</strong>
                    !
                  </h3>
                ) : null
              }
            </div>) :
            null
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: selectRoot('auth', state)
  }
}

const mapDispatchToProps = () => {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';

function Home({ history }) {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Footer history={ history } />
      </div>
    </>
  );
}

Home.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Home;

import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const bgcolor = 'red';

const c = 'white';

function Treasure({ title, name }) {
  return (
    <>
      <h1 style={{ backgroundColor: bgcolor, color: c }}>{title}</h1>
      <h2>{name}</h2>
    </>
  );
}

Treasure.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

Treasure.defaultProps = {
  name: 'N/A',
};

export default Treasure;

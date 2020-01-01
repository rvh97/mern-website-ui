import React from 'react';

function Header() {
  return (
    <div style={headerStyle}>
      <h1>Name</h1>
    </div>

  )
}

const headerStyle = {
  color: 'white',
  textAlign: 'center',
  padding: '10px'
}

export default Header;
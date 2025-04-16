/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import Button from '../elements/Button';

export default function BrandIcon() {
  return (
    <Button
      className=""
      type="link"
      href="/"
    >
     <p style={{ color: 'navy', fontSize: '2.25rem', fontWeight: '500' }}>
  Arki
  <span style={{ color: 'grey' }}>Cool</span>
</p>

    </Button>
  );
}

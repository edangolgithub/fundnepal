import React, { Component } from 'react';
import { FacebookProvider, Like } from 'react-facebook';

export default class Example extends Component {
  render() {
    return (
      <div>
        <FacebookProvider appId="1335551736807271">
          <Like href="http://localhost:3000" colorScheme="dark" showFaces share />
        </FacebookProvider>
        <FacebookProvider appId="1335551736807271">
          <Like href="https://www.facebook.com/Fundnepal-103255155128343" colorScheme="dark" showFaces share />
        </FacebookProvider>
      </div>
    );
  }
}
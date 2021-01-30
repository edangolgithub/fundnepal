import React, { Component} from 'react';
import { FacebookProvider, Like } from 'react-facebook';
 
export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="1335551736807271">
        <Like href="http://localhost:3000" colorScheme="dark" showFaces share />
      </FacebookProvider>
    );
  }
}
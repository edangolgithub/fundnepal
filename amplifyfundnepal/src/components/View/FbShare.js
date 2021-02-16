import React, { Component} from 'react';
import { FacebookProvider, ShareButton } from 'react-facebook';
 
export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="1335551736807271">
        {/* <ShareButton href="https://amplify.dmouex6ipyl87.amplifyapp.com/#/">
          Share
        </ShareButton> */}
        <ShareButton href="http://localhost">
          Share
        </ShareButton>
      </FacebookProvider>
    );
  }
}
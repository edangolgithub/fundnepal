import React from 'react';
import { css } from "@emotion/core";
// import * as loader from "react-spinners";
import BeatLoader from "react-spinners/BeatLoader";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  color:blue;
  text-align:center;
  margin-top:-10px;
`;
const color='red';
const loading=true;
    const Loader = () => (
        <div>
        <BeatLoader color={color} loading={loading} css={override}  />
        </div>
    );  
    export default Loader;
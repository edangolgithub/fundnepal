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
// "react-bootstrap-table-next": "^4.0.3",
//     "react-bootstrap-table2-editor": "^1.4.0",
//     "react-bootstrap-table2-paginator": "^2.1.2",
// "react-facebook": "^8.1.4",
// "@testing-library/jest-dom": "^5.11.9",
// "@testing-library/react": "^11.2.5",
// "@testing-library/user-event": "^12.7.1",

const color='red';
const loading=true;
    const Loader = () => (
      <div style={{minHeight:"700px",marginTop:"300px"}}>
        <BeatLoader color={color} loading={loading} css={override}  />
        </div>
    );  
    export default Loader;
import React from 'react';
import { css } from "@emotion/core";
// import * as loader from "react-spinners";
import ClockLoader from "react-spinners/ClockLoader";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  color:blue;
  text-align:center;
  margin-top:-10px;
`;
const color='white';
const loading=true;
    const Loader = () => (
      <ClockLoader color={color} loading={loading} css={override}  />
    );  
    export default Loader;


        // <loader.ClipLoader color={color} loading={loading} css={override} size={150} />
        // <loader.BeatLoader color={color} loading={loading} css={override} size={150} />
        // <loader.BarLoader color={color} loading={loading} css={override} size={150} />
        // <loader.ClimbingBoxLoader color={color} loading={loading} css={override} size={150} />        
        // <loader.DotLoader color={color} loading={loading} css={override} size={150} />
        // <loader.HashLoader color={color} loading={loading} css={override} size={150} />
        // <loader.MoonLoader color={color} loading={loading} css={override} size={150} />
        // <loader.PacmanLoader color={color} loading={loading} css={override} size={150} />
        // <loader.PropagateLoader color={color} loading={loading} css={override} size={150} />
        // <loader.PuffLoader color={color} loading={loading} css={override} size={150} />
        // <loader.PulseLoader color={color} loading={loading} css={override} size={150} /> 
      
      
    


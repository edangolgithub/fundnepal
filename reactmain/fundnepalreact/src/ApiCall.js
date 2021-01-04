import React from 'react'

const ApiCall = () => {
   
function sayHello() {
    alert('Hello, World!');
  }
  function callapi()
  {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res=>  console.log(res.json())).then(alert("ok"));
      
  }
  function callapi1()
  {
      fetch('https://qhgl3qjiq8.execute-api.us-east-1.amazonaws.com/prod/helloworld')
      .then(res=>  console.log(res.json())).then(alert("ok"));
      
  }
  return (
    <button onClick={callapi1}>Click me!</button>
  );
};

export default ApiCall; 
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
    useEffect(() => {

      const partner = "partner_id";

      /*
      const ext_user_id = "<user-id>";

      const body = {is_new:false, username: "<user-id>"};

          use this api in your backend and get user token then send it to your frontend.
        const res  =  axios.post(`https://partner-api.theflyy.com/v1/${partner}/user/${ext_user_id}/user_token`, body);
      
        console.log(res);
      */
      
      const script = document.createElement("script");    
   
      script.src = "https://ghc.theflyy.com/assets/flyy-web-sdk-package/v1.0.6/flyy-sdk.js";
      //script.async = true;

      document.body.appendChild(script);

      const sc2  = document.createElement("script");
      sc2.async = true;
      sc2.innerHTML = `(function () {
        var data = {
          package_name: "com.theflyy.demo.demotester1",
          partner_id: "${partner}",
          ext_user_token: "token_from_api",
	  environment: "STAGE"
        };
        var flyySDK = new FlyySDK();
	flyySDK.startReferralTracking();
	      flyySDK.initSDK(JSON.stringify(data));
      })();


function myFunction() {
        if (window.webkit) {
                window.webkit.messageHandlers.handleMessage.postMessage({ action: "go-back" });
        } else {

        }
}`;
   
      
      document.body.appendChild(sc2);
    });

  return (
    <div className="App">      

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

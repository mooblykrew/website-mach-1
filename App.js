import React from 'react';
import logo from './scove.jpg';
import pic from './booply.jpg'; 
import './App.css';
import music from './aint-nothing.mp3';



function App() {
  return (
		    
    <div className="App">
      <header className="App-header">
        <p>
          MOOBLY KREW.
        </p>
          
      </header>
          
      <body className="App-body">
	      
	      <img src={pic} className="App-background" alt="pic" />
      </body>
      
      <footer className="App-footer">
	      <a
	    	className="App-link"
	    	href="https://www.youtube.com/channel/UCHKd9I_EdaEa0sJTJwQW9dw"
	 		target="_blank"
	 		rel="noopener noreferrer"
	 		>
	    	YouTube
		</a>
	    <p> 
	    	&nbsp;
	    </p>
	    <a
	    	className="App-link"
	    	href="https://facebook.com/mooblykrew"
	 		target="_blank"
	 		rel="noopener noreferrer"
	 		>
	    		Facebook
		</a>
		<p> 
    		&nbsp;
    	</p>
    	<a
	    	className="App-link"
	    	href="https://instagram.com/mooblykrew"
	 		target="_blank"
	 		rel="noopener noreferrer"
	 		>
	    		Instagram 
    	</a>
	    		<p> 
		    	&nbsp;
		    </p>
		    <a
		    	className="App-link"
		    	href="https://twitter.com/mooblykrew"
		 		target="_blank"
		 		rel="noopener noreferrer"
		 		>
		    		Twitter
			</a>
		    		
			    		<p> 
				    	&nbsp;
				    </p>
				    <a
				    	className="App-link"
				    	href="https://www.tiktok.com/@mooblykrew"
				 		target="_blank"
				 		rel="noopener noreferrer"
				 		>
				    		TikTok
					</a>
				    		<p> 
					    	&nbsp;
					    </p>
					    <a
					    	className="App-link"
					    	href="https://www.linkedin.com/company/mooblykrew"
					 		target="_blank"
					 		rel="noopener noreferrer"
					 		>
					    		LinkedIn
						</a>
				    		<p> 
					    	&nbsp;
					    </p>
					    <a
					    	className="App-link"
					    	href="https://open.spotify.com/playlist/6MBhhsOaYqKeCmLdNgckfi?si=mCKPw2R9QWOCbrRv2bhMgQ"
					 		target="_blank"
					 		rel="noopener noreferrer"
					 		>
					    		Spotify
						</a>
					    		
      	<p>

      		&nbsp;
      		&nbsp;
      		&nbsp;
      		&nbsp;
      		© Moobly Krew, LLC 2020
      	</p>
  
      </footer>    
    </div>
  );
}


export default App;
import React from 'react';

function Subscribe() {
 return (
   <div className="subscribe-section">
     <div className="subscribe-column-left">
       <h2>Subscribe to Weekly All-Church Updates</h2>
       <p>
         Newbreak Church partners with you and your family. Every week we send out an email providing helpful links to the week's content, guides for kids and students so they can follow along at home, as well as updated news and information that are important to Newbreak Church as a whole and specific to our campuses across San Diego County.
       </p>
     </div>
     <div className="subscribe-column-right">
       <h3>Stay Connected</h3>
       <form>
         <div>
           <input className='subscribe-input' type="text" id="name" placeholder='Name' />
         </div>
         <div>
           <input className='subscribe-input' type="email" id="email" placeholder='Email'/>
         </div>
         <div>
          <button className='subscribe-btn' type="submit">Subscribe</button>
         </div>
       </form>
     </div>
   </div>
 );
}

export default Subscribe;

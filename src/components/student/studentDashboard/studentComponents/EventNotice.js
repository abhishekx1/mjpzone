import React, { useState } from 'react';
import './studentComponentCss/Event-Notice.css';

function EventNotice() {
    var c=1;
    return (
      <div className="event-notices">
          <h1 id="event_title">Upcoming Events</h1>
          <div className="event-notice" >
            
            <a >{c++}- Join us for our next event on May 15th at 6pm. The event will be held at the XYZ Convention Center. See you there!</a>
            <br/>
            <a >{c++}- Join us for our next event on May 15th at 6pm. The event will be held at the XYZ Convention Center. See you there!</a>
            <br/>
            <a >{c++}- Join us for our next event on May 15th at 6pm. The event will be held at the XYZ Convention Center. See you there!</a>
            <br/>
            <a >{c++}- Join us for our next event on May 15th at 6pm. The event will be held at the XYZ Convention Center. See you there!</a>
            <br/>
            <a >{c++}- Join us for our next event on May 15th at 6pm. The event will be held at the XYZ Convention Center. See you there!</a>
          </div>
        
      </div>
    );
}

export default EventNotice;
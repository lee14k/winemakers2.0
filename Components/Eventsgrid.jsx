import { useState } from "react";
import Eventspageevent from "./Eventspagevent";

export default function Eventsgrid({ events }) {
  const [flipStates, setFlipStates] = useState(
    new Array(events.length).fill(false)
  );

  const handleFlip = (index) => {
    const newFlipStates = [...flipStates];
    newFlipStates[index] = !newFlipStates[index];
    setFlipStates(newFlipStates);
  };


  return (
    
    <div className="gridwrapper front">
      {events.map((event, index) => (
        <div
          onClick={() => handleFlip(index)}
          className={`griditem ${flipStates[index] ? "flip" : ""}`}
          key={index}
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="gridhead font-bold"> <Eventspageevent
         
            header={event.title.rendered}
              date={event.date}
            time={event.time}
            price={event.price.rendered}
       
          />  </h2>

          <div className="back" onClick={() => handleFlip(index)}>
 <Eventspageevent
            time={event.time}
            header={event.title.rendered}
            description={event.description}
            price={event.price.rendered}
          />          </div>
     
        </div>
      ))}
    </div>
  );
}

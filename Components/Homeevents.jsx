import Event from "../Components/Event";
import data from "../Components/eventdata.json";

export default function Homeevents() {
  return (
    <div className="homewrapper">
      <h2 className="upcoming">Upcoming Events</h2>
      {data.map((item, index) => {
        return (
          <Event
            key={index}
            month={item.month}
            day={item.day}
            time={item.time}
            header={item.header}
            description={item.description}
            price={item.price}
          />
        );
      })}
    </div>
  );
}

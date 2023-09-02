
export default function Event({ month, day, time, header, description, price }) {
  return (
    <div className="eventwrapper">
      <div className="datetime">
        <div className="month-day">
          <span className="month">{month}</span>
          <span className="day">{day}</span>
        </div>
        <span className="time">{time}</span>
      </div>

      <div className="headdesc">
        <h3>{header}</h3>
        <span>{description}</span>
      </div>

      <div className="pricediv">
        <h4>{price}</h4>
        <span>per person</span>
      </div>
    </div>
  );
}

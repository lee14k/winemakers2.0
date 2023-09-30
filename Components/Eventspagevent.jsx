export default function Eventspageevent({
  date,
  time,
  header,
  description,
  price,
  flipped,
  onClick
}) {
  let bgImage;

  if (header.toLowerCase().includes("membership")) {
    bgImage = "url(/7.jpg)";
  } else if (header.toLowerCase().includes("board")) {
    bgImage = "url(/four.jpg)";
  } else {
    bgImage = "url(/midwinepic.jpeg)";
  }

  return (
    <div className={`flip-card ${flipped ? "flipped" : ""}`} onClick={onClick}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="eventContainer" style={{ backgroundImage: bgImage }}>
            <div className="grid gap-10 items-start mt-20">
              <div>
                <div>{date}</div>
                <div>{time}</div>
              </div>
              <div>
                <h3>{header}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card-back">
          <div className="back-content">
            <p>{description}</p>
            {price && <span>{price}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

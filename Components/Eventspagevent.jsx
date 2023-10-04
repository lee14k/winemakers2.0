export default function Eventspageevent({ date, time, header, description, price }) {
  
  let bgImage;

  if (header.toLowerCase().includes("membership")) {
    bgImage = 'url(/7.jpg)';
  } else if (header.toLowerCase().includes("board")) {
    bgImage = 'url(/four.jpg)';
  } else {
    bgImage = 'url(/midwinepic.jpeg)';
  }

  return (
    <div style={{ backgroundImage: bgImage }}>
      <div className="grid gap-10 items-start mt-20">
        <div>
          <div>{date}</div>
          <div>{time}</div>
        </div>
        <div className="">
          <h3 className="eventpagehead text-2xl text-white">{header}</h3>
          <p>{description}</p>
        </div>
        <div>
          {price && <span>{price}</span>}
        </div>
      </div>
    </div>
  );
}

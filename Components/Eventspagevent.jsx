export default function Eventspageevent({ date, time, header, description, price }) {
  return (
    <div className="">
    <div className="grid gap-10 items-start mt-20">
      <div>
        <div>{date}</div>
        <div>{time}</div>
      </div>
      <div className="">
        <h3>{header}</h3>
        <p>{description}</p>
      </div>
      <div>
        {price && <span>{price}</span>}
      </div>
    </div>
    </div>
  );
}





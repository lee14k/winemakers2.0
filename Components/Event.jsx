export default function Event({ date, time, header, description, price }) {
  return (
    <div className="">
    <div className="grid grid-cols-3 gap-4 items-start mt-20">
      <div>
        <div>{date}</div>
        <div>{time}</div>
      </div>
      <div className="">
        <h3 className="homeeventhead text-4xl">{header}</h3>
        <p className="text-xl">{description}</p>
      </div>
      <div>
        {price && <span>{price}</span>}
      </div>
    </div>
    </div>
  );
}





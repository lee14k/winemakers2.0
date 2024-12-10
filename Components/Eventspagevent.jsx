export default function Eventspageevent({ date, time, header, description, price }) {
  


  return (
    <div >
      <div className="grid gap-10 items-start mt-20 bg-slate-100 bg-opacity-70 w-80	">
        <div>
          <div className=" text-2xl text-black">{date}</div>
          <div>{time}</div>
        </div>
        <div className="  ">
          <h3 className=" text-2xl text-black">{header}</h3>
          <p className="text-sm">{description}</p>
        </div>
        <div>
          {price && <span>{price}</span>}
        </div>
      </div>
    </div>
  );
}

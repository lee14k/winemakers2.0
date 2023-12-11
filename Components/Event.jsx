export default function Event({ date, time, header, description, price }) {
  return (
    <div className="">
    <div className="grid grid-cols-3 gap-24 items-start mt-20">
      <div>
   
      </div>
      <div className="">
        <div className="flex justify-center items-center homeeventhead text-xl">
          <div className="flex flex-col justify-center items-center">
            <div>{date}</div>
        <div>{time}</div>
        </div>
        </div>
        <div className="flex flex-col justify-center items-center">
        <h3 className="homeeventhead text-4xl flex flex-col justify-center items-center">{header}</h3>
        <p className="text-xl">{description}</p>
         </div>
      </div>
      <div>
        {price && <span>{price}</span>}
      </div>
    </div>
    </div>
  );
}





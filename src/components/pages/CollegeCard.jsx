const CollegeCard = ({college}) => {
    const {image, collegeName, rating, admissionDates, events, researchHistory, sports} = college;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
  <figure><img className="h-60 w-full" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{collegeName}</h2>
    <p><span className="font-medium">Admission Date: </span>Start({admissionDates.start}) & End({admissionDates.end})</p>
    <p><span className="font-medium">Events: </span>1. {events[0]} 2. {events[1]} 3. {events[2]}</p>
    <p><span className="font-medium">Research History: </span>{researchHistory}</p>
    <p><span className="font-medium">Sports: </span>1. {sports[0]} 2. {sports[1]} 3. {sports[2]}</p>
    <div className="card-actions justify-between items-center">
        <span className="bg-gray-500 p-1 text-white rounded-sm">{rating}</span>
      <button className="btn bg-teal-400 text-white hover:text-teal-400 hover:border-teal-400">Details</button>
    </div>
  </div>
</div>
  );
};

export default CollegeCard;

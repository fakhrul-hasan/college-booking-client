

const SectionTitle = ({firstHeader, secondHeader, subTitle}) => {
    return (
        <div className="text-center w-2/4 mx-auto my-20">
            <h2 className="text-4xl font-bold"><span className="text-blue-900">{firstHeader}</span> <span className="text-teal-400">{secondHeader}</span></h2>
            <p className="leading-8 text-lg my-4 text-gray-500">{subTitle}</p>
        </div>
)};

export default SectionTitle;
import colleges from '../../assets/university.png';
import admission from '../../assets/graduation-hat.png';
import courses from '../../assets/courses.png';
import expert from '../../assets/expert.png';
import SectionTitle from '../shared/SectionTitle';

const FeatureSection = () => {
    return (
        <>
        <SectionTitle firstHeader='My College' secondHeader='Booking' subTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptas, perferendis deserunt dolor beatae numquam qui commodi exercitationem, a veritatis minus, quos vel officia !' />
        <div className='grid grid-cols-4 gap-8 mb-10'>
            <div className='p-10 flex flex-col items-center hover:shadow-xl hover:bg-teal-400 transition-all duration-300 ease-in'>
                <img className='w-20 h-20' src={colleges} alt="" />
                <h4 className='text-2xl font-medium text-blue-900 my-4'>Top Colleges</h4>
            </div>
            <div className='p-10 flex flex-col items-center hover:shadow-xl hover:bg-teal-400 transition-all duration-300 ease-in'>
                <img className='w-20 h-20' src={admission} alt="" />
                <h4 className='text-2xl font-medium text-blue-900 my-4'>Admission</h4>
            </div>
            <div className='p-10 flex flex-col items-center hover:shadow-xl hover:bg-teal-400 transition-all duration-300 ease-in'>
                <img className='w-20 h-20' src={courses} alt="" />
                <h4 className='text-2xl font-medium text-blue-900 my-4'>Popular Courses</h4>
            </div>
            <div className='p-10 flex flex-col items-center hover:shadow-xl hover:bg-teal-400 transition-all duration-300 ease-in'>
                <img className='w-20 h-20' src={expert} alt="" />
                <h4 className='text-2xl font-medium text-blue-900 my-4'>Expert Guidance</h4>
            </div>
        </div>
        </>
    );
};

export default FeatureSection;
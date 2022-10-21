import { ArrowRight } from "phosphor-react";
import Model2 from '../../../assets/Model2.svg'
import Model3 from '../../../assets/Model3.svg'
export function Works() {
  return(
    <div className="p-4 flex flex-col gap-6 sm:mt-4 sm:gap-10 lg:gap-20 lg:mt-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-10">
        <div className="flex flex-col gap-4 text-white">
          <h1 className="text-xl sm:text-4xl lg:text-6xl">Work out at home for free.</h1>
          <p className="text-gray-400 sm:text-sm lg:text-base">We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free!</p>
          <button className="flex gap-2 w-max text-blue-500 items-center sm:text-sm">See More <ArrowRight size={16} weight={"bold"} className="self-end blue-500"/></button>
        </div>
        <img src={Model2} alt="Model 2" className="sm:w-96 lg:w-2/3"/>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-10 sm:flex-row-reverse">
        <div className="flex flex-col gap-4 text-white">
          <h1 className="text-xl sm:text-4xl lg:text-5xl">Get more with low-cost training programs and advanced features.</h1>
          <p className="text-gray-400 sm:text-sm lg:text-base">We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free!</p>
          <button className=" flex gap-2 w-max text-blue-500 items-center sm:text-sm">See More <ArrowRight size={16} weight={"bold"} className="blue-500"/></button>
        </div>
        <img src={Model3} alt="Model 3 " className="sm:w-96 lg:w-2/3"/>
      </div>
    </div>
  )
}
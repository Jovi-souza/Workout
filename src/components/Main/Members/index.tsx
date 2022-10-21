import { ArrowRight } from "phosphor-react";

export function Members() {
  return(
    <div className="text-white flex-wrap sm:flex justify-center">
      <h1 className="p-4 text-2xl w-screen">Membership</h1>
      <div className="p-4">
        <div className="flex flex-col gap-2 p-4 bg-gray-900 rounded-md hover:bg-gray-700 h-full sm:w-60">
          <h1 className="text-xl font-bold text-center">Join for Free</h1>
          <p className="text-gray-400">Reach your fitness goals or maintain your healthy lifestyle with professional training and support from a positive and active online community.</p>
          <ul className="p-4 text-gray-400">
            <li className="list-disc">~600 Full-Length Workout Videos</li>
            <li className="list-disc">Customizable Calendar</li>
            <li className="list-disc">Healthy Recipes</li>
            <li className="list-disc">Health and Fitness Articles</li>
            <li className="list-disc">Positive and Supportive Online Community</li>
            <li className="list-disc">No Credit Card Needed</li>
          </ul>
          <button className="flex gap-2 w-max text-blue-500   items-center">See More <ArrowRight size={16} weight={"bold"} color="white" /></button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex flex-col gap-2 p-4 bg-gray-900 rounded-md hover:bg-gray-700 h-full sm:w-60">
          <h1 className="text-xl font-bold text-center">WO Plus</h1>
          <p className="text-gray-400">WO Plus includes everything you get with a free membership and adds brand new convenience features, fitness tools, and unique content.</p>
          <ul className="p-4 text-gray-400">
            <li className="list-disc">Ads-Free Website and Videos</li>
            <li className="list-disc">Surprise Me Workout Selection Tool</li>
            <li className="list-disc">Statistics for Your Activities</li>
            <li className="list-disc">Enter and Track Custom Workouts</li>
            <li className="list-disc">FB Plus Exclusive Workouts</li>
            <li className="list-disc">Trackers to See Your Progress</li>
            <li className="list-disc">FB Plus Content and Challenges</li>
            <li className="list-disc">Video Tags</li>
            <li className="list-disc">FB Plus Routines</li>
            <li className="list-disc">Rest Day Complete</li>
          </ul>
          <button className="w-max text-white bg-blue-600 px-3 py-1 rounded-md">Join Club Now!</button>
        </div>
      </div>
    </div>
  )
}
import { Card } from "./Component";

export function Options() {
  return(
    <div className="flex flex-col gap-2 p-4 sm:gap-4">
      <h1 className="text-2xl text-white font-bold sm:text-4xl">Not sure where to start?</h1>
      <p className="text-gray-400 sm:text-base">Programs offer day-to-day guidance on an interactive calendar to keep you on track.</p>
      <div className="flex flex-nowrap flex-row w-max gap-2">
        <Card 
          title={'Workout Videos'}
          content={'Access to hundreds of free, full-length workout videos.'}
        />
        <Card 
          title={'Workout Programs'}
          content={'Affordable and effective workout programs. '}
        />
        <Card 
          title={'Meal Plans'}
          content={'Plans built with registered dietitians and nutritionists. '}
        />
        <Card 
          title={'WO Plus ALL ACCESS'}
          content={'Add powerful features to your membership.'}
        />
      </div>
    </div>
  )
}
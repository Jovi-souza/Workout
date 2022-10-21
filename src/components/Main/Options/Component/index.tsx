import { ArrowRight } from "phosphor-react"

interface CardType {
  title: string
  content: string
}

export function Card({title, content}: CardType) {
  return(
    <div className="flex flex-col bg-gray-700 w-56 p-4 rounded cursor-pointer sm:w-64 sm:p-4 lg:w-80">
      <h1 className="text-white sm:text-xl lg:text-2xl">{title}</h1>
      <p className="text-gray-400 sm:text-sm lg:text-xl">{content}</p>
      <ArrowRight size={16} weight={"bold"} color="white" className="self-end"/>
    </div>
  )
}

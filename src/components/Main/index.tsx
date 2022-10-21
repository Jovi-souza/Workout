import { Members } from "./Members";
import { Options } from "./Options";
import { Works } from "./Works";

export function Main() {
  return(
    <div className="overflow-hidden flex flex-col gap-6">
      <Options />
      <Works />
      <Members />
    </div>
  )
}
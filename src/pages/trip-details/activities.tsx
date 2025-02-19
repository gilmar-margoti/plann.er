import { CircleCheck } from "lucide-react";

export function Activities() {
  return (
    <div className="space-y-8">
      <div className="space-y-2.5">
        <div className="flex items-baseline gap-2">
          <span className="text-xl text-zinc-300 font-semibold">Day 17</span>
          <span className="text-xs text-zinc-500">Saturday</span>
        </div>
        <p className="text-sm text-zinc-500">There are no activities created for this date.</p>
      </div>


      <div className="space-y-2.5">
        <div className="flex items-baseline gap-2">
          <span className="text-xl text-zinc-300 font-semibold">Day 18</span>
          <span className="text-xs text-zinc-500">Sunday</span>
        </div>

        <div className="space-y-2.5">
          <div className="flex items-center bg-zinc-900 px-4 py-2.5 rounded-xl shadow-shape gap-3">
            <CircleCheck className="text-lime-300 size-5" />
            <span className="text-zinc-100">Karting</span>
            <span className="text-zinc-400 text-sm ml-auto">14:00h</span>
          </div>
        </div>

        <div className="space-y-2.5">
          <div className="flex items-center bg-zinc-900 px-4 py-2.5 rounded-xl shadow-shape gap-3">
            <CircleCheck className="text-lime-300 size-5" />
            <span className="text-zinc-100">Karting</span>
            <span className="text-zinc-400 text-sm ml-auto">14:00h</span>
          </div>
        </div>

        <div className="space-y-2.5">
          <div className="flex items-center bg-zinc-900 px-4 py-2.5 rounded-xl shadow-shape gap-3">
            <CircleCheck className="text-lime-300 size-5" />
            <span className="text-zinc-100">Karting</span>
            <span className="text-zinc-400 text-sm ml-auto">14:00h</span>
          </div>
        </div>
      </div>
    </div>
  )
}

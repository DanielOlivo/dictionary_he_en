export const LoadingCard = () => {
  return (
    <div className="flex flex-col justify-start items-center border border-slate-200 rounded-xl p-4 h-24">
        
        <div className="w-full h-full animate-pulse grid grid-cols-1 gap-3">

            {Array.from({length: 3}, () => 
                <div className="w-full h-4 bg-gray-200 rounded-xl" />)}
        </div>


    </div>
  )
}

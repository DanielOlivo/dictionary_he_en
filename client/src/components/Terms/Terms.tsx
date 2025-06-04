import { useAppSelector } from "../../app/hooks"
import { selectIsPending, selectTerms } from "../../features/dict/selectors"
import { LoadingCard } from "../LoadingCard/LoadingCard"
import { TermCard } from "../TermCard/TermCard"

export const Terms = () => {

    const isPending = useAppSelector(selectIsPending)
    const terms = useAppSelector(selectTerms) 


    return (
        <div className="w-full mx-2 mt-8 overflow-y-auto flex-grow">
            <div className="w-full p-4">
                <div className="grid grid-cols-3 gap-2">
                    {isPending ? Array.from({length: 12}, (_,i) => <LoadingCard key={i}/>) : 
                        terms.map(p => <TermCard {...p} />)}
                </div>
            </div>
        </div>
    )
}

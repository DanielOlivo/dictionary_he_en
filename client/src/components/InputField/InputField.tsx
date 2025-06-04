import { useEffect, useState, type ChangeEvent } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { selectQuery } from "../../features/dict/selectors"
import { updateQuery } from "../../features/dict/slice"
import { requestQuery } from "../../features/dict/thunks"

type TimeoutId = ReturnType<typeof setTimeout>

export const InputField = () => {

    const dispatch = useAppDispatch()
    const query = useAppSelector(selectQuery)

    const [timeout, _setTimeout] = useState<null | TimeoutId>(null)

    useEffect(() => {
        if(query === '' && timeout){
            clearTimeout(timeout)
            _setTimeout(null)
            
        }
        else{
            if(timeout){
                clearTimeout(timeout)
            }
            const _timeout = setTimeout(() => {
                dispatch(requestQuery(query))
                _setTimeout(null)
            }, 2000)
            _setTimeout(_timeout)
        }

        return () => {
            if(timeout){
                clearTimeout(timeout)
                _setTimeout(null)
            }
        }
    }, [query])

    return (
        <div className="w-2/3 p-2 mt-8 mx-10 h-20">
            <input
                aria-label="input-field"
                placeholder="type word..."
                lang='he'
                dir='rtl'
                className="w-full border border-slate-200 rounded-xl p-2"
                value={query} 
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    e.preventDefault()
                    dispatch(updateQuery(e.target.value))
                }} 
            />
        </div>
    )
}

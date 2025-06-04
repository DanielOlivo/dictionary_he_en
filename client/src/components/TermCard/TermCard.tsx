import { Card, CardBody, Typography } from "@material-tailwind/react"
import { useState, useEffect, type FC } from "react"
import { wait } from "../../utils/wait"

export interface TermCardProps {
    id: string
    enableIdx: number
    color: string
    part: string
    menukad: string
    chaser: string
    meaning: string
}

export const TermCard: FC<TermCardProps> = ({enableIdx, menukad, chaser, meaning}) => {

    const [enabled, setEnabled] = useState(false)

    useEffect(() => {
        async function run(){
            await wait(enableIdx * 100)
            setEnabled(true)
        }
        run()
    }, [])

    return (
        <div className="h-full">
            <Card className={`h-full transition-all duration-300 ease-in transform ${enabled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-9'}`}>
                <CardBody>
                    <div className="flex flex-col justify-start items-center p-4">
                        <div className="w-full flex flex-row-reverse justify-between items-center">

                            <Typography variant="h4">{menukad}</Typography>

                            {chaser && chaser.length > 0 ? (
                                <>
                                    <Typography variant="h4">~</Typography>
                                    <Typography variant="h4">{chaser}</Typography>
                                </>
                            ) : null}

                        </div>

                        <div className="w-full mt-2">
                            <p>{meaning}</p>
                        </div>

                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

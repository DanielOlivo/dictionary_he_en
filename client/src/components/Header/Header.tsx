import { Button, Dialog, DialogBody, Typography } from "@material-tailwind/react"
import { useEffect, useState } from "react"
import { About } from "../About/About"
import { Navbar } from "@material-tailwind/react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { selectServerStatus } from "../../features/dict/selectors"
import { checkServer } from "../../features/dict/thunks"

export const Header = () => {

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)

  const dispatch = useAppDispatch()
  const serverStatus = useAppSelector(selectServerStatus)

  useEffect(() => {
    dispatch(checkServer())
    const interval = setInterval(() => {
      dispatch(checkServer())
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Navbar color="blue" className="w-full flex flex-row justify-between items-center rounded-t-none">

        <div>
          <Typography variant="h4">Hebrew - English Dictionary</Typography>
        </div>

        <div className="flex flex-row justify-end items-center">
          <Button color='white' variant="text" onClick={handleOpen}>About</Button> 
          <div className="flex flex-col justify-start items-start ml-4">
            <Typography variant="small">Server is {serverStatus ? 'online' : 'offline'}</Typography>
            {!serverStatus ? <Typography variant="small">Please, wait 30 seconds...</Typography> : null}
          </div>
        </div>


        <Dialog open={open} handler={handleOpen} size='sm'>
          <DialogBody>
            <About />
          </DialogBody>
        </Dialog>

    </Navbar>

  
  )
}

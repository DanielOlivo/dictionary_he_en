import { Button, Dialog, DialogBody, Typography } from "@material-tailwind/react"
import { useState } from "react"
import { About } from "../About/About"
import { Navbar } from "@material-tailwind/react"

export const Header = () => {

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)

  return (
    <Navbar color="blue" className="w-full flex flex-row justify-between items-center rounded-t-none">

        <div>
          <Typography variant="h4">Hebrew - English Dictionary</Typography>
        </div>

        <div>
          <Button color='white' variant="text" onClick={handleOpen}>About</Button> 
        </div>

        <Dialog open={open} handler={handleOpen} size='sm'>
          <DialogBody>
            <About />
          </DialogBody>
        </Dialog>

    </Navbar>

  
  )
}

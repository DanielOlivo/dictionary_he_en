import { Typography } from "@material-tailwind/react"

export const Footer = () => {
  return (
    <footer className="w-full flex flex-row justify-between items-center border-t border-blue-100 rounded-t-md p-3">
        <Typography color='gray' variant="small">Made by Vitalii Masterov</Typography> 
        <Typography color='gray' variant="small"><a href='mailto:vit.masterov@gmail.com'>vit.masterov@gmail.com</a></Typography>
        <Typography color='gray' variant="small"><a href='https://github.com/DanielOlivo'>Github</a></Typography>
    </footer>
  )
}

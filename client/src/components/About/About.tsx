import { Typography } from "@material-tailwind/react"

export const About = () => {
  return (
    <div>
        <Typography variant="h3" color='blue' textGradient>
            Hebrew - English Dictionary
        </Typography>

        <Typography variant="paragraph" >
            This is a simple dictionary app, made with React and @material-tailwind
        </Typography>
    </div>
  )
}

import { Container } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2' // Grid version 2
import { MyImage } from "../shared"
import meImg from '../../assets/me.jpeg'


export const AboutMe: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={5} justifyContent="center">
        <Grid xs={4}>
          <MyImage src={meImg} />
        </Grid>
        <Grid xs={6}>
          xs 5
        </Grid>
      </Grid>
    </Container>
  )
}
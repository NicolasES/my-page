import { Box, Container, Link, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2' // Grid version 2
import { MyImage, TitleDivider } from "../shared"
import meImg from '../../assets/me.jpeg'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'


export const AboutMe: React.FC = () => {
  const styles = {
    p: {
      textAlign: 'justify',
      lineHeight: '42px',
      fontSize: '1.3rem'
    }
  }

  return (
    <Container maxWidth="lg">
      <Grid container spacing={5}>
        <Grid xs={4}>
          <MyImage src={meImg} />
        </Grid>
        <Grid xs={8}>
          <TitleDivider text='Sobre mim'></TitleDivider>

          <Typography variant="h1" textAlign='left' mt={3}>
            Nicolas Escouto Sonnenfeld
          </Typography>

          <Typography variant="subtitle1" textAlign='left'>
            Desenvolvedor de Software
          </Typography>

          <Typography variant="body1" sx={styles.p} mt={3}>
            Tenho grande experiência na criação de APIs rest. Atualmente utilizo
            NodeJS / Typescript como principal tecnologia de desenvolvimento.
            Gosto de participar da arquitetura do sistema, já trabalhei com Clean Architecture na criação de microsserviços, 
            testes com Jest e TDD,
            Mensageria Kafka e SQS.
          </Typography>

          <Box mt={3}>
            <Link href="https://www.linkedin.com/in/nicolas-escouto-sonnenfeld-42b17298/" target="_blank" color="inherit">
              <LinkedInIcon fontSize="large" sx={{ mx: 3 }}></LinkedInIcon>
            </Link>
            <Link href="https://github.com/NicolasES" target="_blank" color="inherit">
              <GitHubIcon fontSize="large" sx={{ mx: 3 }}></GitHubIcon>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}
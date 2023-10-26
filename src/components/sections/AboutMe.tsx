import { Box, Container, Link, Tooltip, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2' // Grid version 2
import { MyImage, TitleDivider } from "../shared"
import meImg from '../../assets/me.jpeg'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'


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
            Trabalho com desenvolvimento de sistemas desde <strong>2014</strong> quando 
            tive minha primeira oportunidade de estágio enquanto cursava um curso técnico  de informática. 
            Em 2015, enquanto já trabalhava na área, iniciei a faculdade e em 2018 
            me formei em <strong>Análise e Desenvolvimento de Sistemas</strong>. 
            Tenho grande experiência de desenvolvimento web focado no backend de sistemas 
            e trabalhei principalmente desenvolvendo sistemas <strong>SaaS</strong> de empresas. <br />
            Desenvolvi diversas <strong>APIs Rest</strong>, iniciei trabalhando com 
            a linguagem de programação <strong>PHP</strong> mas atualmente trabalho 
            mais com <strong>NodeJS / Typescript</strong> como principal tecnologia 
            de desenvolvimento. Gosto de participar de definições do produto e já trabalhei 
            com sistemas orientados a <strong>DDD (Domain Driven Design) e Clean Architecture</strong> na criação de microsserviços; 
            Testes com <strong>Jest e TDD</strong>; Mensageria <strong>Kafka e SQS</strong>.
          </Typography>

          <Box mt={3} alignItems='center' display='flex'>

            <Tooltip title="LinkedIn">
              <Link href="https://www.linkedin.com/in/nicolas-escouto-sonnenfeld-42b17298/" target="_blank" color="inherit">
                <LinkedInIcon fontSize="large" sx={{ mx: 3 }}></LinkedInIcon>
              </Link>
            </Tooltip>

            <Tooltip title="GitHub">
              <Link href="https://github.com/NicolasES" target="_blank" color="inherit">
                <GitHubIcon fontSize="large" sx={{ mx: 3 }}></GitHubIcon>
              </Link>
            </Tooltip>

            <Tooltip title="Currículo em PDF">
              <Link href="./Currículo-NICOLAS.pdf" target="_blank" color="inherit">
                <PictureAsPdfIcon fontSize="large" sx={{ mx: 3 }}></PictureAsPdfIcon>
              </Link>
            </Tooltip>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}
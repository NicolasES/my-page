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
            Desenvolvedor Backend com <strong>10 anos de experiência</strong> focado na construção de sistemas <strong>SaaS escaláveis</strong>. 
            Especialista em <strong>Node.js, TypeScript e PHP (Laravel)</strong>, domino o design de arquiteturas resilientes utilizando 
            <strong> Clean Architecture, DDD e Microsserviços</strong>.
            <br /><br />
            Com passagens por grandes players como <strong>Starian e Warren Brasil</strong>, possuo sólida vivência em ambientes de alta performance com mensageria 
            <strong> (Kafka e SQS)</strong> e testes automatizados. 
            <br /><br />
            Acredito que tecnologia deve gerar valor real; por isso, atuo <strong>próximo ao produto e ao negócio</strong>, 
            participando ativamente de <strong>definições estratégicas</strong> que transformam requisitos complexos em APIs eficientes, seguras e de alta disponibilidade.
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
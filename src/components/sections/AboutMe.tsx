import { Box, Container, Link, Tooltip, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2' // Grid version 2
import { MyImage, TitleDivider } from "../shared"
import meImg from '../../assets/me.png'
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
            Desenvolvedor Backend atuando na área desde 2014, dedicado à construção de sistemas <strong>SaaS escaláveis</strong>. 
            Com ampla experiência em <strong>Node.js, TypeScript e PHP (Laravel)</strong>, domino o design de arquiteturas resilientes utilizando 
            <strong> Clean Architecture, DDD e Microsserviços</strong>.
            <br /><br />
            Possuo sólida vivência no desenvolvimento e evolução de <strong>sistemas próprios</strong> em grandes empresas, como <strong>Warren Brasil, Starian (Checklistfacil) e Nelogica</strong>, 
            com atuação direta em ambientes de alta performance envolvendo mensageria <strong> (Kafka e SQS)</strong> e testes automatizados. 
            <br /><br />
            Oriento meu trabalho para garantir que a tecnologia gere valor real; por isso, atuo <strong>próximo ao produto e ao negócio</strong>, 
            participando ativamente de <strong>definições estratégicas</strong> que transformam requisitos complexos em sistemas eficientes, seguros e de alta disponibilidade.
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
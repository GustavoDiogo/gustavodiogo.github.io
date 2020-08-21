import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Link,
} from '@material-ui/core';
import moment from 'moment';
import fotoQuemSouEu from '../../images/fotoQuemSouEu.jpg';

const QuemSouEu = () => (
  <Container maxWidth={false}>
    <Grid container>
      <Grid item xs={12} md={3}>
        <img
          style={{ width: '350px', maxWidth: '100%', maxHeight: '100%' }}
          alt="Eu"
          src={fotoQuemSouEu}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography
          variant="h4"
        >
          Biografia
        </Typography>
        Meu nome é Gustavo Diogo Silva, tenho
        {' '}
        {moment().diff('1997-09-21', 'years')}
        {' '}
        anos, sou um cristão batista, programador e paulista.
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography
          variant="h4"
        >
          Formação Acadêmica
        </Typography>
        <Typography variant="subtitle">
          Atualmente estou cursando Bacharelado em Ciência e Tecnologia(BC&T)
          e Bacharelado em Ciências da Computação, na Universidade Federal do ABC,
          com previsão de formação em 2022 e 2024 respectivamente.
        </Typography>
        <Link href="http://lattes.cnpq.br/2025881816456228" target="_blank" rel="noopener">
          Acesse meu Currículo Lattes
        </Link>
      </Grid>
    </Grid>
  </Container>
);

export default QuemSouEu;

import Head from "next/head";
import { useRouter } from "next/router";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from '../../src/Link';
import CardActions from "@mui/material/CardActions";

export default function Car({ car }) {
  // get return from getStaticProps

  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>
          {car.color} {car.id}
        </title>
      </Head>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={car.image}
              alt={car.id}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {car.id}
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                Id: {car.id}
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                Color: {car.color}
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                Image: {car.image}
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" component={Link} noLinkStyle href="/cars">
                Go to the cars page
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Container>
    </>
  );
}

// getStaticProps works together with getStaticPaths
export async function getStaticProps({ params }) {
  const req = await fetch(`http://localhost:3000/${params.id}.json`);
  const data = await req.json();

  return {
    props: { car: data },
  };
}

export async function getStaticPaths({ params }) {
  // getStaticPaths is required for dynamic SSG pages and is missing for '/cars/[id]'
  const req = await fetch(`http://localhost:3000/cars.json`);
  const data = await req.json();

  const paths = data.map((car) => {
    return { params: { id: car } };
  });

  return {
    paths,
    fallback: false,
  };
}

// export async function getServerSideProps({params}) {

//     const req = await fetch(`http://localhost:3000/${params.id}.json`)
//     const data = await req.json();

//     return {
//         props: { car: data }
//     }

// }

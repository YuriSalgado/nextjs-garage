import Head from 'next/head'
import { useRouter } from "next/router"


export default function Car({ car }) { // get return from getStaticProps

    const router = useRouter()
    const { id } = router.query

    return (<>
        <Head>
            <title>{car.color} {car.id}</title>
        </Head>
        <h1>Hello {id}</h1>
        <img src={car.image} width="300px" />
    </>)
}

// getStaticProps works together with getStaticPaths
export async function getStaticProps({params}) {

    const req = await fetch(`http://localhost:3000/${params.id}.json`)
    const data = await req.json();

    return {
        props: { car: data }
    }

}

export async function getStaticPaths({params}) { // getStaticPaths is required for dynamic SSG pages and is missing for '/cars/[id]'
    const req = await fetch(`http://localhost:3000/cars.json`)
    const data = await req.json();

    const paths = data.map(car => {
        return { params: { id: car } }
    })

    return {
        paths,
        fallback: false
    };
}

// export async function getServerSideProps({params}) {

//     const req = await fetch(`http://localhost:3000/${params.id}.json`)
//     const data = await req.json();

//     return {
//         props: { car: data }
//     }

// }
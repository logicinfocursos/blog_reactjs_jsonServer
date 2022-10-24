import { useEffect, useState } from 'react'

import { apiGET } from '../../services/api/apiGET'
import { Jumbotron } from '../../components'
import { Grid } from '../../components'



export default function Home() {


    const [posts, setPosts] = useState([])


    const fetchData = async () =>{

        const result = await apiGET('posts')

        setPosts(result.data)
    }



    useEffect(()=>{

        fetchData()

    },[])



    return (
        <section className="container">

            <Jumbotron
                title='tutoriais e artigos'
                subtitle='estamos elaborado informações relevantes para a sua vida de empreendedor digital ou desenvolvedor'
                text='categorias: marketing digital, dicas de programação, etc'
                buttonText=''
                buttonLink=''
            />

            <Grid posts={posts} />

        </section>
    )
}
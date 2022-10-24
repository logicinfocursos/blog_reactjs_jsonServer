import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { apiGET } from '../../services/api/apiGET'
import { Breadcrumb } from '../../components'
import { InsertComments, CommentList, NotFoundPost } from './'



export default function Post() {

    let { id } = useParams()
    const [post, setPost] = useState([]) //useState(posts.filter((i) => i.id == id && i.status == 1))[0]



    const fetchData = async () => {

        const result = await apiGET(`posts/${id}`)

        setPost(result.data)
    }



    useEffect(() => {

        fetchData()

    }, [])



    if (!post) return <NotFoundPost />



    return (

        <section className="container">

            <Breadcrumb
                actualPage={`post: ${post.title}`}
            />

            <div id="product_image" className="mb-3">
                <img className="card-img-top mb-5 mb-md-0" src={post.featureImage} alt="imagem do produto" style={{ height: 500 }} />
            </div>

            <samll><i className="bi bi-person"></i> {post.author}<i className="bi bi-bookmark-check ms-5"></i> {post.categories}<i className="bi bi-calendar-check ms-5"></i> {post.created_at}</samll>

            <h1 className="mt-5">{post.title}</h1>

            {
                post.subtitle ? <h5 className="mb-5">{post.subtitle}</h5> : ""
            }

            <p>{post.details}</p>

            <InsertComments
                post={post}
                setPost={setPost}
            />

            <CommentList comments={post.comments} />

        </section>
    )
}


import { apiPUT } from '../../services/api'
import { useEffect, useState } from 'react'
import axios from 'axios'


export const InsertComments = ({ post, setPost }) => {

    const [comment, setComment] = useState([])

    return (
        <div className="card mt-5 mb-5" >

            <div className="card-header">você quer deixar um comentário?</div>

            <form className="px-3 mt-3"
                onSubmit={(event) => addCommnet(event, comment, post, setPost, setComment)}
                onChange={fieldsValidate}
                id="sendCommentForm"
            >
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="author"
                        maxlength="20"
                        placeholder="nome ou apelido"
                        value={comment.author}
                        onChange={(e) => setComment({ ...comment, author: e.target.value })}
                    />
                    <small className='text-danger' id="author_errorMessage" style={{ display: "none" }}>o nome ou apelido precisa ter ao menos 5 letras</small>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">comentário</label>
                    <textarea
                        className="form-control"
                        id="message"
                        rows={3}
                        placeholder="deixe aqui o seu comentário..."
                        value={comment.message}
                        onChange={(e) => setComment({ ...comment, message: e.target.value })}
                    />
                    <small className='text-danger' id="message_errorMessage" style={{ display: "none" }}>por gentileza, informe um texto com ao menos 15 caracteres</small>
                </div>
                <button className="btn btn-secondary mt-3 mb-3" type="submit" id="submitButton">enviar</button>
                <input className="btn btn-secondary mt-3 mb-3 ms-3" type="reset" id="resetButton" value="limpar campos" onClick={() => setComment([])} />
            </form>
        </div>
    )
}


export const addCommnet = async (event, comment, post, setPost, setComment) => {
    event.preventDefault()

    let comments = null

    if (post && comment && comment.author && comment.message && fieldsValidate()) {
        comments = post.comments

        comments.push({
            ...comment,
            id: post.comments.length + 1,
            type: "visit",
            image: "https://www.layoutit.com/img/sports-q-c-64-64-2.jpg",
            status: 1,
            created_at: Date(),
            updated_at: Date()
        })

        const postUpdate = {
            ...post,
            comments: comments

        }

        await apiPUT('posts', post)

        setPost(postUpdate)
        setComment([])

        document.getElementById('author').value = ''
        document.getElementById('message').value = ''
    }
}



export const fieldsValidate = () => {

    let submitStatus = true
    let input_author = document.getElementById('author')
    let input_message = document.getElementById('message')

    if (input_author.value.length < 5 || !input_author.value.match(/^[ A-Za-z]+$/)) {
        document.getElementById('author_errorMessage').style.display = "block"
        submitStatus = false

    } else document.getElementById('author_errorMessage').style.display = "none"

    if (input_message.value.length < 15) {
        document.getElementById('message_errorMessage').style.display = "block"
        submitStatus = false

    } else document.getElementById('message_errorMessage').style.display = "none"

    document.getElementById('submitButton').disabled = !submitStatus

    return submitStatus
}
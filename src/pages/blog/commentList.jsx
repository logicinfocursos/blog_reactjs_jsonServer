import './commentList.styles.css'
export const CommentList = ({ comments }) => {

    if (!comments || comments.length < 1) return <></>

    return (
        <div className="card mt-5 mb-5" >
            <div className="card-header">
                últimos comentários
            </div>

            {
                comments && comments.length > 0
                    ? comments.map((item, key) => {
                        return (

                            <div className="d-flex p-3 list-group-item">
                                <img src={item.image} alt="John Doe" className={`rounded-circle ms-${item.type=='adm'?'5':'1'}`} style={{ width: 60, height: 60 }} />
                                <div>
                                    <h5 className="fw-bold ms-3">
                                        {item.author}
                                        <small className="text-muted ms-1 fs-6">({item.created_at})</small>
                                    </h5>
                                    <p  className={`ms-3 ${item.type=='adm'?'fst-italic':'fw-normal'}`}>{item.message}</p>
                                </div>
                                <hr/>
                            </div>
                        )
                    })
                    : <></>
            }
        </div>
    )
}


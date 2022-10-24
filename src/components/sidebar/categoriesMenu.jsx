import { useEffect, useState } from 'react'
import { apiGET } from '../../services/api/apiGET'

//const categories = ["business", "marketing", "audiovisual", "programação", "novidades", "tutorial", "informática"]


export const CategoriesMenu = () => {

    const [categories, setCategories] = useState([])



    const fetchData = async () =>{

        const result = await apiGET('categories')

        setCategories(result.data)
    }



    useEffect(()=>{

        fetchData()

    },[])



    return (
        <section className="card" id="categoriesMenuSidebar">
            <div className="card-header">categorias</div>
            <ul className="list-group list-group-flush">

                {
                    categories.map((item, key)=>{
                        return(
                            <li className="list-group-item">
                            <a href={`/categories/${item.slug}`} className="text-decoration-none text-dark" key={key}>{item.name}</a>
                        </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}
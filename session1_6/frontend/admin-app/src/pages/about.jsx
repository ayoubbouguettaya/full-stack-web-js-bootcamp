import { useEffect } from "react"
import { useParams } from "react-router-dom"

const AboutUsPage = () => {


    const {id} = useParams()

    useEffect(()=> {


        //fetch product detail

        // href  '/products/${id}'
    },[id])
    return <p>about us</p>
}

export default AboutUsPage
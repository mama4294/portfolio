import { Button } from "../components/Button"
import { useNavigate } from "react-router-dom"
export const PageNotFound = () =>{
    const navigate = useNavigate();
    const navigateHome = () =>{
        navigate(-1)
    }
    return(
        <div className="h-screen flex flex-col items-center justify-center bg-primary">
            <h1 className="text-white text-2xl"> Page not found</h1>
            <Button onClick={navigateHome} type="invert" className="block">Back</Button>
        </div>
    )
}
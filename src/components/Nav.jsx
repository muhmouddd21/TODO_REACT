import { Link, Links } from "react-router-dom"
export default function Nav(){
    return (
        <>
        <button>home</button>
        <button>about</button>
        <Link to="/signUp">
            <button >SignUp</button>
        </Link>
        </>
    )
}
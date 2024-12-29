
import { Link } from "react-router-dom"
import errorImg from "../../assets/404.gif"

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <Link to={'/'} className="btn btn-success">Take me Home</Link>
      <img src={errorImg} alt="error image" />
    </div>
  )
}

export default ErrorPage

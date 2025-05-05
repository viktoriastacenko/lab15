import "./Head.css";
import {Link} from "react-router-dom" ;

function Head() {
    return (
        <div classname="Head">
            <Link to="/news"> Новости </Link> &nbsp;
            <Link to="/about"> О проекте </Link> &nbsp;
            <Link to="/contacts"> Контакты </Link> &nbsp;
        </div>
    );
}

export default Head;
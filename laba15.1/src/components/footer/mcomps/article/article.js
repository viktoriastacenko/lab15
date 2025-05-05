import "./article.css";
import News from "../../../atrcomps/news/news";
import About from "../../../atrcomps/about/about";
import Contacts from "../../../atrcomps/contacts/contacts";
import Er404 from "../../../er404/er404";

import {Routes, Route} from "react-routing-dom";

export function Article() {
    <div classname="article">
        <Routes>
            <Route path="/news" element={<News/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contacts" element={<Contacts/>} />
            <Route path="/*" element={<Er404/>} />
        </Routes>
    </div>
}
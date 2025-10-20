import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams(); //useParams is a hook that returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>.
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2> {blog.title}</h2>
                    <p> Written by {blog.author} </p>
                    <div> {blog.body} </div>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;
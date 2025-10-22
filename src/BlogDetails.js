import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams(); //useParams is a hook that returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>.
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, { //deletes blogs with specific id
            method: 'DELETE'
        }).then(() => {
            history.push('/'); //navigate back to home page after deletion
        })
    };

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2> {blog.title}</h2>
                    <p> Written by {blog.author} </p>
                    <div> {blog.body} </div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;
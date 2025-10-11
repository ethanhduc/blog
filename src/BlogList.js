import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }) => { //destructuring 'props', getting the array & title, 'props' is always an object that contains all properties passed to the component
    //const blogs = props.blogs;

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;
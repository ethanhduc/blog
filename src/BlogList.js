const BlogList = ({ blogs, title, handleDelete }) => { //destructuring 'props', getting the array & title, 'props' is always an object that contains all properties passed to the component
    //const blogs = props.blogs;
    //const title = props.title;

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <button onClick={() => handleDelete(blog.id)}>delete blog</button>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;
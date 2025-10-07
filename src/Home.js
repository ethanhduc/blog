import { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([ //array of blogs
        {title: "My new blog", body: "abcd...", author: "Tom", id: 1},
        {title: "House party!", body: "abcd...", author: "Jerry", id: 2},
        {title: "Backyard tips", body: "abcd...", author: "Mario", id: 3}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id); //makes new array, checking each blog's id, if it doesn't match the id passed in, keep it
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log("use effect ran");
        console.log(blogs);
    }, [])

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/> {/* passing blogs array into BlogList component as a property */}
        </div>
    );
}
 
export default Home;
import { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/blogs")
            .then(res => { // get response object and jsonify it
                return res.json();
            })
            .then(data => { //we set the data
                setBlogs(data);
            });
    }, []);

    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}  {/*passing blogs array into BlogList component as a property, only goes through if blogs isn't null */}
        </div>
    );
}
 
export default Home;
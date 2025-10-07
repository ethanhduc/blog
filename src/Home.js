import { useState } from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([ //array of blogs
        {title: "My new blog", body: "abcd...", author: "Tom", id: 1},
        {title: "House party!", body: "abcd...", author: "Jerry", id: 2},
        {title: "Backyard tips", body: "abcd...", author: "Dog", id: 3}
    ]);

    return (
        <div className="class">
            <BlogList blogs={blogs} title="All Blogs"/> {/* passing blogs array into BlogList component as a property */}
        </div>
    );
}
 
export default Home;
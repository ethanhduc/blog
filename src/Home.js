import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs'); //custom hook, useFetch returns an object with 3 properties, we destructure it here

    return (
        <div className="home">
            { error && <div> {error} </div>}
            { isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}  {/*passing blogs array into BlogList component as a property, only goes through if blogs isn't null */}
        </div>
    );
}
 
export default Home;
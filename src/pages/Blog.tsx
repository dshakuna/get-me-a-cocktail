import BlogPosts from '../json/BlogPostData.json';
import BlogCard from '../components/BlogCard';
import CocktailNavbar from '../components/HeaderNavbar';

const PageBlog = () => {
    return (
    <>
        <CocktailNavbar />
        
        <div className="container">
            <div className="row">
            <h1>Blog de Cócteles</h1>
                {BlogPosts.map(post => (
                    <BlogCard
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        content={post.content}
                        date={post.date}
                    />
                ))}
            </div>
        </div>
    </>
    );
};

export default PageBlog;

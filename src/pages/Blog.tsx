import BlogPosts from '../json/BlogPostData.json';
import BlogCard from '../components/BlogCard';
import CocktailNavbar from '../components/CocktailNavbar';

const PageBlog = () => {
    return (
    <>
        <CocktailNavbar />
        <h1>Blog de Cócteles</h1>
        <div className="container">
            <div className="row">
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

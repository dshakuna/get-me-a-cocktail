import { useParams } from 'react-router-dom';
import BlogPosts from '../json/BlogPostData.json';
import RelatedCocktails from '../components/RelatedCocktails';
import CocktailNavbar from '../components/CocktailNavbar'; 

const PostDetail = () => {
    const { postId } = useParams<{ postId?: string }>();
    const post = BlogPosts.find(p => p.id === parseInt(postId || '0'));

    if (!post) {
        return <div>Post no encontrado</div>;
    }

    return (
        <div className="container">
            <CocktailNavbar />
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <RelatedCocktails ingredient="Gin" />
        </div>
    );
};

export default PostDetail;

// ArticleDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom';

const ArticleDetails = ({ apiKey }) => {
    const [article, setArticle] = useState(null);
    const { id } = useParams();
    const decodedId = decodeURIComponent(id);

    useEffect(() => {
        const fetchArticleDetails = async () => {
            try {
                const apiUrl = `https://newsapi.org/v2/everything?q=${decodedId}&apiKey=${apiKey}`;
                const response = await fetch(apiUrl);
                const data = await response.json();

                if (data.articles && data.articles.length > 0) {
                    // Assuming the first result is the article you want
                    setArticle(data.articles[0]);
                }
            } catch (error) {
                console.error('Error fetching article details:', error);
            }
        };

        fetchArticleDetails();
    }, [apiKey, decodedId]);

    return (
        <div className="article-details-container">
            {article ? (
                <div className="article-details">
                    <h1 className="article-title">{article.title}</h1>
                    <p className="published-date">{article.publishedAt}</p>
                    {article.urlToImage && <img src={article.urlToImage} alt={article.title} className="article-image" />}
                    <p className="article-content">{article.content}</p>
                    <p className='article-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, soluta ut accusantium voluptatibus deserunt delectus, praesentium est nam reprehenderit repudiandae rerum! Tenetur, laborum facere explicabo minus esse at ex quia. Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p> 
                    <p className='article-content'> Tempore dignissimos architecto, doloribus minus eos porro. Aspernatur voluptatibus earum ipsa tempora impedit, delectus nobis excepturi beatae exercitationem quas repellendus officia obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odio dolor ex cum, assumenda temporibus quaerat, enim recusandae cupiditate dolores ea deserunt accusamus eveniet pariatur aperiam consectetur repellat. Cum, porro?Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <p className='article-content'> Aliquam voluptates distinctio quos quae animi, perspiciatis placeat alias laudantium harum nulla vero dolor aut, quia temporibus suscipit, possimus aperiam tempora? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eius aperiam cum nisi placeat doloremque fugit quidem in quis et, repellendus sed blanditiis deserunt cumque, dolorem at dolores, est commodi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum minus ab ipsa, consectetur magni consequuntur voluptatem reiciendis tempore, saepe, aliquam officiis eveniet id! Nemo fuga, id libero provident earum commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quae facilis aperiam? In quas fuga inventore aspernatur numquam? Magnam molestias inventore sequi libero expedita cum veritatis rerum neque harum enim?</p>
                </div>
            ) : (
                <p>Loading article details...</p>
            )}
        </div>
    );
};

export default ArticleDetails;

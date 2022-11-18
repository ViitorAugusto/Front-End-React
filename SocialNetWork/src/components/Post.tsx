import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { format, formatDistanceToNow } from 'date-fns';
import  ptBR  from 'date-fns/locale/pt-BR';
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react';


interface Author {
    name: string;
    avatarUrl: string;
    role: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;

}

interface PostProps {
    author: Author;
    publishedAt: Date;
    content: Content[];
}


export function Post({ author, content, publishedAt }: PostProps) {
    const [comments, setComments ] = useState([
        'Postagem muito boa'
    ])

    const [newCommentText, setNewCommentText] = useState('')

   

    const publishedAtFormatted = format(publishedAt, "d 'de' MMMM yyyy' às' HH:mm'h'", { locale: ptBR });

    const publishedAtFromNow = formatDistanceToNow(publishedAt, { locale: ptBR ,  addSuffix: true });

    function handleLikeButtonClick(event: FormEvent) {
        event.preventDefault();
        
        setComments([...comments, newCommentText]);
        setNewCommentText('');
       
    }
    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);

    }
    function deleteComment(commentDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => comment !== commentDelete);
        setComments(commentsWithoutDeletedOne);
    }

    function handleNewCommentInvalid(event : InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity(`Esse campo é obrigatório`);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.user}>
                    <Avatar 
                    src={author.avatarUrl}
                    hasBorder={false}
                    />
                    <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedAtFromNow}
                    </time>
            </header>

            <div className={styles.content}>
                {content.map((item) => {
                    if (item.type === 'paragraph') {
                        return <p key={item.content}>{item.content}</p>
                    }
                    if (item.type === 'link') {
                        return <p key={item.content}><a href='#'>{item.content}</a></p>
                    }
                })  }
               
                
            </div>

            <form onSubmit={handleLikeButtonClick} className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>
                
                <textarea
                name='comment'
                placeholder='Deixe seu comentário' 
                value={newCommentText}
                onChange={handleNewCommentChange}
                onInvalid={handleNewCommentInvalid}
                required
                />
                
                <footer>
                <button type='submit' 
                disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((comments) => {
                    return <Comment key={comments} content={comments} 
                    onDeleteComment= { deleteComment }
                    />
                })}
              
                
            </div>

        </article>
    )
}
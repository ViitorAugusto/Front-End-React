import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment ({ content , onDeleteComment  }: CommentProps) {
    
    const [likeCount, setLikeCount] = useState(0);


    function handleDeleteComment () {
        console.log('delete comment');
        onDeleteComment (content);
    }
    function handleLikeComment () {
        setLikeCount(likeCount + 1);
    }

    return(
        <div className={styles.comment}>
            <Avatar 
            src="https://avatars.githubusercontent.com/u/106840657?v=4"
            hasBorder={false}
            />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                        <strong>Vitor Augusto</strong>
                        <time title='11 de Abril às 23:59' dateTime='2022-10-02 08:12:45'>há 3 min</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        
                        <ThumbsUp />
                        Aplaudir<span>{likeCount}</span>
                    </button>
                   
                </footer>

            </div>
        </div>
    )
}
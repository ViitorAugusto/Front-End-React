import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './components/App.module.css';

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/diego3g.png',
            name: 'Vitor Augusto',
            role: 'Frontend Developer',
          },
        content: [
         { type : 'paragraph', content :'Fala galeraa 🖖🖖 🚀',},    
         { type : 'paragraph', content :'Acabei de subir um projeto no meu portifa. É um projeto que eu fiz no NLW, evento da rocketseat.'},
         { type :'link', content : 'Vitor.design/docotorcare 🖖🖖'},
        ],
        publishedAt: new Date('2022-10-11T23:59:59.000Z'),
    },

    {
      id: 2,
      author: {
          avatarUrl: 'https://github.com/maykbrito.png',
          name: 'Augusto',
          role: 'Back-End Developer',
        },
      content: [
       { type : 'paragraph', content :'Fala galeraa 🖖🖖 🚀',},    
       { type : 'paragraph', content :'Acabei de subir um projeto no meu portifa. É um projeto que eu fiz no NLW, evento da rocketseat.'},
       { type :'link', content : 'Vitor.design/docotorcare 🖖🖖</a>'},
      ],
      publishedAt: new Date('2021-04-15 23:59:59'),
  },
  ];


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
          })
          }
        </main>
      </div>


    </div>
  )
}



import { useState } from 'react';
import { useSelector } from 'react-redux';
import Posts from './Posts';
import './Posts.css';
import instance from '../../axios';

const CreatePosts = () => {
  const [text, setText] = useState();
  const [posts, setPost] = useState([]);
  const nick = useSelector((state) => state.authorization.data.nickname);
  setInterval(() => {
    instance.get('/posts/get').then((responce) => setPost(responce.data));
  }, 1000);
  function addPost(event) {
    if (event.key === 'Enter') {
      instance.post('/posts/addpost', {
        nickname: nick,
        value: text,
      });
      setText('');
    }
  }

  return (
    <div>
      <title>Диалог</title>
      <div className="scroller">
        <Posts posts={posts} />
      </div>
      <div className="tool">
        <input
          onChange={(event) => setText(event.target.value)}
          placeholder="Сообщение"
          value={text}
          className="inp"
          onKeyDown={addPost}
        />
      </div>
    </div>
  );
}; export default CreatePosts;

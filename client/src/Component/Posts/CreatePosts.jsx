import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Posts from './Posts';
import './Posts.css';
import instance from '../../axios';

function CreatePosts() {
  const [text, setText] = useState();
  const [posts, setPost] = useState([]);
  const nick = useSelector((state) => state.authorization.data.nickname);

  setInterval(() => {
    instance.get('/posts/get').then((responce) => {
      setPost(responce.data);
    });
  }, 3000);

  function addPost() {
    instance.post('/posts/addpost', {
      nickname: nick,
      value: text,
    }).then((responce) => {
      const newPost = {
        nickname: responce.data.nickname,
        value: responce.data.value,
      };
      setPost([...posts, newPost]);
    });
    setText('');
  }

  return (
    <div>
      <input
        onChange={(event) => setText(event.target.value)}
        placeholder="Сообщение"
        value={text}
        className="inp"
      />
      <button type="button" className="addPost" onClick={addPost}>Опубликовать</button>
      <div className="scroller">
        <Posts posts={posts} />
      </div>
    </div>
  );
} export default CreatePosts;

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPostText } from '../../store/Dialogs/action';
import Posts from './Posts';
import './Posts.css';

function CreatePosts() {
  const [text, setText] = useState();
  const [posts, setPost] = useState([]);
  const nick = useSelector((state) => state.authorization.data.nick);
  // eslint-disable-next-line no-underscore-dangle
  const ID = useSelector((state) => state.authorization.data._id);
  const red = useSelector((state) => state.Dialogs);
  const dispatch = useDispatch();
  function addPost() {
    const newPost = {
      id: ID,
      value: text,
      user: nick,
    };
    setPost([...posts, newPost]);
    setText('');
    dispatch(setPostText([...posts, newPost]));
  }
  return (
    <div>
      <textarea
        onChange={(event) => setText(event.target.value)}
        placeholder="Сообщение"
        value={text}
      />
      <button type="button" className="addPost" onClick={addPost}>Опубликовать</button>
      <Posts posts={red.Dialog} />
    </div>
  );
} export default CreatePosts;

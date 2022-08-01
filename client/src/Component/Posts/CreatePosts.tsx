import React, { useState } from 'react';
import { IPosts } from '../../../types/types';
import { instance } from '../../axios';
import { useAppSelector } from '../../hooks/useAppSelector';
import Posts from './Posts';
import './Posts.css';

const CreatePosts: React.FC = () => {
    const [text, setText] = useState<string>();
    const [posts, setPost] = useState<IPosts[]>([]);
    const { data } = useAppSelector((state) => state.authorization);
    setInterval(() => {
        instance.get('/posts/get').then((responce) => {
            setPost(responce.data);
            console.log(responce.data);
        });
    }, 10000);
    function addPost(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            instance.post('/posts/addpost', {
                nickname: data.nickname,
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
};
export default CreatePosts;

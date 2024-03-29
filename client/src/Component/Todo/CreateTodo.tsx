import React, { useState } from 'react';
import './CreateTodo.css';
import Todos from './Todos';

interface TodoCont {
    message: string;
    active: boolean;
    complete: boolean;
}

const CreateTodo: React.FC = () => {
    const [message, setMessage] = useState<string>('');
    const [filterArr, setFilterArr] = useState<string>('All');
    const [todo, setTodo] = useState<TodoCont[]>([]);

    const Newtodo = {
        message,
        active: false,
        complete: false,
    };

    function addTodo() {
        if (message !== '') {
            setTodo([...todo, Newtodo]);
            setMessage('');
        }
    }

    const PressEnter = (e: React.KeyboardEvent<HTMLElement>) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    };

    return (
        <div className="todoContiner">
            <div className="todoHeader">
                <input
                    value={message}
                    onKeyDown={PressEnter}
                    className="inpaddtodo"
                    type="text"
                    placeholder="Add to Todo"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
                />
                <button type="button" className="btnaddtodo" onClick={addTodo}>
                    Add
                </button>
            </div>

            <div className="todocont2">
                {todo.length !== 0 ? (
                    <div>
                        {(() => {
                            switch (filterArr) {
                                case 'All':
                                    return (
                                        <div>
                                            {todo.map(({ message }: TodoCont, idx: number) => (
                                                <div key={idx}>
                                                    <div className="todocont">
                                                        <div
                                                            className={todo[idx].complete ? 'complete' : 'nocomplete'}
                                                            defaultChecked={todo[idx].complete}
                                                            onClick={() => (todo[idx].complete = !todo[idx].complete)}
                                                        >
                                                            {message}
                                                        </div>
                                                        <input
                                                            type="checkbox"
                                                            checked={todo[idx].active}
                                                            onChange={() => (todo[idx].active = !todo[idx].active)}
                                                            className="checkactive"
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    );
                                case 'Completed':
                                    return (
                                        <div>
                                            {todo
                                                .filter((todo: { complete: boolean }) => todo.complete === true)
                                                .map(({ message, complete, active }: TodoCont) => (
                                                    <Todos message={message} complete={complete} active={active} />
                                                ))}
                                        </div>
                                    );
                                case 'Active':
                                    return (
                                        <div>
                                            {todo
                                                .filter((todo: { active: boolean }) => todo.active === true)
                                                .map(({ message, complete, active }: TodoCont) => (
                                                    <Todos message={message} complete={complete} active={active} />
                                                ))}
                                        </div>
                                    );
                            }
                        })()}
                    </div>
                ) : (
                    <div className="empty">
                        <span>Пусто...</span>
                    </div>
                )}
            </div>

            <div className="btnfunc">
                <button value={filterArr} onClick={() => setFilterArr('All')}>
                    All
                </button>

                <button type="button" onClick={() => setFilterArr('Active')}>
                    Active
                </button>

                <button value={filterArr} onClick={() => setFilterArr('Completed')}>
                    Completed
                </button>

                <button type="button">Rcomplete</button>
            </div>
        </div>
    );
};

export default CreateTodo;

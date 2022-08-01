import * as React from 'react';

interface TodoCont {
    message: string;
    active: boolean;
    complete: boolean;
}

const Todos: React.FC<TodoCont> = ({ message, active, complete }) => {
    return (
        <div>
            <div className="todocont">
                <div className={complete ? 'complete' : 'nocomplete'} defaultChecked={complete}>
                    {message}
                </div>
                <input type="checkbox" checked={active} className="checkactive" />
            </div>
        </div>
    );
};

export default Todos;

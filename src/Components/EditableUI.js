import React, { useRef, useState } from "react";
import Editable from "./Editable";
import usePersistedState from './usePersistedState';

function EditableUI() {
    const inputRef = useRef();
    const textareaRef = useRef();
    const [task1, setTask1] = usePersistedState('task1', '');
    const [description1, setDescription1] = usePersistedState('description1', '');
    const [task2, setTask2] = usePersistedState('task2', '');
    const [description2, setDescription2] = usePersistedState('description2', '');
    const [task3, setTask3] = usePersistedState('task3', '');
    const [description3, setDescription3] = usePersistedState('description3', '');
    const [task4, setTask4] = usePersistedState('task4', '');
    const [description4, setDescription4] = usePersistedState('description4', '');

    function shortEditable() {
        return class extends React.Component {

        }
    }


    return (
        <div className="w-full max-w-md mx-auto">
            <form className=" bg-white rounded px-8 py-8 pt-8">
                <div className="px-4 pb-4">
                    <h1 className="text-uppercase py-2 px-3 font-bold text-xl">
                        Editable Questionnaire
                    </h1>
                </div>
                <div>
                    <div className="px-4 pb-4">
                        <Editable
                            text={task1}
                            placeholder="Write a task1 name"
                            className={"Question"}
                            childRef={inputRef}
                            type="input"
                        >
                            <input
                                ref={inputRef}
                                type="text"
                                name="task1"
                                placeholder="Write a task name"
                                value={task1}
                                onChange={e => setTask1(e.target.value)}
                            />
                        </Editable>
                    </div>
                    <div className="px-4 pb-4">
                        <Editable
                            text={description1}
                            placeholder="Description for the task"
                            childRef={textareaRef}
                            type="textarea"
                        >
                            <textarea
                                ref={textareaRef}
                                name="description1"
                                placeholder="Description for the task"
                                rows="5"
                                value={description1}
                                onChange={e => setDescription1(e.target.value)}
                            />
                        </Editable>
                    </div>
                </div>
                <div>
                    <div className="px-4 pb-4">
                        <Editable
                            text={task2}
                            placeholder="Type a useful date"
                            className={"Question"}
                            childRef={inputRef}
                            type="input"
                        >
                            <input
                                ref={inputRef}
                                type="text"
                                name="task2"
                                placeholder="Type a useful date"
                                value={task2}
                                onChange={e => setTask2(e.target.value)}
                            />
                        </Editable>
                    </div>
                    <div className="px-4 pb-4">
                        <Editable
                            text={description2}
                            placeholder="Description for the event on that date :)"
                            childRef={textareaRef}
                            type="textarea"
                        >
                            <textarea
                                ref={textareaRef}
                                name="description2"
                                placeholder="Description for the event on that date :)"
                                rows="5"
                                value={description2}
                                onChange={e => setDescription2(e.target.value)}
                            />
                        </Editable>
                    </div>
                </div>
                <div>
                    <div className="px-4 pb-4">
                        <Editable
                            text={task3}
                            placeholder="Write a hobby"
                            className={"Question"}
                            childRef={inputRef}
                            type="input"
                        >
                            <input
                                ref={inputRef}
                                type="text"
                                name="task3"
                                placeholder="Write a hobby"
                                value={task3}
                                onChange={e => setTask3(e.target.value)}
                            />
                        </Editable>
                    </div>
                    <div className="px-4 pb-4">
                        <Editable
                            text={description3}
                            placeholder="What is your hobby like?"
                            childRef={textareaRef}
                            type="textarea"
                        >
                            <textarea
                                ref={textareaRef}
                                name="description3"
                                placeholder="What is your hobby like?"
                                rows="5"
                                value={description3}
                                onChange={e => setDescription3(e.target.value)}
                            />
                        </Editable>
                    </div>
                </div>
                <div className="px-4 pb-4">
                    <Editable
                        text={task4}
                        placeholder="What are your favourite Classical music artists?"
                        className={"Question"}
                        childRef={inputRef}
                        type="input"
                    >
                        <input
                            ref={inputRef}
                            type="text"
                            name="task4"
                            placeholder="What are your favourite Classical music artists?"
                            value={task4}
                            onChange={e => setTask4(e.target.value)}
                        />
                    </Editable>
                </div>
                <div className="px-4 pb-4">
                    <Editable
                        text={description4}
                        placeholder="Might be Beethoven, Brahms, Bach....?"
                        childRef={textareaRef}
                        type="textarea"
                    >
                        <textarea
                            ref={textareaRef}
                            name="description4"
                            placeholder="Might be Beethoven, Brahms, Bach....?"
                            rows="5"
                            value={description4}
                            onChange={e => setDescription4(e.target.value)}
                        />
                    </Editable>
                </div>

            </form>
        </div>
    );
}

export default EditableUI;
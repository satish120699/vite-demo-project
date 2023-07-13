import React, { useState } from 'react';
import { Button } from '@/design-system/';
import { checkEmptyValue } from '@/utils';

function HomePage() {
  const [addTodos, setAddTodos] = useState<string>('');
  const [err, setErr] = useState(false);
  const [todos, setTodos] = useState<string[]>([]);
  const [edit, setEdit] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [equal, setEqual] = useState('');

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (checkEmptyValue(addTodos)) return setErr(true);
    const getTodo = todos?.find(item => item.toLowerCase() === addTodos.toLowerCase());
    if (getTodo) return setErr(true);
    isEdit ? setEdit(edit) : setTodos(prev => [...prev, addTodos]);

    // clearing
    setAddTodos('');
    setErr(false);
    setIsEdit(false);
    setEqual('');
  }

  function handleEdit(value: string) {
    const getValue = todos?.map(todo => {
      if (todo.toLowerCase() === value.toLowerCase()) return (todo = edit);
      return todo;
    });
    setTodos(getValue);
    setIsEdit(false);
    setEqual('');
  }

  function handleDelete(value: string) {
    const get = todos.filter(val => val?.toLowerCase() !== value.toLowerCase());
    setTodos(get);
  }

  return (
    <div className="flex justify-center items-center flex-col bg-gray-200">
      <h1 className="text-3xl mb-4 ">Todo lists</h1>
      <form className="flex justify-between items-center" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className={`${err ? 'border-red-400' : 'border-green-300'} border rounded-lg mr-4 px-2`}
          value={addTodos}
          onChange={e => setAddTodos(e.target.value)}
        />
        <Button type="submit" className="px-3 bg-blue-500">
          Create Todo
        </Button>
      </form>
      <br />

      <div className="">
        <h1 className="text-center text-red-400 text-2xl underline mb-3">your todo list</h1>
        {todos?.map((todo, i) => {
          return (
            <h6 key={i} className="flex justify-center items-center">
              <span className="mr-4">{todo}</span>
              {isEdit && equal === todo ? (
                <div className="flex justify-between items-center">
                  <input
                    type="text"
                    className={`border rounded-lg mr-4 px-2`}
                    value={edit}
                    onChange={e => setEdit(e.target.value)}
                  />
                  <Button type="submit" className="px-3 bg-blue-500" onClick={() => handleEdit(todo)}>
                    update Todo
                  </Button>
                </div>
              ) : (
                <Button
                  type="submit"
                  className="bg-slate-400 px-2"
                  onClick={() => {
                    setIsEdit(true);
                    setEqual(todo);
                    setEdit(todo);
                  }}
                >
                  edit
                </Button>
              )}
              <Button type="submit" className="bg-zinc-500 px-2 mr-2" onClick={() => handleDelete(todo)}>
                delete
              </Button>
            </h6>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;

import { useEffect, useReducer } from 'react';
import './App.css';

// jsonplaceholder 에서 제공해주는 api 명세를 기준으로 설계함
type Todo = { id: number; userId: number; title: string; completed: boolean };
type Todos = Todo[];

// 이것보다는, 아래와 같이 관리하는게 더 효과적이다!
type WrongTodosState = {
  isLoading: boolean;
  error?: string;
  todos: Todos;
};

// item 28
type TodosSuccess = {
  todos: Todos;
  type: 'fulfilled';
};
type TodosError = {
  errorMessage: string;
  type: 'error';
};
type TodosPending = {
  type: 'pending';
};

interface TodosSuccessAction extends Pick<TodosSuccess, 'type'> {
  payload: Pick<TodosSuccess, 'todos'>;
}

interface TodosErrorAction extends Pick<TodosError, 'type'> {
  payload: Pick<TodosError, 'errorMessage'>;
}

type TodosPendingAction = Pick<TodosPending, 'type'>;

type TodosState = TodosError | TodosSuccess | TodosPending;
type TodoAction = TodosErrorAction | TodosSuccessAction | TodosPendingAction;

type errorActionFn = (errorMessage: string) => TodosErrorAction;
const errorAction: errorActionFn = errorMessage => ({
  type: 'error',
  payload: { errorMessage },
});

type TodosSuccessActionFn = (todos: Todos) => TodosSuccessAction;
const successAction: TodosSuccessActionFn = todos => ({ payload: { todos }, type: 'fulfilled' });

type TodosPendingActionFn = () => TodosPendingAction;
const pendingAction: TodosPendingActionFn = () => ({ type: 'pending' });

const reducer = (state: TodosState, action: TodoAction): TodosState => {
  switch (action.type) {
    case 'error': {
      const {
        type,
        payload: { errorMessage },
      } = action;

      return { type, errorMessage };
    }
    case 'pending': {
      const { type } = action;

      return { type };
    }
    case 'fulfilled': {
      const {
        type,
        payload: { todos },
      } = action;

      return { type, todos };
    }
    default:
      throw new Error('말도 안되는 타입이 들어왔어요');
  }
};

/**
 * @description: jsonplaceholder를 이용하여 데모 todos호출, 랜덤하게 에러를 반환하게 하기위해 randomChunk 이용
 * */
const fetchTodos = () => {
  const randomChunk = Math.random() < 0.5 ? '' : 'wrong';
  return fetch(`https://jsonplaceholder.typicode.com/todos${randomChunk}`);
};

const useTodos = (): TodosState => {
  const [todosState, dispatch] = useReducer(reducer, pendingAction());
  useEffect(() => {
    const asyncTodosFetch = async () => {
      try {
        const res = await fetchTodos();
        if (!res.ok) {
          throw new Error(`Unable to load todoPage { message: ${res.statusText}, code: ${res.status} } `);
        }

        const todos = (await res.json()) as Todos;
        dispatch(successAction(todos));
      } catch (e: unknown) {
        if (e instanceof Error) {
          dispatch(errorAction(e.message));
        } else {
          dispatch(errorAction('알수없는에러'));
        }
      }
    };
    asyncTodosFetch();
  }, []);

  return todosState;
};

const TodoComponent = () => {
  const todosState = useTodos();
  // 조건문 밖에서는 type 만 추론된다.
  if (todosState.type === 'error') {
    return <div>{todosState.errorMessage}</div>;
  }
  if (todosState.type === 'pending') {
    return <div>loading...</div>;
  }
  return (
    <ul>
      {todosState.todos.map(todo => (
        <li key={todo.id}>
          {todo.title}
          <input type={'checkbox'} checked={todo.completed} />
        </li>
      ))}
    </ul>
  );
};

function App() {
  return <TodoComponent />;
}

export default App;

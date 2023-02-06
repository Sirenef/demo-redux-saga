import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchField from "./components/SearchField";
import { deleteUsers, getUsers } from "./redux/slice/users";

function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.users);
  const users = selector.users;

  const handleDelete = (id) => {
    dispatch(deleteUsers(id));
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="flex flex-col gap-5 items-center font-medium text-lg w-full p-10">
      <SearchField></SearchField>
      <ul>
        {users &&
          users.map((user) => {
            return (
              <li
                key={user.id}
                className="flex items-center justify-between gap-3 mb-1"
              >
                <span>{user.username}</span>
                <button
                  className="p-1 rounded-md text-base bg-red-400 text-white"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;

import themeSlice from "./Features/themeSlice";
import todosSlice from "./Features/todosSlice";

const rootReducer = {
    theme: themeSlice,
    todos: todosSlice
}

export default rootReducer;
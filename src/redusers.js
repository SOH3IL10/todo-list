import filterSlice from "./Features/filterSlice";
import themeSlice from "./Features/themeSlice";
import todosSlice from "./Features/todosSlice";

const rootReducer = {
    theme: themeSlice,
    todos: todosSlice,
    filters: filterSlice
}

export default rootReducer;
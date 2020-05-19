import { createStore } from "redux";

const INITIAL_STATE = {
  data: ["React Native", "ReactJS", "NodeJS", "HTML", "CSS", "JAVA"],
  name: "Jorge",
};

function courses(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_COURSE":
      return { ...state, data: [...state.data, action.title] };
    case "REMOVE_COURSE":
      console.log(state);
      return { ...state, data: state.data.slice(0, -1) };
    default:
      return state;
  }
}

const store = createStore(courses);

export default store;

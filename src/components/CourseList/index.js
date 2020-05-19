import React from "react";
import { useSelector, useDispatch } from "react-redux";

// import { Container } from './styles';

function addCourseAction(title) {
  return {
    type: "ADD_COURSE",
    title,
  };
}
function removeCourseAction(title) {
  return {
    type: "REMOVE_COURSE",
    title,
  };
}



export default function CourseList() {
  // const qty = 5;
  // const courses = useSelector(state => state.data.slice(0, qty), [qty]);
  const { data: courses, name } = useSelector(state => state);
  const dispatch = useDispatch();
  console.log(name);
  function addCourse() {
    dispatch(addCourseAction("GraphQL"));
  }
  function removeCourse(){
    dispatch(removeCourseAction());
  }

  return (
    <>
      <ul>
        {courses.map(course => (
          <li key={course}>{course}</li>
        ))}
      </ul>
      <button type="button" onClick={addCourse}>
        Adicionar Curso
      </button>
      <button type="button" onClick={removeCourse}>
        Remover Curso
      </button>
    </>
  );
}

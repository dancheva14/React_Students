import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import actionTYpes from "./actionTypes";
import actionTypes from "./actionTypes";

export function saveCourse(course) {
  return courseApi.saveCourse(course).then((savedCourse) => {
    dispatcher.dispatch({
      actionType: course.id
        ? actionTypes.UPDATE_COURSES
        : actionTYpes.CREATE_COURSE,
      course: savedCourse,
    });
  });
}

export function loadCourses() {
  return courseApi.getCourses().then((_courses) => {
    dispatcher.dispatch({
      actionType: actionTYpes.LOAD_COURSES,
      courses: _courses,
    });
  });
}

export function deleteCourse(id) {
  return courseApi.deleteCourse(id).then(() => {
    dispatcher.dispatch({
      actionType: actionTYpes.DELETE_COURSES,
      id: id,
    });
  });
}

import React, { useContext } from 'react';
import bemCssModules from 'bem-css-modules';

import Course from '..Course/Course'
import {default as UserCoursesStyles} from './UserCourses.module.scss';
import { StoreContext } from '../../store/StoreProvider';

const style = bemCssModules(UserCoursesStyles);

const UserStyles = () =>{
  const {user, courses} = useContext(StoreContext);

  const buyedCourses = courses
  .filter(course => user.courses.includes(course.id))
  .map(course => <Course isUserContext={true} key={course.id} {...course}/>);

 
  return (
    <section className={style()}>
      <h2 className={style('title')}>Twoje wykupione kursy </h2>
      <ul className={style('list')}></ul>
      {buyedCourses}
    </section>
  )
}


export default UserStyles;
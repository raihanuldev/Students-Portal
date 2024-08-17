import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hook';

const ManageStudents = () => {
    const students = useAppSelector((state) => state.students);
  
      console.log(students);
    return (
        <div>
            
        </div>
    );
};

export default ManageStudents;
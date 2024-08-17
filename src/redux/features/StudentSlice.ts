import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TStudent = {
  studentName: string;
  roll: string;
  department: string;
  adreess: string;
  phone: string;
};

const initialState: TStudent[] = [];

const StudentSlice = createSlice({
  name: "studentPortal",
  initialState,
  reducers: {
    addStudent: (state: TStudent[], action: PayloadAction<TStudent>) => {
        console.log("Current-Payload",action.payload);
        state.push(action.payload)
    },
  },
});

export const { addStudent } = StudentSlice.actions;
export default StudentSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const StudentSlice = createSlice({
  name: "Students",
  initialState: {
    students_female: [
      { name: "Esther", Gen: 22 },
      { name: "Philo", Gen: 22 },
      { name: "Bonita", Gen: 22 },
      { name: "Blessing", Gen: 22 },
    ],
    students_male: [
        { name: "John", Gen: 22 },
        { name: "Samuel", Gen: 22 },
        { name: "Glory", Gen: 22 },
        { name: "Confidence", Gen: 22 },
      ],

  },

  reducers: {
    addNewPupils(state,action) => {
        state.students_female = [... state.students_female = action.payload]gdf
    },
  }
});

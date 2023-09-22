import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  commentsByItem: {},
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state, action) => {
      const { itemId, text } = action.payload;
      if (itemId) {
        if (state.commentsByItem[itemId]) {
          state.commentsByItem[itemId].push(text);
        } else {
          state.commentsByItem[itemId] = [text];
        }
      }
    },
  },
});

export const { addComment, changeCommentColor } = commentsSlice.actions;
export default commentsSlice.reducer;

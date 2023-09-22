import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../store/reducers/commentsReducer";
import { useState, useEffect } from "react";
import ListComment from "./ListComment/ListComment";

export default function ListComments() {
  const [commentColor, setCommentColor] = useState("#000000");
  const [commentColors, setCommentColors] = useState({});
  const itemsList = useSelector((state) => state.items.itemsList);
  const [hasItems, setHasItems] = useState(itemsList.length > 0);
  const [containerHeight, setContainerHeight] = useState(200);
  const [commentText, setCommentText] = useState("");
  const dispatch = useDispatch();
  const selectedItemId = useSelector((state) => state.items.selectedItemId);
  const comments = useSelector(
    (state) => state.comments.commentsByItem[selectedItemId] || []
  );

  useEffect(() => {
    setHasItems(itemsList.length > 0);
  }, [itemsList]);

  if (selectedItemId < 0) {
    return;
  }

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!hasItems) {
      return;
    }

    const newCommentColor = commentColor;

    dispatch(
      addComment({
        itemId: selectedItemId,
        text: commentText,
        color: newCommentColor,
      })
    );

    setCommentColors({
      ...commentColors,
      [comments.length]: newCommentColor,
    });
    setContainerHeight(containerHeight + 60);
    setCommentText("");
  };

  return (
    <div className="el-2" style={{ height: `${containerHeight}px` }}>
      <h2>Comments #{selectedItemId}</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <ListComment
              comment={comment}
              commentColor={commentColors[index]}
            />
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddComment}>
        <input
          type="color"
          value={commentColor}
          onChange={(e) => setCommentColor(e.target.value)}
        />
        <textarea
          cols="45"
          rows="4"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          required
        ></textarea>
        <button className="btn-comments" type="submit">
          Add New
        </button>
      </form>
    </div>
  );
}

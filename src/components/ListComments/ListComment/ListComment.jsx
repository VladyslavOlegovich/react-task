import PropTypes from "prop-types";
import "./ListComment.css";
function ListComment({ comment, commentColor }) {
  const style = {
    backgroundColor: commentColor, 
  };
  return (
    <div className="commentItem">
      <div className="block" style={style}></div>
      <p>{comment}</p>
    </div>
  );
}
ListComment.propTypes = {
  comment: PropTypes.string.isRequired,
  commentColor: PropTypes.string,
};
export default ListComment;

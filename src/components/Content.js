import React, { useContext } from "react";
import { DataContext } from "../context/Context";
import CommentCard from "./CommentCard";

const Content = () => {
  const { commentData } = useContext(DataContext);
  return (
    <div className="content">
      {commentData && (
        <CommentCard
          data={commentData}
          profileImage={commentData.content.user.profileImage}
          name={commentData.content.user.name}
          date={commentData.date}
          image={commentData.content.image}
          like={commentData.like}
          dislike={commentData.dislike}
          article={commentData.content.article}
        />
      )}
      {commentData?.comments &&
        commentData.comments.map((item) => (
          <CommentCard
            profileImage={item.user.profileImage}
            name={item.user.name}
            date={item.elapsedTime}
            like={item.like}
            dislike={item.dislike}
            article={item.comment}
          />
        ))}
    </div>
  );
};

export default Content;

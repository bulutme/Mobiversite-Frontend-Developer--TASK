import React from "react";

const CommentCard = ({
  data,
  profileImage,
  name,
  date,
  image,
  like,
  dislike,
  article,
}) => {
  return (
    <div className="commentCard">
      <div className="commentCard-left">
        <img src={profileImage} alt="" />
      </div>
      <div className="commentCard-mid">
        <div>
          <h4>{name} •</h4>
          <span>
            {date} {image && <div>• 9:41</div>}
          </span>
        </div>
        <h4>{article}</h4>
        {image && (
          <div className="img-div">
            <img src={image} alt="" />
          </div>
        )}
        <div>
          <span>Reply</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="11"
              viewBox="0 0 10 11"
            >
              <defs></defs>
              <path
                class="a"
                d="M28.032,32h2.4a.594.594,0,0,1,.6.589V37.5h2.6a.588.588,0,0,1,.425,1.007l-4.4,4.321a.609.609,0,0,1-.851,0l-4.4-4.321a.589.589,0,0,1,.425-1.007h2.595v-4.91A.594.594,0,0,1,28.032,32Z"
                transform="translate(-24.234 -32)"
              />
            </svg>
            {dislike}
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="11"
              viewBox="0 0 10 11"
            >
              <defs>
                <style></style>
              </defs>
              <path
                class="a"
                d="M3.8,0H6.2a.594.594,0,0,1,.6.589V5.5H9.4a.588.588,0,0,1,.425,1.007l-4.4,4.321a.609.609,0,0,1-.851,0L.177,6.506A.589.589,0,0,1,.6,5.5H3.2V.589A.594.594,0,0,1,3.8,0Z"
                transform="translate(10 11) rotate(180)"
              />
            </svg>
            {like}
          </span>
        </div>
      </div>
      <div className="commentCard-right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="4"
          height="19"
          viewBox="0 0 4 19"
        >
          <defs></defs>
          <path
            class="a"
            d="M19.5,226a2,2,0,1,1-2-2A2,2,0,0,1,19.5,226Zm5.5-2a2,2,0,1,0,2,2A2,2,0,0,0,25,224Zm-15,0a2,2,0,1,0,2,2A2,2,0,0,0,10,224Z"
            transform="translate(-224 27) rotate(-90)"
          />
        </svg>
      </div>
    </div>
  );
};

export default CommentCard;

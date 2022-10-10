import React from "react";

const PostCard = () => {
  return (
    <div className="card border rounded-sm bg-white my-4">
      <div className="card-header p-3 border-b">
        <div className="flex justify-between">
          <div>
            <span>Monzumarket</span>
          </div>
          <div>
            <button>더보기</button>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div>
          <img src="https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=" />
        </div>
        <div className="card-content p-3 ">본문영역</div>
      </div>
      <div className="card-footer p-3 border-t">댓글 달기</div>
    </div>
  );
};

export default PostCard;

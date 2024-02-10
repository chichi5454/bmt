/** @format */

import React, { useState } from "react";
import { papersData } from "../../../../../Helpers/papers/papersData";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ReplyIcon from "@mui/icons-material/Reply";

import "./Papers.css";

const Papers = ({ searchValue }) => {
  const [papersView, setPapersView] = useState(3);
  const [commentInput, setCommentInput] = useState("");
  const [replyInput, setReplyInput] = useState("");
  const [selectedPaperId, setSelectedPaperId] = useState(null);

  const filteredData = papersData.filter((paper) =>
    paper.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  // when loadmore buton is clicked, display all papers
  const loadMore = () => {
    setPapersView(papersView + 3);
  };
  // when Initial view button is clicked, go back to initial 3 displayed
  const loadLess = () => {
    setPapersView(3);
  };

  const handleCommentClick = (paperId) => {
    // Show/hide comment input for the selected paper
    setSelectedPaperId(selectedPaperId === paperId ? null : paperId);
  };

  const handleReplyClick = (paperId) => {
    // Show/hide reply input for the selected paper
    setSelectedPaperId(selectedPaperId === paperId ? null : paperId);
  };

  const handleCommentSubmit = (paperId) => {
    // Implement logic to handle comment submission
    console.log(`Comment submitted for paper ${paperId}: ${commentInput}`);
    setCommentInput("");
    setSelectedPaperId(null);
  };

  const handleReplySubmit = (paperId) => {
    // Implement logic to handle reply submission
    console.log(`Reply submitted for paper ${paperId}: ${replyInput}`);
    setReplyInput("");
    setSelectedPaperId(null);
  };

  return (
    <div className="papers-container">
      {filteredData.slice(0, papersView).map((papers) => (
        <div key={papers.id} className="papers-container-details">
          <div className="papers-container-title">
            <h4>Title:</h4>
            <p>{papers.title}</p>
          </div>
          <div className="papers-container-title">
            <h4>Description: </h4>
            <p>{papers.description}</p>
          </div>
          <div className="papers-container-comments">
            <div className="paper-container-rep">
              <div className="icon-details">
                <ChatBubbleIcon
                  className="paper-icon"
                  onClick={() => handleCommentClick(papers.id)}
                />
                <p className="paper-icon-text">Comment</p>
              </div>

              {/* the comment input and button */}
              {selectedPaperId === papers.id && (
                <div className="paper-lower-one">
                  <input
                    type="text"
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                  />
                  <button onClick={() => handleCommentSubmit(papers.id)}>
                    Comment
                  </button>
                </div>
              )}
            </div>
            <div className="paper-container-rep">
              <div className="icon-details">
                <p>Reply</p>
                <ReplyIcon
                  className="paper-icon"
                  onClick={() => handleReplyClick(papers.id)}
                />
              </div>
              {/* the Reply input and button */}
              {selectedPaperId === papers.id && (
                <div className="paper-lower-one">
                  <input
                    type="text"
                    value={replyInput}
                    onChange={(e) => setReplyInput(e.target.value)}
                  />
                  <button onClick={() => handleReplySubmit(papers.id)}>
                    Reply
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
      {/* buttons load more and initial view */}
      <div className="papers-container-details-btn">
        <button onClick={loadMore}>Load More</button>
        <button onClick={loadLess}>Initial View</button>
      </div>
    </div>
  );
};

export default Papers;

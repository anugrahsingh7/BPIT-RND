 import React from 'react';
import styled from 'styled-components';

const Card = ({ title, excerpt, category, author, date, image }) => {
  return (
    <StyledWrapper>
      <div className="card">

        {/* FIRST FACE → Image + Category + Title */}
        <div className="first-content">
          {image ? (
            <img src={image} alt={title} className="card-img" />
          ) : (
            <div className="fallback-img" />
          )}

          <div className="first-text">
            {category && <span className="category">{category}</span>}
            <h3 className="title">{title}</h3>
          </div>
        </div>

        {/* SECOND FACE → Excerpt + Author + Date */}
        <div className="second-content">
          <div className="second-text">
            {excerpt && <p className="excerpt">{excerpt}</p>}

            {(author || date) && (
              <div className="meta">
                <span>{author}</span>
                <span>{date}</span>
              </div>
            )}
          </div>
        </div>

      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    min-width: 400px;
    max-width: 400px;
    min-height: 500px;
    max-height: 500px;
    background: rgba(255,255,255,0.05);
    transition: all 0.4s;
    border-radius: 15px;
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    position: relative;
    backdrop-filter: blur(10px);
  }

  .card:hover {
    transform: scale(1.03);
    border-radius: 20px;
    cursor: pointer;
  }

  /* FIRST CONTENT (FRONT) */
  .first-content {
    height: 100%;
    width: 100%;
    position: absolute;
    transition: all 0.4s;
    opacity: 1;
    display: flex;
    flex-direction: column;
  }

  .card-img {
    width: 100%;
    height: 45%;
    object-fit: cover;
  }

  .fallback-img {
    width: 100%;
    height: 70%;
    background: linear-gradient(45deg, #30309490, #e7132990);
  }

  .first-text {
    padding: 20px;
    color: white;
  }

  .category {
    background: rgba(255,255,255,0.1);
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 12px;
    color: #e71329;
    border: 1px solid rgba(255,255,255,0.2);
  }

  .title {
    margin-top: 10px;
    font-size: 1.4rem;
    font-weight: 600;
  }

  /* Hide first face on hover */
  .card:hover .first-content {
    height: 0;
    opacity: 0;
  }

  /* SECOND CONTENT (BACK) */
  .second-content {
    height: 0%;
    width: 100%;
    opacity: 0;
    transition: all 0.4s;
    transform: rotate(90deg) scale(-1);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card:hover .second-content {
    opacity: 1;
    height: 100%;
    transform: rotate(0deg);
  }

  .second-text {
    padding: 20px;
    color: white;
    text-align: center;
  }

  .excerpt {
    font-size: 1rem;
    opacity: 0.8;
    margin-bottom: 15px;
  }

  .meta {
    margin-top: 10px;
    font-size: 14px;
    opacity: 0.8;
    display: flex;
    justify-content: space-between;
  }
`;

export default Card;


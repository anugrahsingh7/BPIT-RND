import React, { useState } from "react";
import styled from "styled-components";

const Card = ({ title, excerpt, category, author = [], date, image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const truncatedExcerpt =
    excerpt && excerpt.length > 220
      ? `${excerpt.slice(0, 220).trim()}…`
      : excerpt;
  const authorNames =
    author.length === 1 ? author[0].name : `${author.length} Contributors`;

  return (
    <StyledWrapper>
      <article className="card">
        <div className="media">
          {image ? (
            <img src={image} alt={title} className="card-img" />
          ) : (
            <div className="fallback-img" aria-hidden="true" />
          )}
          {category && <span className="category-chip">{category}</span>}
        </div>

        <div className="body">
          <h3 className="title">{title}</h3>
          {author.length > 0 && (
            <div className="author-list">
              {author.slice(0, 2).map((a, index) => (
                <div key={index} className="author-item">
                  <img
                    src={a.photo || "/default-author.png"}
                    alt={a.name}
                    className="author-photo"
                  />
                  <span className="author-name">{a.name}</span>
                </div>
              ))}
              {author.length > 2 && (
                <span className="author-extra">+{author.length - 2} more</span>
              )}
            </div>
          )}

          {excerpt && (
            <p className="excerpt">
              {truncatedExcerpt}
              {excerpt.length > 220 && (
                <button
                  type="button"
                  className="read-more"
                  onClick={() => setIsModalOpen(true)}
                >
                  Read more
                </button>
              )}
            </p>
          )}

          {(author.length > 0 || date) && (
            <div className="meta">
              <span>{authorNames}</span>
              {date && <span>{date}</span>}
            </div>
          )}
        </div>
      </article>

      {isModalOpen && (
        <div className="modal" role="dialog" aria-modal="true">
          <div className="modal-content">
            <div className="modal-header">
              <h4>{title}</h4>
              <button
                type="button"
                className="close"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close"
              >
                ×
              </button>
            </div>
            {date && <p className="modal-date">{date}</p>}
            {author.length > 0 && (
              <p className="modal-authors">{authorNames}</p>
            )}
            <div className="modal-body">
              <p>{excerpt}</p>
            </div>
          </div>
          <div className="backdrop" onClick={() => setIsModalOpen(false)} />
        </div>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;

  .card {
    width: 320px;
    min-height: 420px;
    background: rgba(9, 11, 28, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease, border 0.3s ease;
  }

  .card:hover {
    transform: translateY(-6px);
    border-color: rgba(255, 255, 255, 0.2);
  }

  .media {
    position: relative;
    width: 100%;
    height: 180px;
    overflow: hidden;
  }

  .card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .fallback-img {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #303094, #e71329);
  }

  .category-chip {
    position: absolute;
    bottom: 12px;
    left: 12px;
    background: rgba(0, 0, 0, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 4px 12px;
    border-radius: 999px;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: white;
  }

  .body {
    padding: 18px 22px 20px;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .title {
    font-size: 1.1rem;
    line-height: 1.4;
    margin: 0;
  }

  .author-list {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  .author-item {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .author-photo {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  .author-name {
    font-size: 0.85rem;
    opacity: 0.85;
  }

  .author-extra {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.6);
  }

  .excerpt {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.75);
    line-height: 1.5;
  }

  .read-more {
    margin-left: 6px;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #e71329;
    background: transparent;
    border: none;
    cursor: pointer;
    font-weight: 600;
  }

  .read-more:hover {
    text-decoration: underline;
  }

  .meta {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: rgba(255, 255, 255, 0.65);
  }

  .modal {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
  }

  .backdrop {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(3px);
  }

  .modal-content {
    position: relative;
    background: #080a1f;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    padding: 28px;
    width: min(90vw, 560px);
    max-height: 80vh;
    overflow-y: auto;
    color: white;
    z-index: 1;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
  }

  .modal-header h4 {
    font-size: 1.3rem;
    margin: 0;
  }

  .close {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 999px;
    width: 36px;
    height: 36px;
    font-size: 1.2rem;
    color: white;
    cursor: pointer;
  }

  .close:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  .modal-date,
  .modal-authors {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: rgba(255, 255, 255, 0.6);
    margin-top: 10px;
  }

  .modal-body {
    margin-top: 16px;
    font-size: 0.95rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.85);
  }
`;

export default Card;

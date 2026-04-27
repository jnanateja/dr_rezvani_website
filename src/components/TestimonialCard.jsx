import { useId, useState } from 'react';

const previewWordCount = 26;

function buildPreview(text) {
  const words = text.trim().split(/\s+/);

  if (words.length <= previewWordCount) {
    return {
      preview: text,
      expandable: false,
    };
  }

  return {
    preview: `${words.slice(0, previewWordCount).join(' ')}...`,
    expandable: true,
  };
}

export default function TestimonialCard({ name, quote, rating = 5 }) {
  const [expanded, setExpanded] = useState(false);
  const contentId = useId();
  const { preview, expandable } = buildPreview(quote);
  const visibleQuote = expanded || !expandable ? quote : preview;
  const stars = '★'.repeat(rating);

  return (
    <article className="service-card premium-card testimonial-card fade-up">
      <div className="mini-eyebrow">Google Review</div>
      <div className="testimonial-rating" aria-label={`${rating} out of 5 stars`}>
        <span className="testimonial-stars" aria-hidden="true">
          {stars}
        </span>
        <span className="testimonial-rating-text">{rating.toFixed(1)}</span>
      </div>
      <button
        type="button"
        className={`testimonial-card-toggle${expanded ? ' is-expanded' : ''}`}
        onClick={() => setExpanded((current) => !current)}
        aria-expanded={expanded}
        aria-controls={contentId}
      >
        <p id={contentId} className="testimonial-quote">
          "{visibleQuote}"
        </p>
        {expandable ? (
          <span className="testimonial-read-more">
            {expanded ? 'Show less' : 'Read more'}
          </span>
        ) : null}
      </button>
      <div className="testimonial-author">
        <strong>{name}</strong>
      </div>
    </article>
  );
}

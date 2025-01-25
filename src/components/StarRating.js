import React from "react";

const StarRating = ({ rating, maxRating }) => {
  const fullStars = Math.floor(rating); // Full stars
  console.log('fullStars',fullStars);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0; // Half star
  console.log("halfStar",halfStar);
  const emptyStars = maxRating - fullStars - halfStar; // Empty stars
  console.log("emptyStars",emptyStars);

  return (
    <div className="d-flex align-items-center">
      {/* Full Stars */}
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <i key={`full-${i}`} className="bi bi-star-fill text-warning"></i>
        ))}

      {/* Half Star */}
      {halfStar === 1 && <i className="bi bi-star-half text-warning"></i>}

      {/* Empty Stars */}
      {Array(emptyStars)
        .fill(0)
        .map((_, i) => (
          <i key={`empty-${i}`} className="bi bi-star text-warning"></i>
        ))}

      {/* Display the numeric rating */}
      <span className="ms-2">{rating} out of {maxRating}</span>
    </div>
  );
};

export default StarRating;

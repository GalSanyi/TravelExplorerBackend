import Tour from "../../models/Tour.js";
import Review from "../../models/Review.js";

export const createReview = async (req, res) => {
  const tourId = req.params.tourId;
  const newReview = new Review({ ...req.body });
  try {
    const savedReview = await newReview.save();
    //after creating new review, update the review
    await Tour.findByIdAndUpdate(tourId, {
      $push: { reviews: savedReview._id },
    });
    res.status(200).json({
      success: true,
      message: "Review updated successfully",
      data: savedReview,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update review",
    });
  }
};

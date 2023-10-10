import Tour from "../Tour.js";

//creat new tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const sevedTour = await newTour.save();
    res.status(200).json({
      succsess: true,
      data: sevedTour,
      message: "Successfully created",
    });
  } catch (error) {
    res.status(500).json({
      succsess: false,
      message: "Failed to create tour",
    });
  }
};

//uodate tour
export const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      succsess: true,
      message: "Successfully updated",
      data: updatedTour,
    });
  } catch (error) {
    res.status(500).json({
      succsess: false,
      message: "Failed to update tour",
    });
  }
};
//deletetour
export const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    await Tour.findByIdAndDelete(id);
    res.status(200).json({
      succsess: true,
      message: "Successfully deleted",
    });
  } catch (error) {
    res.status(500).json({
      succsess: false,
      message: "Failed to delete",
    });
  }
};
//getSingle tour
export const getSingleTour = async (req, res) => {
  const id = req.params.id;
  try {
    const tour = await Tour.findById(id).populate("reviews");
    res.status(200).json({
      succsess: true,
      message: "Successfull",
      data: tour,
    });
  } catch (error) {
    res.status(404).json({
      succsess: false,
      message: "not found",
    });
  }
};
//getAll tour
export const getAllTour = async (req, res) => {
  //for pagination
  const page = parseInt(req.query.page);

  try {
    const tours = await Tour.find({})
      .populate("reviews")
      .skip(page * 5)
      .limit(5);
    res.status(200).json({
      count: tours.length,
      succsess: true,
      message: "Successfull",
      data: tours,
    });
  } catch (error) {
    res.status(404).json({
      succsess: false,
      message: "not found",
    });
  }
};

//get tour by search
export const getTourBySearch = async (req, res) => {
  //here "i" means case sensitive
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);
  try {
    //gte means greater than or equal
    const tours = await Tour.find({
      city: city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");
    res.status(200).json({
      succsess: true,
      message: "Successfull",
      data: tours,
    });
  } catch (error) {
    res.status(404).json({
      succsess: false,
      message: "not found",
    });
  }
};

//get featured  tour
export const getFeaturedTour = async (req, res) => {
  try {
    const tours = await Tour.find({ featured: true })
      .populate("reviews")
      .limit(5);
    res.status(200).json({
      succsess: true,
      message: "Successfull",
      data: tours,
    });
  } catch (error) {
    res.status(404).json({
      succsess: false,
      message: "not found",
    });
  }
};

//get tour counts
export const getTourCounts = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();
    res.status(200).json({
      succsess: true,

      data: tourCount,
    });
  } catch (error) {
    res.status(500).json({
      succsess: false,
      message: "feiled to get tour counts",
    });
  }
};

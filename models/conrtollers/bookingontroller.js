import Booking from "../Booking.js";

//create new book
export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);
  try {
    const savedBokking = await newBooking.save();
    res.status(200).json({
      success: true,
      message: "You're tour is booked",
      data: savedBokking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
//get single book
export const getBooking = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Booking.findById(id);
    res.status(200).json({
      success: true,
      message: "Success",
      data: book,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Not found",
    });
  }
};
//create all book
export const getAllBooking = async (req, res) => {
  try {
    const books = await Booking.findById(id);
    res.status(200).json({
      success: true,
      message: "Success",
      data: books,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

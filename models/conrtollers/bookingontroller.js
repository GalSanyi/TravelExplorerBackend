import Booking from "../Booking.js";
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
export const getBooking = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Booking.findById(id);
    set.status(200).json({
      success: true,
      message: "Success",
      data: book,
    });
  } catch (error) {}
};

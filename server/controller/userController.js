import User from "../modals/userModals.js";

export const create = async (req, res) => {
  try {
    const userData = new User(req.body);
    console.log("i am from backend" + userData);
    if (!userData) {
      console.log("userdata is null");
      return res.status(404).json({ msg: "user not found" });
    }
    const saveData = await userData.save();
    res.status(200).json(saveData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

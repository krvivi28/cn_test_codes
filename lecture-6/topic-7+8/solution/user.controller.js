import { user } from "./user.model.js";

export const renderUpdateForm = (req, res) => {
  res.render("update-form", { user });
};

export const updateUser = (req, res) => {
  res.status(201).render("update-form", { user: req.body });
};

export const handleGet = (req, res) => {
  res.render("index", { show: "false" });
};

export const handlePost = (req, res) => {
  const { input } = req.body;
  const { randomNumber } = req.cookies;
  if (randomNumber === input)
    res.render("index", { show: "true", status: true });
  else res.render("index", { show: "true", status: false });
};

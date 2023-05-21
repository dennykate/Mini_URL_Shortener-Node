import ShortUrl from "../model/shortUrl.js";

export const showAll = async (req, res) => {
  const shortUrls = await ShortUrl.find().sort({ _id: -1 });

  res.render("index", { shortUrls: shortUrls });
};

export const show = async (req, res) => {
  const shortUrlId = req.params.id;

  const shortUrl = await ShortUrl.findOne({ shortUrl: shortUrlId });
  shortUrl.clicks++;
  shortUrl.save();

  res.redirect(shortUrl.fullUrl);
};

export const create = (req, res) => {
  const shortUrl = new ShortUrl({
    fullUrl: req.body.fullUrl,
  });

  shortUrl.save();

  return res.redirect("/");
};

export const destroy = async (req, res) => {
  const shortUrlId = req.params.id;

  await ShortUrl.findOneAndDelete({ shortUrl: shortUrlId });

  return res.redirect("/");
};

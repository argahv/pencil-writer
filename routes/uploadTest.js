module.exports = (app) => {
  //   app.post("/api/post/create", (req, res) => {
  app.post("/api/file-upload", async (req, res) => {
    cloudinary.uploader.upload(
      "sample.jpg",
      { crop: "limit", tags: "samples", width: 500, height: 500 },
      function (result) {
        console.log(result);
      }
    );
    if (req.files === null) {
      file = null;
    }
    const file = req.files.file;

    file.mv(`${__dirname}/${file.name}`, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
      res.send({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
  });
};

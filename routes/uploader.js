const express = require("express");
const router = express.Router();
const multer = require("multer");
const mv = require("mv");
const formidable = require("formidable");
const fs = require("fs");
const path = require("path");

router.post("/upload", (req, res) => {
  const form = new formidable.IncomingForm();
  const docType = req.query.docType;
  const uploadDir = path.join(__dirname, `uploads/${docType}`);

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  form.uploadDir = uploadDir;

  form.parse(req, (err, fields, files) => {
    console.log("Files:", files);

    if (err) {
      console.error("Error parsing form:", err);
      return res.status(500).send("Internal Server Error");
    }

    const uploadedFiles = files[""] || files.file;

    if (!uploadedFiles || uploadedFiles.length === 0) {
      return res.status(400).send("No file uploaded.");
    }

    const uploadedFile = uploadedFiles[0];
    const oldPath = uploadedFile.filepath;

    const fileExtension = uploadedFile.originalFilename.split(".");

    // if (![".pdf"].(fileExtension)) {
    //   return res.status(200).send("File Extension not valid");
    // }
    const newFilename = `${Date.now()}.${fileExtension[1]}`;
    uploadedFile.newFilename = newFilename;

    const newPath = path.join(__dirname, `uploads/${docType}`, newFilename);

    const readStream = fs.createReadStream(oldPath);
    const writeStream = fs.createWriteStream(newPath);

    readStream.on("error", (err) => {
      console.error("Error reading file stream:", err);
      return res.status(500).send("Internal Server Error");
    });

    writeStream.on("error", (err) => {
      console.error("Error writing file stream:", err);
      return res.status(500).send("Internal Server Error");
    });

    writeStream.on("finish", () => {
      // File has been successfully moved
      fs.unlinkSync(oldPath); // Optionally remove the temporary file
      res.send({ message: "File uploaded!", filename: newFilename });
    });

    readStream.pipe(writeStream);
  });
});

router.get("/read/:filename", (req, res) => {
  const filename = req.params.filename;
  const docType = req.query.docType;
  const filePath = path.join(__dirname, `uploads/${docType}`, filename);

  // Check if the file exists
  if (fs.existsSync(filePath)) {
    // Stream the file to the response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  } else {
    res.status(404).send("File not found");
  }
});

router.get("/download/:filename", (req, res) => {
  const filename = req.params.filename;
  const docType = req.query.docType;
  const filePath = path.join(__dirname, `uploads/${docType}`, filename);

  // Check if the file exists
  if (fs.existsSync(filePath)) {
    // Set appropriate headers for file download
    res.setHeader("Content-Disposition", `attachment; filename=${filename}`);
    res.setHeader("Content-Type", "application/octet-stream");

    // Stream the file to the response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  } else {
    res.status(404).send("File not found");
  }
});

module.exports = router;

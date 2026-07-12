const { S3Client } = require("@aws-sdk/client-s3");
const multer = require("multer");
const multerS3 = require("multer-s3");

// Initialize S3 Client targeting your region
const s3 = new S3Client({ region: "us-east-1" }); 

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "praveen-admin-dashboard-storage", // 👈 Your exact bucket name
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      // Safely appends a unique timestamp to prevent files overwriting each other
      cb(null, Date.now().toString() + "-" + file.originalname);
    }
  })
});

module.exports = upload;

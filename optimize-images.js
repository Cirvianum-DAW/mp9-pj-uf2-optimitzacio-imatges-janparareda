import imagemin from "imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";

imagemin(["src/multimedia/index/*.jpg", "src/multimedia/index/*.jpeg", "src/multimedia/index/*.png"], {
    destination: "./src/multimedia/indexCom",
    plugins: [
      imageminMozjpeg({ quality: 75 }),
      imageminPngquant({ quality: [0.6, 0.8] }),
    ],
  })
  .then(() => {
    console.log("Imatges optimitzades");
  })
  .catch((error) => {
    console.error("Hi ha hagut un error optimitzant les imatges:", error);
  });
  
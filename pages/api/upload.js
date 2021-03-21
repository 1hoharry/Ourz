import { NFTStorage, Blob } from "nft.storage";
import { promisify } from "util";
import fs from "fs";
import formidable from "formidable";

const readFileAsync = promisify(fs.readFile);

const handler = async (req, res) => {
  const form = new formidable.IncomingForm({ keepExtensions: true });

  const data = await new Promise((res, rej) => {
    form.parse(req, (err, fields, files) => {
      if (err) return rej(err);
      res({ fields, files });
    });
  });


  const { metadata, name } = data.fields;
  const { media } = data.files;

  const mediaData = await readFileAsync(media.path);

  console.log("done reading media");

  if (mediaData && metadata && name) {
    const client = new NFTStorage({ token: process.env.NFT_STORAGE_KEY });

    const mediaContent = new Blob(mediaData);
    const mediaCID = await client.storeBlob(mediaContent);

    const metadataContent = new Blob(metadata);
    const metadataCID = await client.storeBlob(metadataContent);
    res.send({ mediaCID, metadataCID });
  } else {
    res.status(501);
  }
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;

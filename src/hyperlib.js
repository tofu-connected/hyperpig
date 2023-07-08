const OMDB_API_KEY = "7ab3fcf5";

//using OMDB API
export async function searchMovies(title) {
  const params = new URLSearchParams({
    apikey: OMDB_API_KEY,
    s: title
  }).toString();
  const response = await fetch(`https://omdbapi.com?${params}`);
  const data = await response.json();
  return data.Search;
}

export async function getBlob(url) {
  const response = await fetch(url);
  return response.blob();
}

/* export function genFish() {
  function importAll(r) {
    let images = {};
    r.keys().map((item) => (images[item.replace('./', '')] = r(item)));
    return images;
  }
  const images = importAll(require.context("./img", false, /\.(png|jpe?g|svg)$/));

  return [{
    prompt: "military angel relaxing in a bingbag",
    src: images["6.png"],
    orientation: "vertical"
  },
  {
    prompt: "boom glashing eyes colorful head",
    src: images["13.jpg"],
    orientation: "notvertical"
  }]
} */

export async function runInference(params) {

  const serverUrl = `http://125.199.220.228:7860/sdapi/v1/img2img`;

  const inputBlob = await getBlob(params.img_url);

  const response = await fetch(serverUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json'
    },
    body: JSON.stringify({
      prompt: "",
      init_images: [await blobToBase64(inputBlob)],
      sampler_name: "Euler a",
      steps: 20,
      cfg_scale: 0,
      denoising_strength: params.strength / 100,
    })
  });

  const responseData = await response.json();

  const outputBase64 = `data:image/jpeg;base64,${responseData.images[0]}`;
  return URL.createObjectURL(await getBlob(outputBase64));
}

export async function runFishInference() {
  console.log(`Running fish inference...`)
  console.log(...arguments);
  const response = await fetch(`https://picsum.photos/1024/1024`);
  return response.blob();
}

export async function blobToBase64(blob) {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

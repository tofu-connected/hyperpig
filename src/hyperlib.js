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

export async function getStyles() {
  // TODO: request to backpig
    return  [
      {
        id: "1", 
        name: "CyberSwine",
        prompt: "cyberpunk, dark city, masterpiece, best quality", 
        negative_prompt:"bad quality, worst quality, mutation, extra limbs",
        image_url:"https://m.media-amazon.com/images/M/MV5BMTc5NDQzOTc2N15BMl5BanBnXkFtZTcwNDI5MzI4Nw@@._V1_SX300.jpg"
      },
      { 
        id: "2", 
        name: "Pigruto",
        prompt: "naruto, anime, from naruto, fine artwork, masterpiece, best quality", 
        negative_prompt:"bad quality, worst quality, mutation, extra limbs",
        image_url:"https://m.media-amazon.com/images/M/MV5BZWEzMzVkMmItMWQ4My00ODIzLTk2ZDMtN2I5NDY1ZjBmOTVkXkEyXkFqcGdeQXVyMTE0MzY0NjE1._V1_SX300.jpg"
      }
      ]
}

export async function updateCards(styles, setCards) {
  setCards( 
    styles.map((style) => {
      return {
          id: style.id,
          name: style.name,
          prompt: style.prompt,
          image_url: style.image_url,
        }
      }));
}

export async function getBlob(url) {
  const response = await fetch(url);
  return response.blob();
}

export async function img2img(params) {
  // TODO: backpig.su/api/img2img?image&params&style_id
  const serverUrl = `http://125.199.220.228:7860/sdapi/v1/img2img`;
  const init_image = await blobToBase64( await fetch(params.img_url).then((res) => res.blob()) );
  const response = await fetch(serverUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json'
    },
    body: JSON.stringify({
      prompt: params.style.prompt,
      negative_prompt: params.style.negative_prompt,
      init_images: [init_image],
      sampler_name: "DPM++ 2S a Karras",
      steps: 20,
      cfg_scale: 7,
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

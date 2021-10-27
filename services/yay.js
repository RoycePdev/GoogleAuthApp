//write a function to retrieva a blobe of JSON

// function fetchAlbumns() {
//   fetch('https://rallycoding.herokuapp.com/api/music_albums')
//   .then((res) => res.json())
//   .then(json => console.log(json))
// }


const fetchAlbumns = async () => {
  const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
  const json = await res.json()
  
  console.log(json)
}

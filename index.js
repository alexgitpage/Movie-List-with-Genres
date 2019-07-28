(function () {
  //   write your code here 
  const BASE_URL = 'http://movie-list.alphacamp.io'
  const INDEX_URL = BASE_URL + '/api/v1/movies'
  const POSTER_URL = BASE_URL + '/posters/'
  const data = []
  const lists = {
    "1": "Action",
    "2": "Adventure",
    "3": "Animation",
    "4": "Comedy",
    "5": "Crime",
    "6": "Documentary",
    "7": "Drama",
    "8": "Family",
    "9": "Fantasy",
    "10": "History",
    "11": "Horror",
    "12": "Music",
    "13": "Mystery",
    "14": "Romance",
    "15": "Science Fiction",
    "16": "TV Movie",
    "17": "Thriller",
    "18": "War",
    "19": "Western"
  }

  const reverseLists = {
    "Action": "1",
    "Adventure": "2",
    "Animation": "3",
    "Comedy": "4",
    "Crime": "5",
    "Documentary": "6",
    "Drama": "7",
    "Family": "8",
    "Fantasy": "9",
    "History": "10",
    "Horror": "11",
    "Music": "12",
    "Mystery": "13",
    "Romance": "14",
    "Science Fiction": "15",
    "TV Movie": "16",
    "Thriller": "17",
    "War": "18",
    "Western": "19"
  }

  const listPanel = document.getElementById('list-panel')


  axios.get(INDEX_URL)
    .then((response) => {
      data.push(...response.data.results)
      // displayDataList(data)
      // console.log(data)
      displayCardlList(lists)
    })
    .catch()

  const dataPanel = document.getElementById('data-panel')

  function displayDataList(data) {
    let htmlContent = ''
    data.forEach(function (item, _index) {
      htmlContent += `
        <div  class="col-sm-3">
          <div class="card mb-2">
            <img class="card-img-top" src="${POSTER_URL}${item.image}">
            <div class="card-body movie-item-body">
             <h6>${item.title}</h6>
            </div>
          </div>
        </div>
      `
    })
    dataPanel.innerHTML = htmlContent
  }

  //display card list
  function displayCardlList(lists) {
    let listContent = ''
    for (i in lists) {
      listContent += `
        <li class="list-group-item">${lists[i]}</li>
      `
    }
    listPanel.innerHTML = listContent
  }


  //display each movie's genres
  function displayEachMovieGenres(genres) {
    let eachGenre = ``
    for (let i = 0; i < genres.length; i++) {
      eachGenre += `<p>${lists[genres[i]]}</p>`
    }
    return eachGenre

  }

  //check movies by click the list
  listPanel.addEventListener('click', event => {
    let listName = event.target.textContent
    let results = []

    console.log("click")
    results = data.filter(function (item) {
      return (item.genres).includes(Number(reverseLists[listName]))
    })

    displayDataList(results)
    console.log(results)
  })

})()



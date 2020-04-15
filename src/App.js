import React from 'react';
import './App.css';
import Category from './Components/Category';
import Image from './Components/Image';
import Search from './Components/Search';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      images: null,
      url: 'https://pixabay.com/api?safesearch=true&per_page=52&key=16036858-ce9c6eff58bc49d388c47d990'
    }
  }

  componentDidMount() {
    this.fetchImages(this.state.url);
  }

  componentDidUpdate() {
    this.fetchImages(this.state.url);
  }

  fetchImages = async (url) => {
    try {
      let response = await fetch(url)
      let jsonData = await response.json();
      this.setState({
        images: jsonData.hits,
        loading: false
      });
    }
    catch (err) {
      console.log(err);
    }
  }

  showCategory = (e, queryString) => {
    e.target.classList.toggle('active');
    Array.from(e.target.parentNode.childNodes).filter(elem => elem !== e.target).forEach(elem => elem.classList.remove('active'));
    this.setState({
      url: `https://pixabay.com/api?safesearch=true&per_page=52&q=${queryString}&key=16036858-ce9c6eff58bc49d388c47d990`
    });
  }

  search = (e) => {
    if (e.keyCode === 13) {
      let queryString = e.target.value;
      if (e.target.value !== '') {
        this.setState({
          url: `https://pixabay.com/api?safesearch=true&per_page=52&q=${queryString}&key=16036858-ce9c6eff58bc49d388c47d990`
        });
      }
    }
  }

  searchButton = (e) => {
    let queryString = e.target.parentElement.parentElement.parentElement.children[0].value;
    if (e.target.value !== '') {
      this.setState({
        url: `https://pixabay.com/api?safesearch=true&per_page=52&q=${queryString}&key=16036858-ce9c6eff58bc49d388c47d990`
      });
    }
  }

  render() {
    const { images } = this.state;
    if (this.state.loading) {
      return (
        <div className="App">
          <header>
            <h1>SnapShoot Gallery App</h1>
          </header>
          <main>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <h1>Loading .... </h1>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      )
    }
    if (!this.state.images) {
      return (
        <div className="App">
          <header>
            <h1>SnapShoot Gallery App</h1>
          </header>
          <main>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <h1>No images</h1>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      )
    }
    return (
      <div className="App">
        <header>
          <h1>SnapShoot Gallery App</h1>
          <Search search={this.search} searchButton={this.searchButton} />
          <Category showCategory={this.showCategory} />
        </header>
        <main>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  {images.map((image) =>
                    <Image key={image.id} src={image.webformatURL} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;

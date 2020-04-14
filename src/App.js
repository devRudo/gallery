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
      url: 'https://pixabay.com/api?per_page=52&key=16036858-ce9c6eff58bc49d388c47d990'
    }
  }

  componentDidMount() {
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

  render() {
    const { images } = this.state;
    if (this.state.loading) {
      return (
        <div className="App">
          <header>
            <h1>SnapShoot Gallery App</h1>
            <Category />
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
            <Category />
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
          <Search />
          <Category />
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

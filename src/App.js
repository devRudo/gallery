import React from 'react';
import './App.css';
import Category from './Components/Category';
import Image from './Components/Image';
import Search from './Components/Search';
import Loading from './Components/Loading';
import Error from './Components/Error';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      images: null,
      url: 'https://pixabay.com/api?safesearch=true&per_page=52&key=16036858-ce9c6eff58bc49d388c47d990',
      error: ''
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
      this.setState({
        loading: false,
        error: 'Failed to fetch images try again...'
      });
      console.log(err);
    }
  }

  stateChange = (url, loading = false) => {
    this.setState({
      url: url,
      loading: loading
    }, () => {
      this.fetchImages(this.state.url);
    });
  }

  showCategory = (e, queryString) => {
    Array.from(e.target.parentNode.childNodes).filter(elem => elem.classList.contains('active')).forEach(elem => elem.classList.remove('active'));
    e.target.classList.toggle('active');
    this.stateChange(`https://pixabay.com/api?safesearch=true&per_page=52&q=${queryString}&key=16036858-ce9c6eff58bc49d388c47d990`, true);
  }

  search = (e) => {
    let searchString = e.target.value;
    if (e.target.value !== '') {
      this.stateChange(`https://pixabay.com/api?safesearch=true&per_page=52&q=${searchString}&key=16036858-ce9c6eff58bc49d388c47d990`, true);
    }
    else {
      this.stateChange(`https://pixabay.com/api?safesearch=true&per_page=52&key=16036858-ce9c6eff58bc49d388c47d990`, true);
    }
  }

  render() {
    const { images, loading, error } = this.state;
    return (
      <div className="App">
        <header>
          <h1>SnapShoot Gallery App</h1>
          <Search search={this.search} />
          <Category showCategory={this.showCategory} />
        </header>
        <main>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  {loading ? <Loading /> : error ? <Error error={error} /> : images.length ?
                    images.map((image) => <Image key={image.id} src={image.webformatURL} />
                    ) : <Error error="No image exists with this keyword" />
                  }
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

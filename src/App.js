import React, { Component } from 'react';
import UserNavbarView from './components/UserNavbarView';
import MapView from './components/MapView';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <header className="app-header-view">
          <UserNavbarView />
        </header>
        <main className="app-main-view">
          <MapView />
        </main>
      </div>
    );
  }
}

export default App;

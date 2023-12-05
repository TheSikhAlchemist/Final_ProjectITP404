import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useParams } from 'react-router-dom';
import CountrySelector from './CountrySelector';
import Homepage from './Homepage';
import DonationForm from './DonationForm';
import CommentSection from './CommentSection';
import './background.css';
import Footer from './Footer';
import SubscriptionApp from './Subscriptions';

const Home = () => <h2>Home</h2>;
const News = () => <h2>News</h2>;
const Donations = () => <h2>Donations</h2>;
const Other = () => <h2>Other</h2>;

const DynamicSegmentOne = () => {
  let { id } = useParams();
  return <h2>Dynamic Segment One: {id}</h2>;
};

const DynamicSegmentTwo = () => {
  let { name } = useParams();
  return <h2>Dynamic Segment Two: {name}</h2>;
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/" activeClassName="active" className="navbar-link">Home</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/country-selector" activeClassName="active" className="navbar-link">News</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/donation" activeClassName="active" className="navbar-link">Donations</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/comment" activeClassName="active" className="navbar-link">Reviews</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/subscription" activeClassName="active" className="navbar-link">Subscription</NavLink>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  useEffect(() => {
    document.title = "Gradient News Routes";
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/country-selector" element={<CountrySelector />} />
          <Route path="/donation" element={<DonationForm />} />
          <Route path="/comment" element={<CommentSection />} />
          <Route path="/subscription" element={<SubscriptionApp />} />

        </Routes>
        <Footer companyName="Gradient News" />
      </div>
    </Router>
  );
};

export default App;
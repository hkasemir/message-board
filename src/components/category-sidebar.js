import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import actions from '../actions';
import './category-sidebar.css';

class CategorySidebar extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const {categories} = this.props;
    return (
      <nav className='side-nav'>
        <ul>
        {
          categories.map(
          cat => <li key={cat.path}>
            <NavLink
              to={`/${cat.path}`}
              activeClassName='category-link--active'
              className='category-link'>
              {cat.name}
            </NavLink>
            </li>
          )
        }
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = {
  fetchCategories: actions.fetchCategories
};

export default connect(mapStateToProps, mapDispatchToProps, null, {pure:false})(CategorySidebar);

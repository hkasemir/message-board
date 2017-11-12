import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import actions from '../actions';

class CategorySidebar extends PureComponent {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const {categories} = this.props;
    return (
      <nav>
        <ul>
        {
          categories.map(
          cat => <li key={cat.path}>
              <Link to={`/category/${cat.path}`}>{cat.name}</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(CategorySidebar);

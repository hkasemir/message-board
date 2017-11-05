import React, { Component } from 'react';
import {connect} from 'react-redux';
import actions from '../actions';

class Categories extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const {categories} = this.props;
    return (
      <section>
        <p>categories</p>
        <ul>
        {
          categories.map(
            cat => <li key={cat.path}>{cat.name}</li>
          )
        }
        </ul>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = {
  fetchCategories: actions.fetchCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);



import React, {useState, useEffect} from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/rumb/
// https://react.semantic-ui.com/collections/breadc

export default class TabNav extends React.Component {
  state = { activeItem: 'Home Page' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu tabular>
        <Menu.Item
          name='Home Page'
          active={activeItem === 'Home Page'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Characters'
          active={activeItem === 'Characters'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Locations'
          active={activeItem === 'Locations'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Episodes'
          active={activeItem === 'Episodes'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}

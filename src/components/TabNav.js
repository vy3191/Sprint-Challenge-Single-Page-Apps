import React  from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default class TabNav extends React.Component {
  state = { activeItem: 'Home Page' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu tabular>
        <NavLink to="/">
            <Menu.Item
              name='Home Page'
              active={activeItem === 'Home Page'}
              onClick={this.handleItemClick}
            />
        </NavLink>
        <NavLink to="/characters">
            <Menu.Item
              name='Characters'
              active={activeItem === 'Characters'}
              onClick={this.handleItemClick}
            />
        </NavLink>
        <NavLink to="/locations">
            <Menu.Item
              name='Locations'
              active={activeItem === 'Locations'}
              onClick={this.handleItemClick}
            />
        </NavLink>
        <NavLink>
            <Menu.Item
              name='Episodes'
              active={activeItem === 'Episodes'}
              onClick={this.handleItemClick}
            />
        </NavLink>
      </Menu>
    )
  }
}

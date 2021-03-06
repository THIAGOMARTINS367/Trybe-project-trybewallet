import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LabelAndSelect extends Component {
  render() {
    const {
      labelContent,
      selectContent,
      selectId,
      selectDataTestid,
      optionsContent,
      optionsDataTestId,
      onChangeEvent,
      nameSelect,
    } = this.props;
    return (
      <div>
        <label htmlFor={ selectId }>{ labelContent }</label>
        <select
          id={ selectId }
          onChange={ onChangeEvent }
          name={ nameSelect }
          value={ selectContent }
          data-testid={ selectDataTestid }
        >
          {optionsContent.map((element) => (
            <option
              key={ element }
              data-testid={ optionsDataTestId ? element : '' }
            >
              { element }
            </option>
          ))}
        </select>
      </div>
    );
  }
}

LabelAndSelect.propTypes = {
  labelContent: PropTypes.string.isRequired,
  selectContent: PropTypes.string.isRequired,
  selectId: PropTypes.string.isRequired,
  selectDataTestid: PropTypes.string,
  optionsContent: PropTypes.string.isRequired,
  optionsDataTestId: PropTypes.string,
  onChangeEvent: PropTypes.func,
  nameSelect: PropTypes.string.isRequired,
};

LabelAndSelect.defaultProps = {
  selectDataTestid: '',
  optionsDataTestId: '',
  onChangeEvent: '',
};

export default LabelAndSelect;

// export default function Button(props) {
//     console.log(props);
//     return(
//         <button className={props.color}>{props.text}</button>
//     );
// }
// 배열 형식

import PropTypes from 'prop-types';

export default function Button({ color, text, onClick }) {
    return (
      <button onClick={onClick} className={color}>
        {text}
      </button>
    );
  }
// 객체형식

Button.propTypes = {
  text: PropTypes.string.isRequired
};
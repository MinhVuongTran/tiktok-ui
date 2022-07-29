import PropTypes from 'prop-types';
import './GlobalStyle.scss';

const index = ({ children }) => {
    return children;
};

index.propTypes = {
    children: PropTypes.node.isRequired
}

export default index;

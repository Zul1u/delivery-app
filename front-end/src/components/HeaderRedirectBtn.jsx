import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function HeaderRedirectBtn({ text, url, testid }) {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      data-testid={ testid }
      onClick={ () => url && navigate(url) }
    >
      { text }
    </button>
  );
}

HeaderRedirectBtn.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
};

export default HeaderRedirectBtn;

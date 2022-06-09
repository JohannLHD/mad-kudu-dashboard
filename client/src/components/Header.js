import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  position: 'relative';
  background: var(--primary-400);
  text-align: center;
`;

const Title = styled.h1`
  color: var(--primary-50);
`;

const Header = () => {
  return (
    <Wrapper>
      <Title>DASHBOARD</Title>
      <div style={{ position: 'absolute', right: '10px', top: '10px' }}>
        <Link to="/list-antelopes">
          <button type="button" class="btn btn-danger">
            Go to tables
          </button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Header;

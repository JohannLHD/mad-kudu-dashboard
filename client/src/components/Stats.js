import styled from 'styled-components';

const Wrapper = styled.div`
  width: 160px;
  height: 80px;
  background: var(--grey-100);
  text-align: center;
`;

const StatsItem = ({ count, title }) => {
  return (
    <Wrapper>
      <h3 style={{ marginBottom: '5px' }}>{count}</h3>
      <h5>{title}</h5>
    </Wrapper>
  );
};

export default StatsItem;

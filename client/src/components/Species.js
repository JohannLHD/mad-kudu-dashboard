import styled from 'styled-components';

const Card = styled.div`
  padding: 15px;
  height: 450px;
  width: 350px;
  border-radius: 5px;
  background-color: var(--grey-100);
`;

const Image = styled.img`
  height: 150px;
  width: 100%;
  margin-bottom: 30px;
  object-fit: contain;
`;

const Title = styled.h3`
  text-align: center;
`;

const Content = styled.div`
  padding-left: 25px;
  line-height: 5px;
`;

const CardSpecie = ({
  deleteCard,
  id,
  name,
  continent,
  weight,
  height,
  horns,
  picture,
}) => {
  return (
    <Card>
      <Title>{name}</Title>
      <Image src={picture} />
      <Content>
        <p>Weight : {weight}</p>
        <p>Height : {height}</p>
        <p>Continent = {continent}</p>
        <p>Horns : {horns}</p>
        <button className="btn btn-danger" name={id} onClick={deleteCard}>
          Delete
        </button>
      </Content>
    </Card>
  );
};

export default CardSpecie;

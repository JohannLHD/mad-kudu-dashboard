import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import lodash from 'lodash';

const BarChartComponent = ({ data }) => {
  const continent = lodash.sortBy(data, 'weight');
  return (
    <div style={{ marginTop: '30px', backgroundColor: 'var(--grey-100)' }}>
      <h5>Antelopes species sorted by Weight</h5>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={continent}>
          <CartesianGrid strokeDasharray="3 3 " />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="weight" fill="#2cb1bc" barSize={75} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;

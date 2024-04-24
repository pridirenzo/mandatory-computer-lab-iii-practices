import PropTypes from "prop-types";

const Table = ({ netIncomes }) => {

    const mappedIncomes = netIncomes.map((brand) => brand.income); // guardo especificamente los ingresos
    const sumIncome = mappedIncomes.reduce((income, element) => income + element, 0); // sumo los ingresos
    const averageIncome = sumIncome / mappedIncomes.length; // calculo el promedio

  return (
    <>
      <table>
        <tr>
          <th>Marca </th>
          <th>Ingreso netos</th>
        </tr>

        {netIncomes.map((brand, index) => (
          <tr key={index}>
            <td>{brand.brand}</td>
            <td>{brand.income}</td>
          </tr>
        ))}
      </table>
    <p>Promedio de ingresos entre todas las marcas: {averageIncome}</p>
    </>
  );
};

Table.propTypes = {
  netIncomes: PropTypes.array,
};

export default Table;

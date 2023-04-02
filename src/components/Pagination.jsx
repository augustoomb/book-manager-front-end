// import styles from './Pagination.module.css';

function Pagination(props) {
  // eslint-disable-next-line react/prop-types
  const { nextPage, prevPage } = props;

  return (
    <div>
      <button onClick={ prevPage }>{'<'}</button>
      <button onClick={ nextPage }>{'>'}</button>
    </div>
  );
}

export default Pagination;

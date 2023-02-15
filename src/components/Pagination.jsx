import React from 'react';

function Pagination ({ dataPerPage, totalData, paginate }) {
    const pageNumbers = [];

    for (let i=1; i<=Math.ceil(totalData / dataPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        // <nav>
        //     <ul className="pagination" style={{position:"absolute", left: "80vh"}}>
        //         {pageNumbers.map(number => (
        //             <li key={number} className='page-item'>
        //                 <a onClick={() => paginate(number)} href="#" className='page-link'>
        //                     {number}
        //                 </a>
        //             </li>
        //         ))}
        //     </ul>
        // </nav>
        <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
          </li>
          {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} href="#" className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    )

}
export default Pagination;
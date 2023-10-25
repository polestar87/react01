import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

function ListPageTion(props){
  let {page} = props;
  let start = page -2 < 1 ? 1 : page - 2;
  let end = start + 5;
  let pageNum = [];
  for(let i = start; i<end;i++){
    pageNum.push(i)
  }

  return (
    <nav>
      <span> | </span>
      {
        pageNum.map(item=>{
          return <Fragment key={item}>
            {
              item == page ? <span>{item}</span> : <Link to={`/list/${item}`}>{item}</Link>
            }
            <span>|</span>
          </Fragment>
        })
      }
    </nav>
  )
}
export default ListPageTion;
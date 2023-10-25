import React, { useEffect, useState } from "react";
import axios from "axios";
import ListPageTion from "../component/listPagetion";
function List(props) {
  let { match } = props;
  let { page=1 } = match.params;
  const [data, setData] = useState([]);
  console.log('list');
  useEffect(()=>{
    axios.get(`https://cnodejs.org/api/v1/topics?tab=all&page=${page}&limit=15`)
      .then(res => {
        console.log(res.data.data);
        setData(res.data.data)
      })
  },[page])
  return (
    <div>
      {page}
      <ul>
        {
          data.map(item => {
            return <li>{item.title}</li>
          })
        }
      </ul>
      <ListPageTion
        page={page}
      ></ListPageTion>
    </div>
  );
}

export default List;

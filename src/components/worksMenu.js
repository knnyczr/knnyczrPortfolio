import React from 'react';

export default function Menu({types}) {
    console.log(types)
  return (
    <ul>
        <li>All</li>
        {
            types.map((workType, index) =>(
                <li
                    key={index}
                >{workType}</li>
            ))
        }
    </ul>
  );
}

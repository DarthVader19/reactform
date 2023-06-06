import React from 'react'

const Displaypage = ({data}) => {
  return (
    <div>
        <ul className="list-group">
  <li className="list-group-item">{data.name}</li>
  <li className="list-group-item">{data.age}</li>
  <li className="list-group-item">Address</li>
  <li className="list-group-item">pincode</li>
  <li className="list-group-item">Gender</li>
</ul>
    </div>
  )
}

export default Displaypage;
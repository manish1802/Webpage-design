import React from 'react'

export default function Ourteam() {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center w-75 mx-auto">
        <div className="col">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
              className="card-img-top "
              alt="..."
              style={{ height: 300 }}
            />
            <div
              className="w-75 card-title position-absolute bg-light d-flex flex-column justify-content-center align-items-center"
              style={{ bottom: "0%", left: "15%" }}
            >
              <h5>Nattasha kelvin</h5>
              <p className="text-secondary">Managing Director</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://www.gniotgroup.edu.in/blog/wp-content/uploads/2022/01/IT-1.jpg"
              className="card-img-top"
              alt="..."
              style={{ height: 300 }}
            />
            <div
              className="w-75 card-title position-absolute bg-light d-flex flex-column justify-content-center align-items-center"
              style={{ bottom: "0%", left: "15%" }}
            >
              <h5>David Simpson</h5>
              <p className="text-secondary">Designer</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80"
              className="card-img-top"
              alt="..."
              style={{ height: 300 }}
            />
            <div
              className="w-75 card-title position-absolute bg-light d-flex flex-column justify-content-center align-items-center"
              style={{ bottom: "0%", left: "15%" }}
            >
              <h5>Madeleine Grant</h5>
              <p className="text-secondary">Marketing Specialist</p>
            </div>
          </div>
        </div>
      </div>
  )
}

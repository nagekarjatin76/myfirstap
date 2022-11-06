function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" >NJ-FOOD</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <li className="nav-item">
            <a  data-bs-toggle="modal" data-bs-target="#exampleModalR">For Order</a>
          </li>


          <div className="modal fade" id="exampleModalR" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Register User</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal"
                    aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form className="row g-3">
                    <div className="col-md-6">
                      <label for="inputEmail4" className="form-label">Name</label>
                      <input type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-md-6">
                      <label for="inputPassword4" className="form-label">Contact Number</label>
                      <input type="password" className="form-control" id="inputPassword4" />
                    </div>
                    <div className="col-12">
                      <label for="inputAddress" className="form-label">Address</label>
                      <input type="text" className="form-control" id="inputAddress"
                        placeholder="27,Sadbhavna Society" />
                    </div>
                    <div className="col-12">
                      <label for="inputAddress2" className="form-label">Address 2</label>
                      <input type="text" className="form-control" id="inputAddress2"
                        placeholder="Conform Your Address" />
                    </div>
                    <div className="col-md-6">
                      <label for="inputCity" className="form-label">City</label>
                      <input type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="col-md-4">
                      <label for="inputState" className="form-label">State</label>
                      <select id="inputState" className="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div className="col-md-2">
                      <label for="inputZip" className="form-label">Zip</label>
                      <input type="text" className="form-control" id="inputZip" />
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                          <label className="form-check-label" for="gridCheck">
                            Check me out
                          </label>
                      </div>
                    </div>
                    
                  </form>
                </div>
                <div className="modal-footer">
                  {/* <button type="button" class="btn btn-secondary"
                    data-bs-dismiss="modal">Close</button> */}
                  <button type="button" class="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
          </div>


          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Low cost. High quality." aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>




    </>

  );
}
export default Header;
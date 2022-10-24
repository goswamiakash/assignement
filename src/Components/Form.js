import React from "react";

const Form = () => {
  return (
    <div className="container">
      <div
        style={{
          backgroundColor: "skyblue",
          textAlign: "left",
          padding: "1% 1% 1% 6%",
        }}
        className="title"
      >
        <h1 style={{ margin: "0" }}>
          Disseration Research Travel Award Aplication
        </h1>
        <h3>UCLA Graduate Program in English</h3>
      </div>
      <div className="horizontal-1">
        <form
          style={{
            display: "flex",
            flexFlow: "column wrap",
            padding: "1% 2% 0 6%",
          }}
        >
          <h2 style={{ textAlign: "left",paddingLeft:'3%' }}>Personal Information:</h2>

          <div style={{ paddingLeft: "15%" }}>
            <div>
              <p className="para">First Name: </p>
              <input
                className="form-input"
                type="text"
                name="fname"
                value=""
                required
              />

              <p
                style={{ marginRight: "10px", marginLeft: "20%" }}
                className="para"
              >
                Last Name:
              </p>
              <input className="form-input" type="text" name="" value="" />
            </div>
            <div>
              <p className="para">UID:</p>
              <input className="form-input" type="text" name="" value="" />
              <p className="para" style={{ marginRight: "10px", marginLeft: "20%" }}>Email:</p>
              <input className="form-input" type="text" name="" value="" />

            </div>
            <div>
              <p className="para">Address 1:</p>
              <input className="form-input" type="text" name="" value="" />
            </div>
            <div>
              <p className="para">Addres 2:</p>
              <input
                className="form-input"
                type="text"
                name=""
                value=""
                required
              />
            </div>
            <div>
              <p className="para">Country:</p>
              <input className="form-input" type="text" name="" value="" />
              {/* </div>
          <div> */}
              <p className="para" style={{ marginRight: "10px", marginLeft: "20%" }}>
                State:
              </p>
              <input className="form-input" type="text" name="" value="" />
            </div>
            <div>
              <p className="para">Zip Code:</p>
              <input className="form-input" type="text" name="" value="" />
            </div>
          </div>

          <hr />

          <div className="horizontal-2">
            <h2 style={{ textAlign: "left",paddingLeft:'3%' }}>Research Information:</h2>
            
            <div style={{ paddingLeft: "15%" }}>
            <div >
              <p className="para">Subject of your research: </p>
              <textarea
                className="form-input"
                type="text"
                name=""
                value=""
                textarea
              />
            </div>
            <div>
              <p className="para">Research Instiatution to be visited:</p>
              <input className="form-input" type="text" name="" value="" />
            </div>
            <div>
              <p className="para">Travel Start Date:</p>
              <input className="form-input" type="text" name="" value="" />
            </div>
            <div>
              <p className="para">Travel End Date:</p>
              <input className="form-input" type="text" name="" value="" />
            </div>
            <div>
              <p className="para">Addres 2:</p>
              <input
                className="form-input"
                type="text"
                name=""
                value=""
                required
              />
            </div>
            </div>
          </div>
          <hr />

          <div className="horizontal-3">
            <h2
              style={{
                textAlign: "left",
                marginBottom: "0",
                paddingTop: "0",
                margin: "0",
                paddingLeft:'3%'
              }}
            >
              Expense Information:
            </h2>
            <p style = {{paddingLeft:'3%'}}>
              (Transportation, Lodging, Conference,Registration Only - Actual or
              Estimated)
            </p>
            <div style={{ paddingLeft: "15%" }}>
            <div>
              <p className="para">Subject of your research: </p>
              <textarea className="form-input" type="text" name="" value="" />
            </div>
            <div>
              <p className="para">Cost of Airfare:</p>
              <input className="form-input" type="text" name="" value="" />
            </div>
            <div>
              <p className="para">Cost of Car Rental:</p>
              <input className="form-input" type="text" name="" value="" />
            </div>
            <div>
              <p className="para">Cost of Lodging:</p>
              <input className="form-input" type="text" name="" value="" />
            </div>
            <div>
              <p className="para">Cost of other Ground Transportation:</p>
              <input className="form-input" type="text" name="" value="" />
            </div>
            <div>
              <p className="para">Cost of other Expense(s):</p>
              <input className="form-input" type="text" name="" value="" />
            </div>
            <div>
              <p className="para">Description of other Expense(s):</p>
              <textarea
                className="form-input"
                type="textarea"
                name=""
                value=""
              />
            </div>
            <div>
              <p className="para">TOTAL EXPENSES:</p>
              <input className="form-input" type="text" name="" value="" />
            </div>
            </div>
          </div>
          <hr />
          <div className="horizontal-4">
            <h2 style={{ textAlign: "left" }}>Additional Information:</h2>
            <div style={{ display: "flex", flexFlow: "row wrap" }}>
              <p className="para">
                I have applied to another organization fro funding
              </p>
              <div
                style={{
                  display: "flex",
                  flexFlow: "column wrap",
                  justifyContent: "space-evenly",
                }}
              >
                <div style={{ display: "flex", flexFlow: "row wrap" }}>
                  <input
                    id="funding-yes"
                    name="funding"
                    type="radio"
                    value="Yes"
                  />
                  <label htmlFor="funding-yes">Yes</label>
                </div>

                <div style={{ display: "flex", flexFlow: "row wrap" }}>
                  <input
                    id="funding-no"
                    name="funding"
                    type="radio"
                    value="No"
                  />
                  <label htmlFor="funding-no">No</label>
                </div>
              </div>
            </div>
            <div>
              <p className="para">Name of Organiastion</p>
              <input className="form-input" type="text" value="" />
            </div>
            <div>
              <p style={{ width: "100" }} className="para">
                Funding received?
              </p>
              <input className="form-input" type="radio" name="" />
              <label className="para">Yes</label>
              <input className="form-input" type="radio" name="" />
              <br />

              <label>No</label>
              <input className="form-input" type="radio" name="" />

              <label>Do'nt know yet</label>
            </div>
          </div>

          <div className="footer" style={{paddingTop:'10px',paddingLeft:'40px'}}>
            <div >
              <button className="btn">Submit</button>
            </div>
            <div>
              <button className="btn">Reset</button>
            </div>
            <div>
              <button className="btn">Back</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;

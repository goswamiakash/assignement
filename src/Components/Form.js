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
          <h2 style={{ textAlign: "left" }}>Personal Information:</h2>

          <div style={{paddingLeft: '10%'}}>
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
                style={{ marginRight: "10px", marginLeft: "10%" }}
                className="para"
              >
                Last Name:
              </p>
              <input className="form-input" type="text" name="" value="" />
            </div>
            <div>
              <p className="para">UID:</p>
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
              <p className="para" style={{ marginLeft: "10%" }}>
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
            <h2 style={{ textAlign: "left" }}>Research Information:</h2>
            <div>
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
          <hr />

          <div className="horizontal-3">
            <h2
              style={{
                textAlign: "left",
                marginBottom: "0",
                paddingTop: "0",
                margin: "0",
              }}
            >
              Expense Information:
            </h2>
            <p>
              (Transportation, Lodging, Conference,Registration Only - Actual or
              Estimated)
            </p>
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
          <hr />
          <div className="horizontal-4">
            <h2 style={{ textAlign: "left" }}>Additional Information:</h2>
            <div>
              <p className="para">
                I have applied to another organization fro funding
              </p>
              <input className="form-input" type="radio" value="Yes" />
            </div>
            {/* <label>Yes</label>
          <input  classNmae = "from-input"type="radio" value = 'No'/>
          </div>
          <div>
          <label>No</label>
          <input  type="radio" value = 'No'/>
          </div>
          </div> */}
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

          <div className="footer">
            <div>
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

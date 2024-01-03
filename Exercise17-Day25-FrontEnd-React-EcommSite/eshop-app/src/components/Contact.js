const Contact = () => {
    return ( 
        <div class="container-fluid position-relative">
        <main>
          <h1 class="display-5 text-center">Contact Us</h1>
          {/* <!-- col-xl extra large device, extra large device>=1200px > laptop  -->
          <!--col-lg laptop,             laptop size >= 992px > table size  -->
          <!--col-md table portrait       table size >=768px > phone size  -->
          <!--col-sm phone landscape      phone size >= 576px > small phone size  -->
          <!--col small phone portrait phones small phone >=576px --> */}
  
          {/* <!-- <div class="container-fluid"> -->
          <!-- container by default and container-md col will stack up when below 768px. below 768 is phone size   -->
          <!-- container-md col will stack up when below 768px, but navbar-expand-sm will not collapse till below 576  -->
          <!-- container-sm col will stack up when below 768px, it should stack up at 576. the reason is col-md-3 in form set to stack up at md below 768-->
          <!-- since col-md is set break point, better not use container-sm to set break point; however it is depends on designed choice -->
          <!-- container by default create center with margin and padding both left and right, no need to use mx-5 and px-5. mx-5 and px-5 will not make center. both margin and padding will have space and margin on left side at specify 5 size and left a lot of space and margin on right  -->
          <!-- https://getbootstrap.com/docs/5.3/utilities/spacing/#horizontal-centering -->
          <!-- mx-lg-auto break point will below lg 992px, greater than 992px will have center set by margin auto -->
          <!-- px-log-5 padding both side at 5 scale --> */}
          
          <div class="container">
            <form action="">
              <div class="row align-items-center g-2">
                <div class="col-md-3">
                  <label for="first" class="form-label">First Name*</label>
                  <input
                    type="text"
                    class="form-control"
                    name="first"
                    id="first"
                    aria-describedby="helpId"
                    placeholder="your first name"
                    required
                  />
                </div>
                <div class="col-md-3">
                  <label for="last" class="form-label">Last Name</label>
                  <input
                    type="text"
                    class="form-control"
                    name="last"
                    id="last"
                    aria-describedby="helpId"
                    placeholder="your last name"
                  />
                </div>
                <div class="col-md-2 text">
                  <label for="DOB" class="form-label">DOB</label>
                  <input
                    class="form-control"
                    type="date"
                    name="DOB"
                    id="DOB"
                    aria-describedby="helpId"
                    required
                  />
                </div>
                <div class="col-md-2">
                  <div class="form-check pb-2">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="color"
                      id="Male"
                      value="red"
                    />
                    <label class="form-check-label" for="Male">Male</label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="color"
                      id="Female"
                      value="blue"
                    />
                    <label class="form-check-label" for="Female">Female</label>
                  </div>
                </div>
                <div class="col col-md-2">
                  <div class="form-check pb-2">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="color"
                      id="na"
                      value="green"
                    />
                    <label class="form-check-label" for="na">None</label>
                  </div>
                  <br />
                </div>
                <div class="col-md-4">
                  <label for="email" class="form-label">Email*</label>
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="email"
                    aria-describedby="emailHelpId"
                    placeholder="abc@mail.com"
                    required
                  />
                </div>
                <div class="col-md-4">
                  <label for="homePhone">Home Phone</label>
                  <input
                    type="tel"
                    class="form-control"
                    id="homePhone"
                    name="homePhone"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div class="col-md-4">
                  <label for="cellNumber">Cell Phone</label>
                  <input
                    type="tel"
                    class="form-control"
                    id="cellNumber"
                    name="cellNumber"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div class="col-md-6">
                  <label for="address">address</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    class="form-control"
                    placeholder="placeholder"
                  />
                </div>
                <div class="col-md-2">
                  <label for="City">City</label>
                  <input
                    type="text"
                    name="City"
                    id="City"
                    class="form-control"
                    placeholder="placeholder"
                  />
                </div>
                <div class="col-md-2">
                  <label for="State">State</label>
                  <input
                    type="text"
                    name="State"
                    id="State"
                    class="form-control"
                    placeholder="placeholder"
                  />
                </div>
                <div class="col-md-2">
                  <label for="zipcode">zip code</label>
                  <input
                    type="number"
                    name="zipcode"
                    id="zipcode"
                    class="form-control"
                    placeholder="placeholder"
                  />
                </div>
                <div class="col-md-12">
                  <label for="message" class="form-label"></label>
                  <textarea
                    class="form-control"
                    name="message"
                    id="message"
                    rows="3"
                    placeholder="message*"
                    required
                  ></textarea>
                </div>
                <div class="col-md-12">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="false"
                    id="chkAccept"
                    required
                  />
                  <label class="form-check-label" for="chkAccept">
                    Agree to terms and conditions*
                  </label>
                  <a href="http://" target="_blank" rel="noopener noreferrer"
                    >read terms</a
                  >
                </div>
  
                <div class="col col-md-3">
                  <button type="reset" class="btn btn-primary">Reset</button>
                </div>
                <div class="col col-md-3">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
     );
}
 
export default Contact;
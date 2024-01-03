
import {Outlet} from "react-router-dom"
const About = () => {
    return ( 
      <div class="container">
         
        <Outlet/>

        <h1 class="display-3 text-center">E-Shop</h1>
      <h6> <small>The goal of E-Shop is to provide customers with the best deals, ensuring they don't hesitate to make purchases without waiting for promotions. The store maintains consistently low prices and aims to be a reliable source for quality products. Nonetheless, we will use the best software system to implement price adjustments and automatically refund our customers if prices drop within 30 days, without any request from the customer.</small></h6>
        <h1 class="display-5 text-center">FAQ</h1>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#Services" aria-expanded="true" aria-controls="collapseOne">
                Services:
              </button>
            </h2>
            {/* <!-- show by defaults --> */}
            <div id="Services" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                E-Shop is an online store offering products from original brands and third-party vendors. The goal is to provide customers with original and high-quality products. The store only sells products from well-known brands to ensure authenticity and quality.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Payment" aria-expanded="false" aria-controls="collapseTwo">
                
                Payment Security:
              </button>
            </h2>
            <div id="Payment" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                With your payments, we ensure that all the information you provide will be kept confidential and secure. The payment method is protected by a top security layer that we have implemented to prevent any unauthorized access to your information. Payments will not be sent directly to us; instead, they will be handled by a third party. This measure is taken to ensure that the products arrive first, shipping is confirmed, and your satisfaction is met before any payout to us.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Quality" aria-expanded="false" aria-controls="collapseThree">
                Product Quality Assurance:
              </button>
            </h2>
            <div id="Quality" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                E-Shop strives to guarantee that all products sold are original and from well-known brands. The goal is to prevent the sale of fake or poor-quality products and offer competitive prices. If a customer finds a lower price within 30 days of purchase, E-Shop will adjust the price accordingly.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Shipping" aria-expanded="false" aria-controls="collapseThree">
                Shipping:
              </button>
            </h2>
            <div id="Shipping" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                Shipping is promised to arrive within 7 days of purchase, with the option for one-day shipping available at a $10 flat rate.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Return" aria-expanded="false" aria-controls="collapseThree">
                Return Policy:
              </button>
            </h2>
            <div id="Return" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                E-Shop offers a 30-day money-back guarantee. If customers are not satisfied for any reason within this period, a full refund will be provided, and no questions will be asked.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Warranty" aria-expanded="false" aria-controls="collapseThree">
                Warranty:
              </button>
            </h2>
            <div id="Warranty" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                All warranties are based on the manufacturer's warranty.
              </div>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default About;
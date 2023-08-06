import React from 'react';
import './AboutUs.css';
import Sidebar from './SideBar';

const Terms = () => {
  return (
    <div>
    <Sidebar/>
    <div className="terms">
      <div className="terms-sellers">
        <h1 className="sellers">Terms and Conditions (T&C's) for Sellers</h1>
        <ul className='terms-ul'>
          <li>
            Seller Account: By creating a seller account on our platform, you agree to provide accurate and up-to-date information about yourself and your business. You are responsible for maintaining the confidentiality of your account credentials and ensuring the security of your account.
          </li>
          <li>
            Product Listings: As a seller, you are responsible for the accuracy and completeness of your product listings. You must provide clear and detailed information about your products, including pricing, availability, and shipping options.
          </li>
          <li>
            Intellectual Property: By listing products on our platform, you confirm that you have the necessary rights and permissions to use any images, trademarks, or other intellectual property associated with your products.
          </li>
          <li>
            Order Fulfillment: Sellers are expected to fulfill orders promptly and accurately. If there are any delays or issues with order fulfillment, you must communicate with the buyers and provide updates accordingly.
          </li>
          <li>
            Customer Service: Sellers are expected to provide excellent customer service and promptly respond to buyer inquiries, concerns, or complaints.
          </li>
          <li>
            Payment Processing: Our platform will handle payment processing for orders. Sellers are responsible for honoring all completed transactions and ensuring that the products are delivered as described.
          </li>
          <li>
            Prohibited Items: Sellers must comply with our list of prohibited items and refrain from listing any products that violate local laws or regulations.
          </li>
          <li>
            Reviews and Ratings: Buyers will have the opportunity to leave reviews and ratings for products and sellers. As a seller, you acknowledge and accept that feedback may be publicly displayed on our platform.
          </li>
        </ul>
      </div>
      <div className="terms-buyers">
        <h1 className="buyers">Terms and Conditions (T&C's) for Buyers</h1>
        <ul>
          <li>
            Buyer Account: By creating a buyer account on our platform, you agree to provide accurate and up-to-date information about yourself. You are responsible for maintaining the confidentiality of your account credentials and ensuring the security of your account.
          </li>
          <li>
            Product Information: Buyers are encouraged to review product details, pricing, and shipping options before making a purchase. If there are any uncertainties, you may contact the seller for clarification.
          </li>
          <li>
            Order Placement: When placing an order, ensure that all information, including shipping address and payment details, is accurate and complete.
          </li>
          <li>
            Payment: Buyers are responsible for making timely and secure payments for their orders through our platform.
          </li>
          <li>
            Order Receipt: Upon receiving the product, carefully inspect it for any damages or discrepancies. If there are any issues, contact the seller promptly to resolve the matter.
          </li>
          <li>
            Reviews and Ratings: Buyers have the opportunity to leave reviews and ratings for products and sellers. Please provide honest and constructive feedback to help other buyers make informed decisions.
          </li>
          <li>
            Prohibited Activities: Buyers must not engage in any fraudulent or harmful activities on our platform. Any such behavior may result in the termination of your account.
          </li>
          <li>
            Dispute Resolution: In the event of any disputes or concerns with a seller or product, buyers are encouraged to contact our support team for assistance in resolving the matter.
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Terms;

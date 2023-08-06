import React from 'react';
import './AboutUs.css';
import Sidebar from './SideBar';

const Help = () => {
  return (
    <div>
    <Sidebar/>
    <div className="help">
      <div className="help-buyers">
        <h1 className="sellers">For Sellers</h1>
        <p className='help-p'>
          If you're a seller looking to showcase and sell your products on our platform, we're here to assist you every step of the way. Here are some essential tips to get you started:
          <br/>
            <ul>
                <li>
                Seller Registration: To begin, you need to register as a seller on our platform. Fill out the necessary information, and our team will review your application to ensure the quality and legitimacy of the products you offer.
                </li><li>
                Product Listings: Once approved, you can start creating product listings. Provide accurate and detailed information about your products, including high-quality images, descriptions, and pricing. Engaging and informative listings help attract potential buyers.
                </li><li>
                Manage Inventory: Keep track of your inventory to avoid overselling. Update the availability status of each product promptly to maintain a positive shopping experience for customers.
                </li><li>
                Order Fulfillment: When a customer places an order, ensure you fulfill it promptly and accurately. Package the products securely to prevent damage during transit.
                </li><li>
                Customer Support: Promptly respond to customer inquiries and provide excellent customer support. Address any issues or concerns in a professional and friendly manner.
                </li><li>
                Secure Payment Processing: Rest assured that our platform utilizes secure payment gateways, ensuring safe and smooth transactions for both you and your customers.
                </li>
            </ul>
        </p>
      </div>
      <div className="help-sellers">
        <h1 className="buyers">For Buyers</h1>
        <p className='help-p'>
          We want your shopping experience on our platform to be seamless and enjoyable. Here are some helpful tips for buyers:
          Create an Account: Sign up to our platform to access exclusive offers, track orders, and receive personalized recommendations.
          <br/>
            <ul>
                <li>
        Browse Products: Explore our wide range of products from various sellers. Utilize search filters and categories to find exactly what you're looking for.
        </li><li>
        Product Details: Before making a purchase, carefully read the product descriptions, specifications, and customer reviews. Understanding the product's features and quality helps you make informed decisions.
        </li><li>
        Secure Payments: Our platform ensures secure payment processing using reliable payment gateways. You can confidently make purchases knowing your sensitive information is protected.
        </li><li>
        Order Tracking: After placing an order, you can track its status through your account. We'll provide updates on the shipment's progress until it reaches your doorstep.
        </li><li>
        Leave Feedback: Your feedback is valuable to us and other buyers. After receiving your order, consider leaving a review to help other shoppers and provide valuable insights to sellers.
                </li>
            </ul>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Help;

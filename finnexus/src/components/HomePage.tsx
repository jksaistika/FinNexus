import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', backgroundColor: '#001f3f', color: '#fff' }}>
        <div style={{ fontSize: '40px', fontWeight: 'bold' }}>FINNEXUS</div>
        <nav style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ color: '#fff', margin: '0 20px', fontSize: '22px' }}>Home</Link>
          <Link to="/about" style={{ color: '#fff', margin: '0 20px', fontSize: '22px' }}>About</Link>
          <Link to="/chatbot" style={{ color: '#fff', margin: '0 20px', fontSize: '22px' }}>Chatbot</Link>
          <Link to="/translator" style={{ color: '#fff', margin: '0 20px', fontSize: '22px' }}>Translator</Link>

          {/* Login and Sign Up Buttons */}
          <Link to="/login" style={{ 
            color: '#fff', 
            margin: '0 20px', 
            padding: '10px 20px', 
            backgroundColor: '#007bff', 
            borderRadius: '5px', 
            textDecoration: 'none', 
            fontSize: '18px' 
          }}>
            Login
          </Link>
          <Link to="/signup" style={{ 
            color: '#fff', 
            margin: '0 20px', 
            padding: '10px 20px', 
            backgroundColor: '#28a745', 
            borderRadius: '5px', 
            textDecoration: 'none', 
            fontSize: '18px' 
          }}>
            Sign Up
          </Link>
        </nav>
      </header>

      {/* Image Section */}
      <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: '1', padding: '20px' }}>
          <img 
            src="/img4.jpg" 
            alt="Finnexus Image" 
            style={{ width: '90%', height: 'auto', borderRadius: '8px' }} 
          />
        </div>
        
        {/* Content Section */}
        <div style={{ flex: '2', padding: '20px' }}>
          <h2 style={{ color: '#001f3f', fontSize: '48px', fontWeight: 'bold', textAlign: 'left' }}>Welcome to Finnexus</h2>
          <p style={{ color: '#333', fontSize: '24px', lineHeight: '1.8', textAlign: 'justify' }}>
            Finnexus is a platform designed to empower individuals with the tools and knowledge to take control of their financial future. Whether you’re looking to learn about budgeting, invest in micro plans, or discover available government schemes, Finnexus provides comprehensive educational modules and resources to help you make informed decisions. Explore the following modules and start your financial journey today!
          </p>
        </div>
      </div>

      <div style={{ marginTop: '60px' }}>
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#001f3f', fontSize: '40px', fontWeight: 'bold', textAlign: 'left' }}>
            <Link to="/fineducation" style={{ color: '#001f3f', textDecoration: 'none' }}>
              Fin-Education
            </Link>
          </h2>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* Image on the right */}
            <div style={{ flex: '1', padding: '20px' }}>
              <img 
                src="/img5.jpg" 
                alt="Fin-Education Image" 
                style={{ width: '90%', height: 'auto', borderRadius: '8px' }} 
              />
            </div>

            {/* Content on the left */}
            <div style={{ flex: '1', padding: '20px' }}>
              <p style={{ color: '#333', fontSize: '24px', lineHeight: '1.8', textAlign: 'justify' }}>
                The <strong>Fin-Education</strong> module offers a comprehensive learning platform aimed at educating individuals about financial concepts. The module features interactive content such as videos, quizzes, and articles to help users understand the basics of personal finance, budgeting, and investing. This module is designed for users of all financial backgrounds and offers a progressive learning approach. The content is divided into levels, with each level focusing on a specific financial topic. Users can test their understanding through quizzes after each level and track their progress in real-time.
              </p>
            </div>
          </div>
        </section>

        {/* Budgeting Section */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#001f3f', fontSize: '40px', fontWeight: 'bold', textAlign: 'left' }}>
            Budgeting</h2>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* Image on the left */}
            <div style={{ flex: '1', padding: '20px' }}>
              <img 
                src="/img6.jpg" 
                alt="Budgeting Image" 
                style={{ width: '90%', height: 'auto', borderRadius: '8px' }} 
              />
            </div>

            {/* Content on the right */}
            <div style={{ flex: '1', padding: '20px' }}>
              <p style={{ color: '#333', fontSize: '24px', lineHeight: '1.8', textAlign: 'justify' }}>
                The <strong>Budgeting</strong> module helps users create and manage personal budgets with ease. It provides tools to track expenses, categorize spending, and set savings goals. The module includes various budgeting strategies, such as the 50/30/20 rule, and offers visual aids like charts to help users understand their financial situation. Users can monitor their monthly and yearly spending trends and adjust their budgets accordingly. This module also includes tips for reducing unnecessary expenses and achieving financial goals through efficient budgeting.
              </p>
            </div>
          </div>

          {/* Additional Budgeting Content */}
          <div style={{ marginTop: '40px' }}>
            <h3 style={{ color: '#001f3f', fontSize: '32px', fontWeight: 'bold', textAlign: 'left' }}>How to Start Budgeting?</h3>
            <p style={{ color: '#333', fontSize: '24px', lineHeight: '1.8', textAlign: 'justify' }}>
              Starting a budget is the first step towards achieving financial stability. Begin by tracking your income and expenses to understand where your money is going. List your essential expenses, such as rent, utilities, and groceries, and set aside funds for savings or investments. From there, categorize your discretionary spending (like entertainment or dining out) and create limits to help manage these expenses. Use budgeting tools or apps that can automatically track your spending and provide reports to visualize where improvements can be made. Start small and make adjustments as you go to ensure your budget is sustainable.
            </p>
          </div>
        </section>

        {/* Micro-Investment Plans Section */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#001f3f', fontSize: '40px', fontWeight: 'bold', textAlign: 'left' }}>Micro-Investment Plans</h2>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* Image on the right */}
            <div style={{ flex: '1', padding: '20px' }}>
              <img 
                src="/img7.jpg" 
                alt="Micro-Investment Image" 
                style={{ width: '90%', height: 'auto', borderRadius: '8px' }} 
              />
            </div>

            {/* Content on the left */}
            <div style={{ flex: '1', padding: '20px' }}>
              <p style={{ color: '#333', fontSize: '24px', lineHeight: '1.8', textAlign: 'justify' }}>
                The <strong>Micro-Investment Plans</strong> module introduces users to the world of small-scale investing. It provides options for investing with minimal initial capital, allowing users to invest in a variety of assets such as stocks, bonds, and mutual funds with small amounts. The module offers detailed guidance on choosing investment plans based on risk tolerance and investment horizon. It also includes educational resources on how compound interest works, the benefits of long-term investing, and how to diversify investments for optimal returns.
              </p>
            </div>
          </div>

          {/* Additional Micro-Investment Content */}
          <div style={{ marginTop: '40px' }}>
            <h3 style={{ color: '#001f3f', fontSize: '32px', fontWeight: 'bold', textAlign: 'left' }}>How to Start Micro-Investing?</h3>
            <p style={{ color: '#333', fontSize: '24px', lineHeight: '1.8', textAlign: 'justify' }}>
              Micro-investing is a great way to get started with investing without a large upfront cost. To start, select an investment platform that allows you to invest small amounts regularly. Many micro-investment platforms round up your purchases to the nearest dollar and invest the spare change. You can also set recurring deposits to contribute small amounts periodically. With time, these small investments can grow significantly, especially when compounded. Ensure to choose low-cost investment options and maintain a diversified portfolio to reduce risks and maximize returns over the long term.
            </p>
          </div>
        </section>

                {/* Mentorship & Community Section */}
                <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#001f3f', fontSize: '40px', fontWeight: 'bold', textAlign: 'left' }}>
            Mentorship & Community
          </h2>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* Image on the left */}
            <div style={{ flex: '1', padding: '20px' }}>
              <img 
                src="/img8.jpg" 
                alt="Mentorship & Community Image" 
                style={{ width: '90%', height: 'auto', borderRadius: '8px' }} 
              />
            </div>

            {/* Content on the right */}
            <div style={{ flex: '1', padding: '20px' }}>
              <p style={{ color: '#333', fontSize: '24px', lineHeight: '1.8', textAlign: 'justify' }}>
                The <strong>Mentorship & Community</strong> module connects users with experienced financial mentors and like-minded individuals who are also on their financial education journey. The platform facilitates community discussions, networking, and knowledge sharing through forums and live chats. Mentors provide personalized advice and guidance based on individual financial goals and needs. The community aspect encourages peer support, which can be motivating and rewarding for those looking to improve their financial literacy and achieve financial independence.
              </p>
            </div>
          </div>

          {/* Additional Mentorship & Community Content */}
          <div style={{ marginTop: '40px' }}>
            <h3 style={{ color: '#001f3f', fontSize: '32px', fontWeight: 'bold', textAlign: 'left' }}>
              How Mentorship Can Help You
            </h3>
            <p style={{ color: '#333', fontSize: '24px', lineHeight: '1.8', textAlign: 'justify' }}>
              Mentorship can be a game-changer in your financial journey. By having access to experienced mentors, you can gain insights into how to effectively manage your finances, set achievable financial goals, and make informed investment decisions. Mentors provide valuable knowledge from their own experiences and help you avoid common mistakes. Whether you're a beginner or have some experience, a mentor can guide you through complex financial topics and help you stay motivated along the way.
            </p>

            <h3 style={{ color: '#001f3f', fontSize: '32px', fontWeight: 'bold', textAlign: 'left' }}>
              The Power of Community Support
            </h3>
            <p style={{ color: '#333', fontSize: '24px', lineHeight: '1.8', textAlign: 'justify' }}>
              The <strong>community</strong> feature enables users to connect with peers who are on a similar financial journey. It fosters a sense of belonging and encourages collaboration. You can share tips, challenges, and success stories, which makes learning more engaging and motivating. Whether it's participating in group discussions, attending live Q&A sessions, or simply asking for advice, the community aspect ensures you are never alone in your financial journey. Learning from others' experiences and sharing your own progress is an invaluable part of personal growth.
            </p>

            <h3 style={{ color: '#001f3f', fontSize: '32px', fontWeight: 'bold', textAlign: 'left' }}>
              Live Sessions and Peer-to-Peer Learning
            </h3>
            <p style={{ color: '#333', fontSize: '24px', lineHeight: '1.8', textAlign: 'justify' }}>
              In addition to one-on-one mentorship, we also offer live sessions with financial experts on a variety of topics, such as saving, investing, and planning for retirement. These live sessions provide an interactive learning experience where users can ask questions in real time and learn from expert advice. Furthermore, peer-to-peer learning allows you to exchange ideas and strategies with others, helping you gain diverse perspectives on managing finances. This dynamic and collaborative approach ensures that you are always learning and evolving.
            </p>
          </div>
        </section>


        {/* Government & NGO Schemes Section */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#001f3f', fontSize: '40px', fontWeight: 'bold', textAlign: 'left' }}>Government & NGO Schemes</h2>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* Image on the right */}
            <div style={{ flex: '1', padding: '20px' }}>
              <img 
                src="/img9.jpg" 
                alt="Government & NGO Schemes Image" 
                style={{ width: '90%', height: 'auto', borderRadius: '8px' }} 
              />
            </div>

            {/* Content on the left */}
            <div style={{ flex: '1', padding: '20px' }}>
              <p style={{ color: '#333', fontSize: '24px', lineHeight: '1.8', textAlign: 'justify' }}>
                The <strong>Government & NGO Schemes</strong> module educates users about various financial assistance programs available through government agencies and non-governmental organizations. These schemes aim to support individuals with limited financial resources, helping them achieve better financial stability. The module provides detailed information about eligibility criteria, application processes, and how to access these programs. Users can find schemes related to housing, education, healthcare, and more, helping them make informed decisions on accessing support.
              </p>
            </div>
          </div>

          {/* Additional Government & NGO Schemes Content */}
          <div style={{ marginTop: '40px' }}>
            <h3 style={{ color: '#001f3f', fontSize: '32px', fontWeight: 'bold', textAlign: 'left' }}>Accessing Government Schemes</h3>
            <p style={{ color: '#333', fontSize: '24px', lineHeight: '1.8', textAlign: 'justify' }}>
              Government schemes provide financial support for a wide range of needs, including education, healthcare, and housing. To access these schemes, users should first identify the relevant programs based on their needs. They can then check the eligibility criteria and gather necessary documents to apply. Many government schemes have online portals that allow users to apply directly through their website. Additionally, several NGOs collaborate with government agencies to facilitate access to these schemes, providing guidance and assistance throughout the application process.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;


SocialIQ

✨ Here is our Pre-Hackathon Assignment: Social Media Performance Analysis submission by team Nakshatra. Our enthusiastic team includes:

👨‍💻 Kamraan Mulani 👨‍💻 Afraz Hussain 👨‍💻 Rohit Gupta 👨‍💻 Aditya Singh 

🔧 About the Assignment 🎡 Goal To create a analytics tool using Langflow and DataStax Astra DB that can analyze engagement data from sample social media accounts.

🛠 Tools and Technologies

📀 DataStax Astra DB for handling database operations efficiently.
🔄 Langflow for building workflows and integrating GPT.
📈 Tasks and Process

🔍 Collect Engagement Data We worked with a sample dataset that includes:
❤ Likes
💪 Shares
💬 Comments
Different post formats (e.g., 🎢 carousels, 🎥 reels, 🖼 static images).
The data is stored in DataStax Astra DB for easy access and management.

🔄 Analyze Post Performance We designed a Langflow workflow to:
💡 Take input for the type of post.
🔎 Query Astra DB for the relevant data.
📈 Calculate average engagement for each post type.
🕵 Generate Insights Using GPT in Langflow, we generated insights such as:
"🎢 Carousel posts have 20% higher engagement than static posts."
"🎥 Reels receive twice as many comments as other types of posts."
🔢 How It Works

🔀 Steps in LangFlow Workflow:

Take Input: Accepts the post type.
Retrieve Data: Pulls engagement metrics from Astra DB.
Extract User Info: Identifies specific user data from input.
Filter Data: Filters based on user data.
Calculate Averages: Computes engagement averages.
Send to Model: Passes this data to GPT.
Generate Output: GPT creates meaningful insights.
📊 Data Management in Astra DB

Our database schema includes:

👤 user_id: A unique ID for each user.
🔖 post_type: Type of post (reel, carousel, static image).
❤ likes, 💬 comments, 💪 shares: Metrics to track engagement. 🔄 Features
⏳ Real-Time Analysis: Quickly assess social media performance.
🔄 Custom Insights: Personalized insights powered by GPT.
📊 Scalable Storage: Reliable and efficient database.
🌐 Workflow Automation: Smooth data flow with LangFlow.
🎧 How to Run the Project Locally

⚡ Requirements

Install Node.js on your computer.
Have access to DataStax Astra DB.
🔄 Steps to Run

Clone the Repository: bash git clone https://github.com/Kamraanmulani/SocialIQ.git cd SocialIQ

Install Dependencies: bash npm install

Set Environment Variables: Create a .env file and add the following: env LANGFLOW_APPLICATION_TOKEN=<your_token> PORT=5000 ASTRA_TOKEN=<your_astra_token> ASTRA_URL=<your_astra_url>

Run the Application: bash npm run dev node dist/index.js

🚀 Deployment Check out the live app here: SocialIQ : a social media analyzer chatbot.

📊 Tech Stack

Frontend: 🔧 React, Tailwind CSS
Database: 📀 Astra DB
Workflow Automation: 🔄 Langflow

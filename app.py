import requests
import streamlit as st
from dotenv import load_dotenv
import os
from streamlit_chat import message as st_message

load_dotenv()

BASE_API_URL = "https://api.langflow.astra.datastax.com"
LANGFLOW_ID = "a98fd801-76d1-41ed-8e76-52c93479eef3" # add from langflow 
FLOW_ID = "3986bd05-f7d3-43d4-aadb-322e1ee7fb50"
# APPLICATION_TOKEN = os.environ.get("APP_TOKEN")
APPLICATION_TOKEN = 'AstraCS:QUruREhCptCezfhalHQcgutK:ebfbdd63250bd1452177ddbdc0b13169a4f5d95094a5979142cf6de02184f218'
ENDPOINT = "admin"

def run_flow(message: str) -> dict:
    api_url = f"{BASE_API_URL}/lf/{LANGFLOW_ID}/api/v1/run/{ENDPOINT}"
    payload = {
        "input_value": message,
        "output_type": "chat",
        "input_type": "chat",
    }
    headers = {"Authorization": "Bearer " + APPLICATION_TOKEN, "Content-Type": "application/json"}
    response = requests.post(api_url, json=payload, headers=headers)
    return response.json()

def main():
    st.set_page_config(page_title="Social Media Analysis Chatbot", page_icon="🤖")
    
    # Custom CSS for blue background and chat-like UI
    st.markdown("""
        <style>
        .stApp {
            background-color: #ADD8E6;
        }
        .stTextInput > div > div > input {
            border-radius: 10px;
            padding: 10px;
        }
        .stButton > button {
            border-radius: 10px;
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
        }
        </style>
        """, unsafe_allow_html=True)

    st.title("Social Media Analysis Chatbot")
    st.markdown("Welcome to the Social Media Analysis Chatbot. Ask anything about social media content analysis!")

    if "messages" not in st.session_state:
        st.session_state.messages = []

    message = st.text_input("You:", placeholder="Ask something...")

    if st.button("Send"):
        if not message.strip():
            st.error("Please enter a message")
        else:
            st.session_state.messages.append({"role": "user", "content": message})
            with st.spinner("Running flow..."):
                try:
                    response = run_flow(message)
                    response_text = response["outputs"][0]["outputs"][0]["results"]["message"]["text"]
                    st.session_state.messages.append({"role": "bot", "content": response_text})
                except Exception as e:
                    st.error(str(e))

    for msg in st.session_state.messages:
        st_message(msg["content"], is_user=msg["role"] == "user")

if __name__ == "__main__":
    main()
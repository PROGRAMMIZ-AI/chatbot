import openai

# Set up your OpenAI API key
openai.api_key = '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'

def chat_with_gpt(prompt):
    try:
        response = openai.Completion.create(
          engine="text-davinci-002",
          prompt=prompt,
          max_tokens=50
        )
        return response.choices[0].text.strip()
    except Exception as e:
        return f"An error occurred: {str(e)}"

def main():
    print("Welcome to ChatGPT!")
    print("You can start chatting. Type 'exit' to end the conversation.")

    while True:
        user_input = input("You: ")
        
        if user_input.lower() == 'exit':
            print("Goodbye!")
            break
        
        # Prompt format: "User: <user_input>\nChatGPT:"
        prompt = f"User: {user_input}\nChatGPT:"
        response = chat_with_gpt(prompt)
        
        print("ChatGPT:", response)

if __name__ == "__main__":
    main()

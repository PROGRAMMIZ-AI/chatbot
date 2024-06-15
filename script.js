import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class ChatGPTApp extends JFrame {
    private JTextArea chatHistory;
    private JTextField userInput;
    private JButton sendButton;

    public ChatGPTApp() {
        setTitle("ChatGPT");
        setSize(400, 300);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        
        chatHistory = new JTextArea();
        chatHistory.setEditable(false);
        JScrollPane scrollPane = new JScrollPane(chatHistory);
        scrollPane.setVerticalScrollBarPolicy(JScrollPane.VERTICAL_SCROLLBAR_ALWAYS);
        add(scrollPane, BorderLayout.CENTER);
        
        JPanel inputPanel = new JPanel();
        inputPanel.setLayout(new BorderLayout());
        userInput = new JTextField();
        inputPanel.add(userInput, BorderLayout.CENTER);
        sendButton = new JButton("Send");
        inputPanel.add(sendButton, BorderLayout.EAST);
        add(inputPanel, BorderLayout.SOUTH);

        sendButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String userMessage = userInput.getText().trim();
                if (!userMessage.isEmpty()) {
                    appendMessage("User: " + userMessage);
                    userInput.setText("");

                    // Call your backend to interact with ChatGPT and get response
                    // For demo purpose, I'll just echo the user message
                    appendMessage("ChatGPT: " + userMessage.toUpperCase() + " (echoed)");
                }
            }
        });
    }

    private void appendMessage(String message) {
        chatHistory.append(message + "\n");
        chatHistory.setCaretPosition(chatHistory.getDocument().getLength());
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                new ChatGPTApp().setVisible(true);
            }
        });
    }
}

const { GoogleGenerativeAI } = require("@google/generative-ai");
const { getChatHistory, saveChatMessage } = require("../Model/chatModel");

// Get the GeminiAPI key from env file
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Define pathways
const pathways = [
  {
    "pathway_id": 1,
    "pathway_name": "Computer Science",
    "pathway_definition": "Computer Science is the study of computers and computational systems...",
    "pathway_roles": ["Product Manager", "UI/UX Designer", "Software Engineer", "Mobile App Developer", "Full-Stack Developer", "Back-End Developer"],
    "pathway_clubs": ["Break Through Tech", "Women in Computer Science", "INIT FIU"],
    "pathway_flowchart": "file:///Users/emely/Documents/CS%20Flowchart.png"
  },
  {
    "pathway_id": 2,
    "pathway_name": "Cybersecurity",
    "pathway_definition": "Cybersecurity is all about protecting computers, networks, and data from hackers...",
    "pathway_roles": ["Security Analyst", "Penetration Tester", "Incident Response", "Security Consultant", "Cryptographer", "Security Architect"],
    "pathway_clubs": ["Break Through Tech", "Women in CyberSecurity", "Tech Flow"],
    "pathway_flowchart": "file:///Users/emely/Documents/cyber.png"
  },
  {
    "pathway_id": 3,
    "pathway_name": "Information Technology",
    "pathway_definition": "Information Technology (IT) is all about using computers and technology to manage information...",
    "pathway_roles": ["Network Administrator", "Help Desk Technician", "Systems Administrator", "Database Administrator", "IT Project Manager", "Web Developer"],
    "pathway_clubs": ["INIT FIU", "Tech Flow", "Women in Computer Science"],
    "pathway_flowchart": "file:///Users/emely/Documents/it%20flow.png"
  },
  {
    "pathway_id": 4,
    "pathway_name": "Data Science & AI",
    "pathway_definition": "Data Science and AI focus on analyzing data and building intelligent systems...",
    "pathway_roles": ["Data Scientist", "AI Research Scientist", "Data Analyst", "Business Intelligence Analyst", "AI Product Manager"],
    "pathway_clubs": ["AI & Coding Club", "AI @ FIU", "Code Crunch"],
    "pathway_flowchart": "file:///Users/emely/Documents/data%20science.png"
  }
];



//WORKS
// const chatHandler = async (req, res) => {
//     const { userResponse, conversationId } = req.body;

//     let prompt = `This user has a creative interest and is teaching in a classroom technology, likes security. Based on the following pathways, what is the best career pathway for this user? 
// 1. Computer Science
// 2. Cybersecurity
// 3. Information Technology
// 4. Data Science & AI`;

//     try {
//         let messages = [
//             { role: "system", content: "You are a high school advisor that chooses the best career path for students." },
//         ];
        
//         if (conversationId) {
//             const previousMessages = await getChatHistory(conversationId);
//             previousMessages.forEach((msg) => {
//                 messages.push({ role: "user", content: msg.prompt });
//                 messages.push({ role: "assistant", content: msg.response });
//             });
//         }

//         messages.push({ role: "user", content: prompt });

//         // Call Gemini API
//         const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
//         const result = await model.generateContent(prompt);
//         const chatResponse = await result.response.text();
//         console.log("AI Response:", chatResponse); // Log AI response

//         // Normalize the response
//         const bestPathwayName = chatResponse.trim().toLowerCase(); // Convert to lowercase
//         console.log("Best Pathway Name (normalized):", bestPathwayName);

//         // Check against lowercase pathway names
//         const availablePathways = pathways.map(pathway => pathway.pathway_name.toLowerCase());
//         console.log("Available Pathways:", availablePathways);

//         // Check if the normalized response matches any of the available pathways
//         const matchedPathway = pathways.find(pathway => pathway.pathway_name.toLowerCase() === bestPathwayName);

//         if (matchedPathway) {
//             const pathwayDetails = matchedPathway;
//             res.json({
//                 message: `The best pathway for the user is ${matchedPathway.pathway_name}.`,
//                 pathway: matchedPathway.pathway_name,
//                 details: pathwayDetails
//             });
//         } else {
//             console.log("Pathway not found, available options:", availablePathways);
//             res.status(400).json({ error: "Pathway not found." });
//         }
//     } catch (error) {
//         console.error("Error in chat handler:", error);
//         res.status(500).send("Something went wrong");
//     }
// };

const chatHandler = async (req, res) => {
    const { userResponse, conversationId } = req.body;
  
    let prompt = `This user has a creative interest in security and technology. Based on the following pathways, what is the best career pathway for this user? 
  1. Computer Science
  2. Cybersecurity
  3. Information Technology
  4. Data Science & AI`;
  
    try {
      let messages = [
        { role: "system", content: "You are a high school advisor that chooses the best career path for students." },
      ];
  
      if (conversationId) {
        const previousMessages = await getChatHistory(conversationId);
        previousMessages.forEach((msg) => {
          messages.push({ role: "user", content: msg.prompt });
          messages.push({ role: "assistant", content: msg.response });
        });
      }
  
      messages.push({ role: "user", content: prompt });
  
      // Call Gemini API
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(prompt);
      const chatResponse = await result.response.text();
      
      console.log("Complete Gemini API Response:", result); // Log the complete response
      console.log("AI Response:", chatResponse); // Log AI response
  
      // Normalize and trim the response for comparison
      const bestPathwayName = chatResponse.trim().toLowerCase();
  
      // Available pathways
      const availablePathways = pathways.map(p => p.pathway_name.toLowerCase());
  
      if (availablePathways.includes(bestPathwayName)) {
        const pathwayDetails = pathways.find(pathway => pathway.pathway_name.toLowerCase() === bestPathwayName);
        
        // Save chat message to DB
        const newConversationId = conversationId || Date.now().toString();
        await saveChatMessage(newConversationId, prompt, chatResponse);
  
        res.json({
          message: `The best pathway for the user is ${pathwayDetails.pathway_name}.`,
          pathway: pathwayDetails,
          conversationId: newConversationId,
        });
      } else {
        console.log("Pathway not found, available options:", availablePathways);
        res.status(400).json({ error: "Pathway not found." });
      }
    } catch (error) {
      console.error("Error in chat handler:", error);
      res.status(500).send("Something went wrong");
    }
  };
  

const chatBotHandler = async (req, res) => {
  const { prompt, conversationId } = req.body;
  let refinedPrompt = prompt + "Only answer if previous sentences is related to oyung girls asking about tech careers. Reply in less than 2 sentences.";
  if (!prompt) {
    return res.status(400).send("Prompt is empty - it is required");
  }

  try {
    let messages = [
      { role: "system", content: "You are a highschool counselor that assists young girls in choosing their tech pathway" },
    ];

    messages.push({ role: "user", content: refinedPrompt });

    // get the model - WORKING WITH GEMINI API --------------------
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    //get the result from the model using the generateContent and passing in the prompt
    const result = await model.generateContent(refinedPrompt);
    const chatResponse = await result.response.text();

    //new conversation id and saave the chat message to DB
    const newConversationId = conversationId || Date.now().toString();
    
    res.json({
      prompt: prompt,
      response: chatResponse,
      conversationId: newConversationId,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
};

module.exports = {
  chatHandler,
  chatBotHandler
};

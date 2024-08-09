export interface HelpArticle {
    id: number;
    title: string;
    description: string;
    steps: string;
    icon: string; // URL to the icon image
    details: { sectionTitle?: string; question: string; answer: string }[];
}

export const helpArticles: HelpArticle[] = [
    {
        id: 1,
        title: "How to Create a Successful Project Brief",
        description:
            "A good project brief is vital for the perfect execution of your project. Getting the most out of SellCrea8's creative team starts with a great project brief, which is the best way to ensure that your design request is delivered perfectly. Here is a step-by-step guide to help you complete your project brief.",
        steps: "5 Steps",
        icon: "/icons/help/icon1.svg",
        details: [
            {
                question: "Objectives",
                answer: "Clearly state the brief goals/purpose. Example: 1. To increase brand visibility. 2. To enhance user experience. 3. To generate leads.",
            },
            {
                question: "Type of Industry",
                answer: "Specify your industry. Example: Ecommerce, Technology, Healthcare.",
            },
            {
                question: "Brief Descriptions",
                answer: "Provide a detailed description of what you need. Example: We need a set of three banner ads for our new product launch, each highlighting different features of the product.",
            },
            {
                question: "Top Three Competitors",
                answer: "List your top three competitors to give context to the creative team about your market landscape. Example: 1. Competitor 1 2. Competitor 2 3. Competitor 3",
            },
            {
                question: "Top Three Aspirations/Benchmarks",
                answer: "Highlight three brands or projects that inspire you or serve as benchmarks for your project. Example: 1. Brand A for its minimalist design and user experience. 2. Brand B for its effective use of color and typography. 3. Brand C for its engaging social media campaigns.",
            },
        ],
    },
    {
        id: 2,
        title: "How Does SellCrea8 Work? Your Guide to Our Creative and Digital Solutions",
        description:
            "Welcome to SellCrea8, where we turn your creative and digital needs into reality with ease and efficiency. If you are wondering how our platform works, this guide will walk you through every step of the process, from selecting your service bundle to completing your project with satisfaction. Let’s dive in!",
        steps: "7 Steps",
        icon: "/icons/help/icon2.svg",
        details: [
            {
                question: "Step 1: Explore Our Service Bundles",
                answer: "At SellCrea8, we offer different creative and digital services bundles designed to meet diverse business needs. Whether you are a small business owner, a freelancer, or part of a larger enterprise, we have tailored packages that fit your requirements and budget.",
            },
            {
                question: "Step 2: Sign Up and Create Your Account",
                answer: "Once you have selected a bundle that suits your needs, it is time to create your SellCrea8 account. This step ensures that you have a personalized dashboard to manage your projects efficiently.",
            },
            {
                question: "Step 3: Purchase and Submit Your Project Brief",
                answer: "After setting up your account, you can proceed to purchase your selected bundle. This is where your creative journey begins.",
            },
            {
                question: "Step 4: Book a Call and Upload Assets",
                answer: "To ensure we have a clear understanding of your project, you will schedule a call with our team. This step is crucial for aligning on project goals and assets needed.",
            },
            {
                question: "Step 5: Project Onboarding and Execution",
                answer: "Once we have all the necessary information and materials, your project will be onboarded into our system. This is where the magic happens!",
            },
            {
                question: "Step 6: Revisions and Final Approval",
                answer: "We understand that revisions are often necessary to achieve perfection. At SellCrea8, we offer revisions based on your package to ensure you are pleased with the final output.",
            },
            {
                question: "Step 7: Project Completion and Offboarding",
                answer: "After the project is finalized and approved, we schedule an offboarding call to ensure everything meets your expectations and to wrap up any final details.",
            },
        ],
    },
    {
        id: 3,
        title: "Ensuring the Security of Your Payment Information with SellCrea8",
        description:
            "At SellCrea8, we understand that the security of your financial information is a top priority. When you trust us with your payment details, we take every possible measure to ensure they remain safe and secure. Here’s how we protect your financial transactions:",
        steps: "5 Best Practices",
        icon: "/icons/help/icon3.svg",
        details: [
            {
                question: "Advanced Encryption Protocols",
                answer: "We utilize industry-standard encryption technologies to protect your sensitive information. Encryption converts your data into a secure code, preventing unauthorized access during the transaction process. This ensures that your payment information is protected from potential cyber threats.",
            },
            {
                question: "Secure Payment Gateways",
                answer: "SellCrea8 partners with trusted payment gateway providers that adhere to the highest security standards. These gateways are designed to process your transactions securely, minimizing the risk of fraud and data breaches.",
            },
            {
                question: "Fraud Detection and Prevention",
                answer: "To safeguard your financial information further, SellCrea8 employs sophisticated fraud detection and prevention systems. These systems continuously monitor transactions for any unusual activity, ensuring that any suspicious behavior is identified and addressed promptly.",
            },
            {
                question: "Regular Security Audits",
                answer: "We conduct regular security audits and assessments to identify and rectify potential vulnerabilities within our system. This proactive approach helps us maintain a robust security framework, providing you with peace of mind when making transactions.",
            },
            {
                question: "User Best Practices",
                answer: "While we take extensive measures to protect your payment information, we also encourage users to follow best practices for online security. This includes using strong passwords, avoiding public Wi-Fi for transactions, and monitoring your account regularly for any unauthorized activity.",
            },
        ],
    },
    {
        id: 4,
        title: "Is SellCrea8 Right for You? Discover the Key Beneficiaries",
        description:
            "SellCrea8 is a versatile platform designed to cater to a wide range of users seeking creative and digital services. Whether you are a business, freelancer, or an individual, SellCrea8 has something to offer you. Here is a closer look at who can benefit from using SellCrea8 and how it can make a difference.",
        steps: "Business, Freelancer and Individual",
        icon: "/icons/help/icon4.svg",
        details: [
            {
                sectionTitle: "Businesses",
                question: "Small and Medium-sized Enterprises (SMEs)",
                answer: "For SMEs, engaging creative projects can be challenging due to limited resources and expertise. SellCrea8 offers tailored solutions to help SMEs achieve their goals. Whether it's branding, marketing, or digital presence, we have packages designed to meet your needs and budget.",
            },
            {
                sectionTitle: "Businesses",
                question: "Large Enterprises",
                answer: "Even large enterprises can benefit from our services to support their in-house teams. SellCrea8 provides specialized services to complement your existing efforts, ensuring consistency and innovation in your projects. Our expertise can help enhance your marketing campaigns, product launches, and brand management.",
            },
            {
                sectionTitle: "Businesses",
                question: "Startups",
                answer: "Startups can greatly benefit from leveraging SellCrea8's expertise to scale their operations. Our team understands the unique challenges faced by startups and offers flexible solutions to support rapid growth and market entry.",
            },
            {
                sectionTitle: "Freelancers",
                question: "Creative Professionals",
                answer: "Freelancers and creative professionals can rely on SellCrea8 to provide additional resources and support. We offer services that allow you to focus on your creative work while we handle the project management, marketing, and client communication aspects.",
            },
            {
                sectionTitle: "Freelancers",
                question: "Consultants",
                answer: "Consultants can leverage SellCrea8 to enhance their service offerings to clients. By partnering with us, you can provide comprehensive solutions that include creative, marketing, and digital services, adding value to your consultancy projects.",
            },
            {
                sectionTitle: "Individuals",
                question: "Entrepreneurs",
                answer: "Entrepreneurs can benefit from SellCrea8's support in bringing their ideas to life. From branding and marketing to website development and social media management, we offer a range of services to help you establish and grow your business.",
            },
            {
                sectionTitle: "Individuals",
                question: "Personal Projects",
                answer: "Individuals working on personal projects can also find value in SellCrea8's services. Whether it's a personal blog, a creative portfolio, or a community initiative, we can help you achieve your goals with professional support and resources.",
            },
        ],
    },
    {
        id: 5,
        title: "A Comprehensive Guide to SellCrea8 Offerings",
        description:
            "SellCrea8 is a versatile platform designed to make booking and managing creative and digital services effortless. From service booking to payment processing, user onboarding to personalized recommendations, SellCrea8 has it all. Here’s a closer look at what SellCrea8 offers and how it can benefit you.",
        steps: "6 Steps",
        icon: "/icons/help/icon5.svg",
        details: [
            {
                question: "Streamlined Service Booking",
                answer: "SellCrea8 provides a seamless service booking experience, whether you are looking for a single service or a comprehensive package. Our platform is designed to make it easy for you to browse, select, and book the services you need.",
            },
            {
                question: "Secure Payment Processing",
                answer: "We ensure that all payments are processed securely, adhering to the highest standards of security to protect your financial information. Our payment gateways are designed to offer a smooth and secure transaction experience.",
            },
            {
                question: "Effortless User Onboarding",
                answer: "Getting started with SellCrea8 is easy, thanks to our user-friendly onboarding process. From setting up your account to managing your projects, we make sure you have everything you need to get started quickly and efficiently.",
            },
            {
                question: "Personalized Recommendations",
                answer: "Our platform leverages advanced AI technology to provide personalized recommendations based on your project brief and preferences. This ensures that you get the best possible services tailored to your needs.",
            },
            {
                question: "Project Management and Tracking",
                answer: "Managing your projects is easier with SellCrea8. Our platform offers tools for project management and tracking, allowing you to monitor progress and stay updated on deliverables and milestones.",
            },
            {
                question: "Dedicated Support and Assistance",
                answer: "SellCrea8 is committed to providing exceptional support. Whether you need help with a specific project or general assistance, our support team is here to help you every step of the way.",
            },
        ],
    },
    {
        id: 6,
        title: "How to Effectively Leave Feedback for Your SellCrea8 Creative Team",
        description:
            "Providing clear and constructive feedback is essential for ensuring your project meets your expectations. At SellCrea8, we have streamlined the feedback process using Zoho Projects and dedicated project/account managers to make it as easy and efficient as possible. Here is a step-by-step guide on how to leave feedback for the creative team working on your project.",
        steps: "7 Steps",
        icon: "/icons/help/icon6.svg",
        details: [
            {
                question: "Step 1: Access Your Zoho Projects Dashboard",
                answer: "Using the Zoho Projects dashboard, you can easily monitor the progress of your projects, provide feedback, and communicate with your creative team. This tool helps streamline the feedback process and ensures that your input is incorporated efficiently.",
            },
            {
                question: "Step 2: Review Drafts and Deliverables",
                answer: "Carefully review the drafts and deliverables submitted by the creative team. Providing detailed and constructive feedback helps ensure that the final output meets your expectations and project goals.",
            },
            {
                question: "Step 3: Leave Feedback Using Zoho Projects Tools",
                answer: "Zoho Projects provides various tools for leaving feedback, such as comments, annotations, and task updates. Use these tools to communicate your thoughts and suggestions clearly and effectively.",
            },
            {
                question: "Step 4: Use Video Feedback for More Clarity",
                answer: "Sometimes, explaining feedback verbally or visually can provide more clarity to the creative team. Consider using video feedback to share your thoughts and demonstrate specific changes or improvements.",
            },
            {
                question: "Step 5: Communicate with Your Project Manager",
                answer: "Your project manager is your main point of contact for any questions or concerns. Regular communication with the project manager helps ensure that your feedback is addressed promptly and that the project stays on track.",
            },
            {
                question: "Step 6: Monitor Revisions and Updates",
                answer: "Stay engaged with the project by monitoring revisions and updates. This allows you to provide timely feedback and make sure that the project progresses according to your expectations.",
            },
            {
                question: "Step 7: Approve the Final Project",
                answer: "Once all revisions have been made and you are satisfied with the final output, provide your approval. This final step signifies that the project is complete and ready for delivery.",
            },
        ],
    },
    {
        id: 7,
        title: "How to Get Personalized Recommendations on SellCrea8",
        description:
            "At SellCrea8, we understand that every project is unique, and finding the right creative and digital services can sometimes be overwhelming. That’s why we offer personalized recommendations to help streamline your decision-making process and ensure you get the best possible service for your needs. This feature leverages advanced AI technology to analyze your project brief and provide tailored suggestions. Here’s how you can make the most of our personalized recommendation feature.",
        steps: "10 Steps",
        icon: "/icons/help/icon7.svg",
        details: [
            {
                sectionTitle: "New Users: Getting Started with Personalized Recommendations",
                question: "Start with a Project Brief",
                answer: "Various services and features tailored to help you achieve your project goals. From initial consultation to final delivery, we are committed to providing you with the best possible service. Here’s how to get started with our personalized recommendations feature: 1. Start with a Project Brief. 2. Sign up and Access the Dashboard. 3. Sales Team Follow-Up. 4. Purchase the Recommended Bundle.",
            },
            {
                sectionTitle: "New Users: Getting Started with Personalized Recommendations",
                question: "Sign Up and Access the Dashboard",
                answer: "After completing your project brief, sign up and access your personalized dashboard. This dashboard provides an overview of your project and allows you to track progress, communicate with the team, and manage your project efficiently.",
            },
            {
                sectionTitle: "New Users: Getting Started with Personalized Recommendations",
                question: "Sales Team Follow-Up",
                answer: "Our sales team will follow up with you to discuss your project needs in detail and recommend the best services and packages for your specific requirements.",
            },
            {
                sectionTitle: "New Users: Getting Started with Personalized Recommendations",
                question: "Purchase the Recommended Bundle",
                answer: "Based on the recommendations provided by our sales team, purchase the recommended bundle that best suits your needs. This bundle includes all the services necessary to achieve your project goals.",
            },
            {
                sectionTitle: "Returning Users: Accessing Personalized Recommendations",
                question: "Log in to Your Account",
                answer: "Log in to your account to access your personalized recommendations and manage your project.",
            },
            {
                sectionTitle: "Returning Users: Accessing Personalized Recommendations",
                question: "View Personalized Recommendations",
                answer: "Your personalized recommendations will be available in your dashboard. Review these recommendations and select the ones that best fit your project needs.",
            },
            {
                sectionTitle: "Returning Users: Accessing Personalized Recommendations",
                question: "Benefits of Personalized Recommendations",
                answer: "Personalized recommendations help ensure that you receive the most relevant services and solutions for your project. This tailored approach saves you time and effort, providing a seamless experience.",
            },
            {
                sectionTitle: "Frequently Asked Questions",
                question: "How accurate are the personalized recommendations?",
                answer: "Our personalized recommendations are generated using advanced algorithms and AI technology to ensure accuracy and relevance. We continuously refine our processes to provide the best possible recommendations for your needs.",
            },
            {
                sectionTitle: "Frequently Asked Questions",
                question: "Can I modify my project brief after submission?",
                answer: "Yes, you can modify your project brief after submission to accommodate any changes or updates. This flexibility ensures that your project brief remains accurate and up-to-date.",
            },
            {
                sectionTitle: "Frequently Asked Questions",
                question: "How soon will I receive my recommendations?",
                answer: "You will receive your personalized recommendations within a few days after submitting your project brief. Our team works diligently to review your brief and provide the best possible recommendations promptly.",
            },
        ],
    },
];

export type ContentCard = {
  title: string;
  description: string;
  icon?: string;
};

export type SitePage = {
  slug: string;
  navTitle: string;
  category: "Product" | "Service";
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  visualLabels: [string, string, string];
  heroStat: { value: string; label: string };
  benefitsTitle?: string;
  benefitsIntro?: string;
  benefits: ContentCard[];
  featuresTitle?: string;
  featuresIntro?: string;
  features: ContentCard[];
  capabilities: string[];
  showcase?: ContentCard[];
  related: string[];
  sourceUrl: string;
};

export const productPages: SitePage[] = [
  {
    slug: "docudex-edms",
    navTitle: "Document Management",
    category: "Product",
    eyebrow: "DocuDEX Enterprise EDMS",
    title: "Electronic Document Management System",
    subtitle: "Changing the way we work.",
    description:
      "DocuDEX helps organizations capture, manage, store, share and search valuable documents through a secure enterprise workspace designed for high-volume information operations.",
    visualLabels: ["Capture", "Manage", "Search"],
    heroStat: { value: "70+", label: "organizations supported" },
    benefits: [
      { title: "Empowered communication", description: "Improve team collaboration with shared, controlled access to enterprise content.", icon: "users" },
      { title: "Paperless operations", description: "Streamline paper-based processes while saving time, storage space and operating cost.", icon: "file" },
      { title: "Operational efficiency", description: "Reduce repetitive handling and speed up access to business-critical information.", icon: "bolt" },
      { title: "Cost effective", description: "Replace manual document handling with a scalable digital platform.", icon: "chart" },
      { title: "Decision agility", description: "Unify access to structured data and unstructured content for faster decisions.", icon: "spark" },
      { title: "Anywhere access", description: "Support secure access to authorized information from distributed teams and locations.", icon: "globe" }
    ],
    features: [
      { title: "Real-time verification", description: "Support identity and content verification within controlled document workflows.", icon: "scan" },
      { title: "Powerful document search", description: "Find documents quickly through metadata, categories and flexible search tools.", icon: "search" },
      { title: "Workflow management", description: "Coordinate tasks, reviews, approvals and document-driven business processes.", icon: "workflow" },
      { title: "Security and traceability", description: "Apply authentication, authorization, ownership, audit trails and access controls.", icon: "shield" }
    ],
    capabilities: ["Unifying access", "Document versioning", "Flexible search", "Flexible categorization", "Authentication", "Authorization and traceability", "Ownership", "Solid security", "API-ready integration"],
    related: ["docudex-workflow", "capture-software", "record-management"],
    sourceUrl: "https://devnetlimited.com/docudex-edms/"
  },
  {
    slug: "docudex-workflow",
    navTitle: "Process Automation",
    category: "Product",
    eyebrow: "DocuDEX Workflow",
    title: "Process Automation",
    subtitle: "Transform the process. Transfer the burden.",
    description:
      "DocuDEX Workflow helps small, medium and large organizations manage document-driven business processes with configurable approvals, collaboration, security and real-time operational visibility.",
    visualLabels: ["Route", "Approve", "Automate"],
    heroStat: { value: "24/7", label: "digital workflow availability" },
    benefits: [
      { title: "Reduce operating cost", description: "Lower the effort associated with manual document movement and repetitive processing.", icon: "chart" },
      { title: "Streamline work", description: "Turn paper-based routines into structured, trackable digital workflows.", icon: "workflow" },
      { title: "Work from anywhere", description: "Enable approved users to participate in processes across offices and locations.", icon: "globe" },
      { title: "Paperless automation", description: "Remove manual hand-offs and accelerate return on process investment.", icon: "bolt" },
      { title: "Data protection", description: "Protect business information through controlled access and traceable actions.", icon: "shield" },
      { title: "Communication boost", description: "Create a shared context for makers, checkers, reviewers and decision-makers.", icon: "users" }
    ],
    features: [
      { title: "Robotic workforce", description: "Use bots to automate repetitive and rules-based activities.", icon: "bot" },
      { title: "Cross-department automation", description: "Coordinate business processes across teams, functions and systems.", icon: "workflow" },
      { title: "LC process automation", description: "Digitize and optimize Letter of Credit workflows for trade finance operations.", icon: "bank" },
      { title: "Card process automation", description: "Structure credit-card application and review activities through configurable workflows.", icon: "card" }
    ],
    capabilities: ["Financial streamlining", "Document versioning", "Efficient onboarding", "Cascading metadata", "Document viewer", "Template design", "Review requests", "Intuitive reports", "Workflow grouping", "Maker/checker baskets", "Flexible access control", "API integration", "Review and commenting", "Management reporting"],
    related: ["rpa", "banking-solution", "docudex-edms"],
    sourceUrl: "https://devnetlimited.com/docudex-workflow/"
  },
  {
    slug: "capture-software",
    navTitle: "Capture Software",
    category: "Product",
    eyebrow: "Captura Content Intelligence",
    title: "Next-generation document capture",
    subtitle: "Turn business documents into business value.",
    description:
      "Captura provides a centralized scanning and capture experience across scanner brands, combining OCR, ICR, indexing, quality control and automated routing in a unified operating interface.",
    visualLabels: ["Scan", "Extract", "Index"],
    heroStat: { value: "1", label: "unified capture workspace" },
    benefits: [
      { title: "Confident extraction", description: "Extract and index important information with intelligent recognition technology.", icon: "scan" },
      { title: "Process integrity", description: "Use quality-control tools to verify accuracy, compliance and reliability.", icon: "shield" },
      { title: "Automated routing", description: "Send captured data to folders, email, cloud storage or connected business systems.", icon: "workflow" },
      { title: "Document separation", description: "Identify and split individual documents automatically within mixed batches.", icon: "layers" },
      { title: "Seamless collaboration", description: "Support multiple users through a clear capture and indexing interface.", icon: "users" },
      { title: "Operational control", description: "Standardize capture profiles, separation rules and processing outcomes.", icon: "settings" }
    ],
    features: [
      { title: "Scanning profiles", description: "Configure DPI, simplex or duplex mode, blank-page deletion, colour, rotation and deskew.", icon: "settings" },
      { title: "Separation rules", description: "Define how batches are grouped and separated for consistent organization.", icon: "layers" },
      { title: "OCR and ICR engine", description: "Extract printed and handwritten content with human-supervised review where needed.", icon: "scan" },
      { title: "Tight integration", description: "Connect capture operations with document management and downstream systems.", icon: "link" }
    ],
    capabilities: ["Universal scanner support", "Image cropping", "Rotation correction", "Blank-page detection", "Auto batch processing", "Multi-user indexing", "Human-supervised OCR/ICR", "Data validation", "Quality control", "Automated routing"],
    related: ["docudex-edms", "digital-archiving", "document-scanner"],
    sourceUrl: "https://devnetlimited.com/capture-software/"
  },
  {
    slug: "record-management",
    navTitle: "Record Management",
    category: "Product",
    eyebrow: "Physical and Digital Records",
    title: "Record Management",
    subtitle: "Store and secure valuable records.",
    description:
      "Devnet provides secure management for electronic and hard-copy records, including offsite storage, controlled retrieval, lifecycle handling, data backup and secure end-of-life destruction.",
    visualLabels: ["Store", "Retrieve", "Protect"],
    heroStat: { value: "360°", label: "record lifecycle coverage" },
    benefits: [
      { title: "Storage savings", description: "Reduce the cost and space required for physical records.", icon: "archive" },
      { title: "Document security", description: "Protect confidential and valuable records with controlled handling.", icon: "shield" },
      { title: "Lifecycle management", description: "Manage records from collection and storage through expiry and disposal.", icon: "workflow" },
      { title: "Content organization", description: "Maintain structured, searchable and efficiently managed records.", icon: "layers" },
      { title: "Secure shredding", description: "Destroy expired records using a controlled and auditable process.", icon: "trash" },
      { title: "Timely access", description: "Retrieve and deliver documents when authorized teams need them.", icon: "clock" }
    ],
    features: [
      { title: "Collection and transfer", description: "Move documents into controlled storage with clear custody processes.", icon: "truck" },
      { title: "Timely retrieval", description: "Locate and deliver requested records within agreed service levels.", icon: "search" },
      { title: "Secure disposal", description: "Apply approved destruction at the end of the record lifecycle.", icon: "trash" },
      { title: "Data backup", description: "Protect critical electronic information with managed backup processes.", icon: "database" }
    ],
    capabilities: ["Secure shredding", "Efficient document handling", "Fingerprint verification", "Offsite storage", "Chain of custody", "Retention scheduling", "Access control", "Confidentiality"],
    related: ["docudex-edms", "digital-archiving", "capture-software"],
    sourceUrl: "https://devnetlimited.com/record-management/"
  },
  {
    slug: "agile-audit",
    navTitle: "Agile Audit",
    category: "Product",
    eyebrow: "Audit and Compliance",
    title: "Agile Audit",
    subtitle: "Move from distributed audit work to a controlled digital workflow.",
    description:
      "Agile Audit is an integrated audit and compliance management system that digitizes planning, observations, clarification, rectification, reporting and risk supervision.",
    visualLabels: ["Plan", "Observe", "Resolve"],
    heroStat: { value: "Live", label: "audit progress visibility" },
    benefits: [
      { title: "Audit process advancement", description: "Raise consistency and quality across the audit lifecycle.", icon: "chart" },
      { title: "Enhanced visibility", description: "Give stakeholders faster access to progress, risks and pending actions.", icon: "eye" },
      { title: "Compliance facilitation", description: "Support structured compliance and risk-supervision activities.", icon: "shield" },
      { title: "Effortless coordination", description: "Reduce the effort involved in preparing and steering audits.", icon: "workflow" },
      { title: "Real-time analytics", description: "Track audits, employees, observations and remediation activity.", icon: "pulse" },
      { title: "Paperless audit", description: "Find evidence and status information faster through digital automation.", icon: "file" }
    ],
    features: [
      { title: "Dynamic audit mapping", description: "Connect audit activities with configurable audit types and structures.", icon: "map" },
      { title: "Integrated clarification", description: "Run multi-cycle communication and clarification in one system.", icon: "message" },
      { title: "Risk-rating reports", description: "Generate reports using preconfigured risk-rating groups.", icon: "alert" },
      { title: "Pictographic tracking", description: "View live progress and remote status of running audits.", icon: "pulse" }
    ],
    capabilities: ["Real-time PDF previews", "Guided observations", "Automated rectification flow", "Workflow-sensitive views", "Risk grading", "Evidence management", "Observation categories", "Remote audit visibility"],
    related: ["docudex-workflow", "docudex-edms", "rpa"],
    sourceUrl: "https://devnetlimited.com/agile-audit/"
  },
  {
    slug: "hrms",
    navTitle: "HRIS",
    category: "Product",
    eyebrow: "People Operations",
    title: "Human Resources Information System",
    subtitle: "A next-generation HRIS for a people-centric environment.",
    description:
      "Devnet HRIS centralizes employee information and streamlines recruitment, onboarding, payroll, performance, training, leave, self-service, compliance and reporting.",
    visualLabels: ["Hire", "Manage", "Grow"],
    heroStat: { value: "1", label: "central people workspace" },
    benefits: [
      { title: "Onboarding and offboarding", description: "Coordinate paperwork, training, access and employee transitions.", icon: "users" },
      { title: "Benefits and payroll", description: "Support salary, deductions, tax and employee-benefit processes.", icon: "wallet" },
      { title: "Performance management", description: "Set goals, collect feedback and maintain performance histories.", icon: "chart" },
      { title: "Training and development", description: "Plan learning programs and track employee progress.", icon: "book" },
      { title: "Employee self-service", description: "Let employees access information, pay records and leave requests.", icon: "person" },
      { title: "Security and privacy", description: "Protect sensitive HR data with role-based access and controls.", icon: "shield" }
    ],
    features: [
      { title: "Applicant tracking", description: "Manage vacancies, applications and candidate stages from one place.", icon: "search" },
      { title: "Payroll", description: "Coordinate salary and employee-benefit administration.", icon: "wallet" },
      { title: "Compliance reporting", description: "Produce workforce and audit reports for organizational requirements.", icon: "file" },
      { title: "System integration", description: "Connect HRIS with accounting, ERP, CRM and other business systems.", icon: "link" }
    ],
    capabilities: ["Mobile accessibility", "Document management", "Workflow automation", "Employee communication", "Leave management", "Absence management", "Succession planning", "Recruitment", "Training records", "Role-based access"],
    related: ["docudex-workflow", "invoice-processing", "application-development"],
    sourceUrl: "https://devnetlimited.com/hrms/"
  },
  {
    slug: "invoice-processing",
    navTitle: "Invoice Processing",
    category: "Product",
    eyebrow: "Finance Automation",
    title: "Invoice Processing",
    subtitle: "Streamlining finances. Empowering efficiency.",
    description:
      "Automate accounts-payable and receivable workflows from capture and validation through approval, accounting integration and payment readiness.",
    visualLabels: ["Capture", "Validate", "Pay"],
    heroStat: { value: "Real-time", label: "invoice status visibility" },
    benefits: [
      { title: "Faster payments", description: "Accelerate approvals and improve cash flow and vendor relationships.", icon: "bolt" },
      { title: "Real-time visibility", description: "See invoice status and payment schedules for stronger planning.", icon: "eye" },
      { title: "Audit trail", description: "Keep a transparent record of invoice actions and decisions.", icon: "file" },
      { title: "Scalability", description: "Handle growing invoice volumes without matching administrative growth.", icon: "chart" },
      { title: "Data insights", description: "Analyze spend and invoice information to identify optimization opportunities.", icon: "spark" },
      { title: "Digital transformation", description: "Replace paper handling with a connected, sustainable process.", icon: "workflow" }
    ],
    features: [
      { title: "Document capture", description: "Ingest invoice documents and extract structured fields.", icon: "scan" },
      { title: "Validation", description: "Check invoice information and route exceptions for review.", icon: "check" },
      { title: "Approval workflows", description: "Send invoices through maker, checker and approval stages.", icon: "workflow" },
      { title: "Accounting integration", description: "Connect approved information with finance and accounting systems.", icon: "link" }
    ],
    capabilities: ["Invoice capture", "Field extraction", "Validation rules", "Approval routing", "Exception handling", "Audit trail", "Payment visibility", "Spend analytics", "Accounting integration"],
    related: ["capture-software", "docudex-workflow", "banking-solution"],
    sourceUrl: "https://devnetlimited.com/invoice-processing/"
  },
  {
    slug: "online-proctoring",
    navTitle: "Online Proctoring",
    category: "Product",
    eyebrow: "Secure Digital Assessment",
    title: "Online Proctored Exam Solution",
    subtitle: "Secure, seamless and scalable online assessment.",
    description:
      "Enable learners to take exams remotely through live, automated or recorded proctoring designed to strengthen academic integrity and reduce administrative burden.",
    visualLabels: ["Verify", "Monitor", "Review"],
    heroStat: { value: "24/7", label: "exam scheduling readiness" },
    benefits: [
      { title: "ID verification", description: "Verify candidate identity before and during examinations.", icon: "person" },
      { title: "Anti-cheating controls", description: "Use monitoring and proctoring features to deter suspicious activity.", icon: "shield" },
      { title: "Fair online testing", description: "Create a controlled remote environment for learners.", icon: "check" },
      { title: "Behavior insights", description: "Use detailed reporting to understand learner patterns and events.", icon: "chart" },
      { title: "Versatile exam support", description: "Apply proctoring to multiple assessment types and formats.", icon: "file" },
      { title: "Affordable scale", description: "Expand exam capacity without matching physical test-centre growth.", icon: "globe" }
    ],
    features: [
      { title: "Live proctoring", description: "Monitor candidates in real time with trained proctors.", icon: "eye" },
      { title: "Automated proctoring", description: "Use AI-assisted signals to flag events for review.", icon: "spark" },
      { title: "Recorded proctoring", description: "Capture sessions for later verification and audit.", icon: "video" },
      { title: "Exam module", description: "Manage settings, question banks, papers and candidate workflows.", icon: "book" }
    ],
    capabilities: ["Registration portal", "Proctoring module", "Exam evaluation", "Candidate shortlisting", "Question bank", "Exam scheduling", "Session recording", "Event reporting", "Identity checks"],
    related: ["e-kyc-and-cim-solution", "ai-and-machine-learning", "application-development"],
    sourceUrl: "https://devnetlimited.com/online-proctoring/"
  },
  {
    slug: "library-management",
    navTitle: "Library Management",
    category: "Product",
    eyebrow: "e-Bookshelf",
    title: "Library Management",
    subtitle: "Empowering knowledge. Streamlining access.",
    description:
      "Maintain books, members, circulation, renewals, fines, availability, digital resources and historical records through an integrated library automation platform.",
    visualLabels: ["Catalog", "Borrow", "Discover"],
    heroStat: { value: "2", label: "Bangla and English support" },
    benefits: [
      { title: "User-friendly access", description: "Provide a convenient experience for librarians and members.", icon: "person" },
      { title: "Online book access", description: "Let users view, search and request available books online.", icon: "book" },
      { title: "Availability notifications", description: "Notify users when requested titles become available.", icon: "bell" },
      { title: "Efficient management", description: "Organize books, members, circulation and historical records.", icon: "layers" },
      { title: "Dynamic dashboard", description: "Monitor library activity and operational status at a glance.", icon: "chart" },
      { title: "Faster decisions", description: "Use reliable circulation and member data to improve operations.", icon: "bolt" }
    ],
    features: [
      { title: "Barcode catalog", description: "Organize and manage collections with barcode-enabled records.", icon: "barcode" },
      { title: "RFID integration", description: "Support faster circulation and anti-theft operations.", icon: "signal" },
      { title: "DMS integration", description: "Store, retrieve and share digital documents through connected content systems.", icon: "link" },
      { title: "Email and SMS", description: "Engage members with reminders, status messages and availability updates.", icon: "message" }
    ],
    capabilities: ["Bangla and English", "Member cards", "RFID integration", "Anti-theft detection", "Library automation", "Multilevel book search", "Circulation tracking", "E-book viewing", "Article archive", "Historical data management"],
    related: ["docudex-edms", "digital-archiving", "book-map-scanner"],
    sourceUrl: "https://devnetlimited.com/library-management/"
  },
  {
    slug: "e-kyc-and-cim-solution",
    navTitle: "E-KYC Management",
    category: "Product",
    eyebrow: "Digital Identity and Onboarding",
    title: "E-KYC & Customer Information Management",
    subtitle: "Seamless compliance. Trusted customer insight.",
    description:
      "A real-time solution for customer identification, verification and digital onboarding while maintaining organizational regulations and identity-control requirements.",
    visualLabels: ["Identify", "Verify", "Onboard"],
    heroStat: { value: "Real-time", label: "identity verification" },
    benefits: [
      { title: "Compliant solution", description: "Support onboarding processes aligned with relevant standards and controls.", icon: "shield" },
      { title: "Paperless process", description: "Digitize identity capture, review and customer information management.", icon: "file" },
      { title: "Reduced forgery risk", description: "Use digital validation to reduce exposure to altered documents.", icon: "alert" },
      { title: "Authorized consent", description: "Complete identity activities with the individual’s authorization.", icon: "check" },
      { title: "Instant results", description: "Return identity and matching outcomes within real-time workflows.", icon: "bolt" }
    ],
    features: [
      { title: "NID integration", description: "Verify customer identity using connected national-ID services where available.", icon: "card" },
      { title: "Facial recognition", description: "Compare ID photos with live customer images and produce a match result.", icon: "scan" },
      { title: "Fingerprint verification", description: "Support biometric identity verification within approved onboarding flows.", icon: "fingerprint" },
      { title: "Document authentication", description: "Review identity documents for signs of forgery or tampering.", icon: "shield" }
    ],
    capabilities: ["Reports and analytics", "Banking-grade security", "Customer profiling", "Digital records", "SMS and email integration", "System notification", "CBS integration", "AML integration", "Consent tracking"],
    related: ["banking-solution", "online-proctoring", "docudex-edms"],
    sourceUrl: "https://devnetlimited.com/e-kyc-and-cim-solution/"
  },
  {
    slug: "land-management-solution",
    navTitle: "Land Management",
    category: "Product",
    eyebrow: "GIS-enabled Public Records",
    title: "Land Management Solution",
    subtitle: "Navigate landscapes with precision.",
    description:
      "Centralize cadastral records, land parcels, ownership details and property documents while using GIS capabilities to improve planning, compliance, valuation and service delivery.",
    visualLabels: ["Map", "Record", "Decide"],
    heroStat: { value: "213K", label: "mouza maps digitized" },
    benefits: [
      { title: "Permitting and licensing", description: "Coordinate land-related applications and approvals through digital workflows.", icon: "workflow" },
      { title: "Environmental compliance", description: "Maintain information needed for controlled and compliant land use.", icon: "leaf" },
      { title: "Property valuation", description: "Use structured land and ownership data to support more accurate valuation.", icon: "chart" },
      { title: "Sales and leasing", description: "Improve visibility of land assets, availability and transactions.", icon: "map" },
      { title: "GIS integration", description: "Visualize property portfolios and geographic relationships.", icon: "globe" },
      { title: "Dispute reduction", description: "Improve record accuracy and access to reduce information-related disputes.", icon: "shield" }
    ],
    features: [
      { title: "Land records management", description: "Store historical and current property records in a secure, organized system.", icon: "archive" },
      { title: "Land-use planning", description: "Support zoning, suitability and environmental planning decisions.", icon: "map" },
      { title: "Ownership information", description: "Bring parcel and ownership details into a single controlled view.", icon: "person" },
      { title: "Document access", description: "Connect land records with scanned maps and supporting property documents.", icon: "file" }
    ],
    capabilities: ["GIS integration", "Cadastral records", "Land parcels", "Ownership history", "Property documents", "Disaster response", "Agricultural land planning", "Risk mitigation", "Data accuracy", "Resource allocation"],
    related: ["digital-archiving", "book-map-scanner", "application-development"],
    sourceUrl: "https://devnetlimited.com/land-management-solution/"
  },
  {
    slug: "rpa",
    navTitle: "RPA",
    category: "Product",
    eyebrow: "Digital Workforce",
    title: "Robotic Process Automation",
    subtitle: "Unleash efficiency. Elevate performance.",
    description:
      "Use software robots to replicate human interactions across digital systems, automate repetitive rules-based tasks and connect routines that span applications, databases and interfaces.",
    visualLabels: ["Observe", "Execute", "Scale"],
    heroStat: { value: "24/7", label: "bot execution capacity" },
    benefits: [
      { title: "Efficiency boost", description: "Accelerate repetitive work and improve operational throughput.", icon: "bolt" },
      { title: "Accuracy and consistency", description: "Execute rules predictably while reducing manual error.", icon: "check" },
      { title: "Process visibility", description: "Monitor automation activity and outcomes in real time.", icon: "eye" },
      { title: "Customer experience", description: "Enable faster response and more efficient customer interactions.", icon: "users" },
      { title: "Adaptability", description: "Scale automations to changing workloads and business priorities.", icon: "scale" },
      { title: "Empowered innovation", description: "Allow employees to focus on judgment, improvement and strategy.", icon: "spark" }
    ],
    features: [
      { title: "Robotic workforce", description: "Deploy bots for repetitive and rules-based activities.", icon: "bot" },
      { title: "Process automation", description: "Coordinate automated tasks across departments and functions.", icon: "workflow" },
      { title: "User-friendly design", description: "Create, manage and monitor automations through clear interfaces.", icon: "settings" },
      { title: "Scalable execution", description: "Expand or reduce bot capacity as processing demand changes.", icon: "scale" }
    ],
    capabilities: ["Task integration", "Error reduction", "Rules-based logic", "Workflow automation", "Data extraction", "Task scheduling", "Audit trail", "Cost efficiency", "Adaptability", "AI integration"],
    related: ["docudex-workflow", "data-processing", "ai-and-machine-learning"],
    sourceUrl: "https://devnetlimited.com/rpa/"
  },
  {
    slug: "document-scanner",
    navTitle: "Document Scanner",
    category: "Product",
    eyebrow: "High-volume Capture Hardware",
    title: "Document Scanners",
    subtitle: "Reliable scanning for every workload.",
    description:
      "Explore desktop, departmental and production scanners selected for speed, image quality, intelligent protection and dependable document capture in business and service-bureau environments.",
    visualLabels: ["Feed", "Scan", "Deliver"],
    heroStat: { value: "210 ppm", label: "top listed production speed" },
    benefits: [
      { title: "Space savings", description: "Digitize paper records and reduce physical storage requirements.", icon: "archive" },
      { title: "Remote access", description: "Make scanned information available to authorized distributed teams.", icon: "globe" },
      { title: "Cost effectiveness", description: "Reduce paper, printing, storage and manual handling over time.", icon: "chart" },
      { title: "Workflow optimization", description: "Feed scanned content directly into digital business processes.", icon: "workflow" },
      { title: "Long-term archiving", description: "Preserve historical information without physical deterioration.", icon: "clock" }
    ],
    features: [
      { title: "Desktop scanners", description: "Compact scanners for workgroups, desks and mobile capture needs.", icon: "scanner" },
      { title: "Departmental scanners", description: "Higher-throughput devices for shared office operations.", icon: "layers" },
      { title: "Production scanners", description: "Heavy-duty systems for service bureaus and high-volume back offices.", icon: "factory" },
      { title: "Capture integration", description: "Pair hardware with Captura, OCR, indexing and document workflows.", icon: "link" }
    ],
    capabilities: ["Duplex scanning", "A3 support", "Intelligent document protection", "Barcode reading", "High duty cycles", "Multi-feed detection", "Imprinting", "USB capture", "Network capture", "Image enhancement"],
    showcase: [
      { title: "SCANMATE i940", description: "Compact USB-powered capture for mobile and workgroup use." },
      { title: "i1190", description: "Fast desktop scanning with built-in barcode support." },
      { title: "i5250", description: "Production capture designed for high-volume back offices." },
      { title: "i5850S", description: "Floor-standing production scanning with automatic sorting." }
    ],
    related: ["capture-software", "robotic-scanner", "book-map-scanner"],
    sourceUrl: "https://devnetlimited.com/document-scanner/"
  },
  {
    slug: "robotic-scanner",
    navTitle: "Robotic Scanner",
    category: "Product",
    eyebrow: "Automated Heritage Capture",
    title: "Robotic Scanners",
    subtitle: "Automate careful, high-quality book digitization.",
    description:
      "Robotic book-scanning systems combine high-resolution capture, automated page handling and preservation-minded workflows for bound material and large-format collections.",
    visualLabels: ["Turn", "Capture", "Preserve"],
    heroStat: { value: "A0/A1", label: "large-format capability" },
    benefits: [
      { title: "Automated page handling", description: "Reduce repetitive manual page turning for suitable collections.", icon: "bot" },
      { title: "Preservation-minded capture", description: "Digitize valuable bound materials with controlled handling.", icon: "shield" },
      { title: "Consistent image quality", description: "Standardize lighting, framing and capture outcomes.", icon: "scan" },
      { title: "Higher throughput", description: "Increase productivity for large digitization programs.", icon: "bolt" }
    ],
    features: [
      { title: "ROBO SCAN 1", description: "Combines manual A0 book-scanner capabilities with A1 robotic convenience.", icon: "scanner" },
      { title: "Automated capture", description: "Coordinate page turning and image capture in one workflow.", icon: "workflow" },
      { title: "Large-format support", description: "Handle demanding books, maps and archival materials.", icon: "map" },
      { title: "Archive integration", description: "Send images to quality control, OCR, indexing and preservation storage.", icon: "archive" }
    ],
    capabilities: ["Robotic page turning", "High-resolution cameras", "A0/A1 support", "Book cradle", "Lighting control", "Image processing", "Quality review", "OCR integration", "Archival formats"],
    related: ["book-map-scanner", "digital-archiving", "capture-software"],
    sourceUrl: "https://devnetlimited.com/robotic-scanner/"
  },
  {
    slug: "book-map-scanner",
    navTitle: "Book/Map Scanner",
    category: "Product",
    eyebrow: "Bound and Large-format Collections",
    title: "Book & Map Scanners",
    subtitle: "Digitize knowledge without losing its character.",
    description:
      "Purpose-built systems capture books, maps, newspapers and historical records while supporting careful positioning, high image quality and long-term digital access.",
    visualLabels: ["Position", "Capture", "Archive"],
    heroStat: { value: "2× Legal", label: "compact capture support" },
    benefits: [
      { title: "Knowledge preservation", description: "Create durable digital copies of fragile and valuable material.", icon: "book" },
      { title: "Large-format capture", description: "Handle maps, newspapers and oversized documents.", icon: "map" },
      { title: "Gentle book handling", description: "Use specialized cradles and positioning for bound items.", icon: "shield" },
      { title: "Digital access", description: "Make collections easier to search, share and study.", icon: "globe" }
    ],
    features: [
      { title: "Book scanning", description: "Capture bound volumes with controlled positioning and page visibility.", icon: "book" },
      { title: "Map scanning", description: "Digitize detailed large-format land and planning records.", icon: "map" },
      { title: "Auto capture", description: "Use triggers and camera controls to improve operator productivity.", icon: "scan" },
      { title: "Archive workflow", description: "Connect capture with image enhancement, OCR, indexing and storage.", icon: "archive" }
    ],
    capabilities: ["Book cradles", "Large-format capture", "Camera positioning", "Auto capture", "Lighting systems", "Image correction", "OCR", "Metadata", "Preservation formats"],
    showcase: [
      { title: "SCAN MASTER 1", description: "A purpose-built book scanner for careful collection digitization." },
      { title: "Compact camera scanner", description: "Flexible camera positioning with support for automated triggering." }
    ],
    related: ["robotic-scanner", "microfilm-scanners", "digital-archiving"],
    sourceUrl: "https://devnetlimited.com/book-map-scanner/"
  },
  {
    slug: "microfilm-scanners",
    navTitle: "Microfilm Scanners",
    category: "Product",
    eyebrow: "Microform Digitization",
    title: "Microfilm Scanners",
    subtitle: "Bring archival microfilm into the digital era.",
    description:
      "High-resolution microfilm scanning supports archival-quality image capture from multiple microform types for clearer access, printing, indexing and preservation.",
    visualLabels: ["Load", "Enhance", "Export"],
    heroStat: { value: "26 MP", label: "listed ScanPro camera resolution" },
    benefits: [
      { title: "Archival image quality", description: "Capture clear digital images from microfilm sources.", icon: "scan" },
      { title: "Faster retrieval", description: "Replace manual film browsing with digital search and access.", icon: "search" },
      { title: "Preservation", description: "Create managed digital derivatives for long-term use.", icon: "archive" },
      { title: "Flexible output", description: "Print, export and connect scanned content to document systems.", icon: "link" }
    ],
    features: [
      { title: "ScanPro 3000", description: "Ultra-high-definition microfilm scanning with a 26-megapixel camera.", icon: "scanner" },
      { title: "Multiple film formats", description: "Support common roll film, fiche and microform collections.", icon: "film" },
      { title: "Image enhancement", description: "Improve clarity and usability of historical film content.", icon: "spark" },
      { title: "Digital archive output", description: "Export content for indexing, retrieval and preservation workflows.", icon: "archive" }
    ],
    capabilities: ["Roll film", "Microfiche", "High optical resolution", "Image enhancement", "Zoom and crop", "Printing", "Digital export", "OCR integration", "Archive integration"],
    related: ["book-map-scanner", "digital-archiving", "docudex-edms"],
    sourceUrl: "https://devnetlimited.com/microfilm-scanners/"
  }
];

export const servicePages: SitePage[] = [
  {
    slug: "digital-archiving",
    navTitle: "Scanning & Archiving",
    category: "Service",
    eyebrow: "Bangladesh-scale Digitization",
    title: "Document Scanning & Archiving",
    subtitle: "Transform documents and preserve them digitally for years.",
    description:
      "Devnet converts regular documents, forms, manuscripts, books, maps and newspapers into managed digital records using industrial capture, OCR/ICR, indexing, quality control and secure archiving.",
    visualLabels: ["Prepare", "Digitize", "Preserve"],
    heroStat: { value: "30M+", label: "pages digitized per year" },
    benefitsTitle: "Our imaging facilities",
    benefitsIntro: "A controlled digitization workflow designed for quality, security, metadata and long-term access.",
    benefits: [
      { title: "Bulk document scanning", description: "Process high volumes through controlled preparation and capture lines.", icon: "scanner" },
      { title: "OCR & ICR", description: "Turn printed and handwritten content into searchable, structured information.", icon: "scan" },
      { title: "On-site scanning", description: "Bring secure capture operations to the client location when material cannot move.", icon: "building" },
      { title: "Indexing and metadata", description: "Apply categories and descriptive information for reliable retrieval.", icon: "tag" },
      { title: "Quality control", description: "Review image quality, completeness, orientation and indexing accuracy.", icon: "check" },
      { title: "Cloud-based archiving", description: "Make approved digital collections available through managed platforms.", icon: "cloud" },
      { title: "Data backups", description: "Protect digitized assets through controlled copies and recovery processes.", icon: "database" },
      { title: "Security", description: "Apply secure facilities, handling procedures and access controls.", icon: "shield" }
    ],
    featuresTitle: "Collections we digitize",
    features: [
      { title: "Regular documents", description: "Business files, forms and administrative records.", icon: "file" },
      { title: "Manuscripts and books", description: "Bound, rare and historically valuable collections.", icon: "book" },
      { title: "Maps", description: "Large-format land, planning and technical records.", icon: "map" },
      { title: "Newspapers", description: "Fragile and oversized periodical collections.", icon: "news" }
    ],
    capabilities: ["Long-term preservation", "Compliance", "Enhanced access", "Data retrieval", "Enhanced security", "Disaster recovery", "Collaboration and sharing", "Space savings", "Cost savings", "Structured metadata"],
    showcase: [
      { title: "Document scanner", description: "High-throughput capture for business records and forms." },
      { title: "Large-format scanner", description: "Precision capture for maps and oversized records." },
      { title: "Robotic scanner", description: "Automated digitization for suitable bound collections." },
      { title: "Book/map/newspaper scanner", description: "Specialized handling for heritage and large-format material." }
    ],
    related: ["capture-software", "document-scanner", "book-map-scanner"],
    sourceUrl: "https://devnetlimited.com/digital-archiving/"
  },
  {
    slug: "application-development",
    navTitle: "Application Development",
    category: "Service",
    eyebrow: "Custom Digital Platforms",
    title: "Application Development",
    subtitle: "Powerful, scalable e-governance and enterprise applications.",
    description:
      "Devnet creates custom web applications that combine secure data management, clear user experiences, connected APIs and scalable architecture for public institutions and enterprises.",
    visualLabels: ["Discover", "Build", "Evolve"],
    heroStat: { value: "End-to-end", label: "delivery coverage" },
    benefitsTitle: "Built around business needs",
    benefits: [
      { title: "Custom web applications", description: "Build around specific processes, rules, users and operational goals.", icon: "code" },
      { title: "Responsive design", description: "Deliver clear experiences across desktop, tablet and mobile devices.", icon: "devices" },
      { title: "API integration", description: "Connect applications with third-party platforms and enterprise systems.", icon: "link" },
      { title: "Quality assurance", description: "Use disciplined testing to improve reliability, security and usability.", icon: "check" }
    ],
    featuresTitle: "Business outcomes",
    features: [
      { title: "Increased efficiency", description: "Replace fragmented processes with connected digital operations.", icon: "bolt" },
      { title: "Broader reach", description: "Make services available to more users and locations.", icon: "globe" },
      { title: "Customer engagement", description: "Create easier, more consistent digital interactions.", icon: "users" },
      { title: "Data-driven insight", description: "Capture structured information to improve decision-making.", icon: "chart" }
    ],
    capabilities: ["Discovery and requirements", "UX/UI design", "Responsive frontend", "Backend APIs", "Database architecture", "Security", "Testing and QA", "Deployment", "Support and maintenance", "System integration"],
    related: ["mobile-app-development", "ai-and-machine-learning", "land-management-solution"],
    sourceUrl: "https://devnetlimited.com/application-development/"
  },
  {
    slug: "mobile-app-development",
    navTitle: "Mobile App Development",
    category: "Service",
    eyebrow: "Mobile Product Engineering",
    title: "Mobile App Development",
    subtitle: "Innovate on the go.",
    description:
      "Devnet combines product strategy, user-centric design, mobile engineering, integration and quality assurance to create applications for smartphones and tablets.",
    visualLabels: ["Design", "Develop", "Launch"],
    heroStat: { value: "Mobile-first", label: "experience strategy" },
    benefitsTitle: "Our focus",
    benefits: [
      { title: "Responsive experience", description: "Create layouts and interactions suited to multiple device sizes.", icon: "devices" },
      { title: "User-friendly design", description: "Prioritize intuitive navigation and clear task completion.", icon: "person" },
      { title: "Visually appealing UI", description: "Build a coherent interface aligned with the product brand.", icon: "spark" },
      { title: "Testing and QA", description: "Test functionality, performance and usability before release.", icon: "check" },
      { title: "Maintenance and support", description: "Keep applications stable and current after launch.", icon: "settings" },
      { title: "API integration", description: "Connect mobile experiences with business services and platforms.", icon: "link" }
    ],
    featuresTitle: "The process we follow",
    features: [
      { title: "Define specifics", description: "Clarify users, outcomes, functionality and constraints.", icon: "target" },
      { title: "UI & UX design", description: "Prototype user journeys and create the product interface.", icon: "design" },
      { title: "App development", description: "Implement reliable mobile and backend functionality.", icon: "code" },
      { title: "Testing, deployment and support", description: "Validate, release, monitor and improve the product.", icon: "rocket" }
    ],
    capabilities: ["Platform strategy", "UI/UX design", "Mobile engineering", "Offline capabilities", "API integration", "Security", "Push notifications", "Analytics", "App testing", "Release support"],
    related: ["application-development", "ai-and-machine-learning", "data-processing"],
    sourceUrl: "https://devnetlimited.com/mobile-app-development/"
  },
  {
    slug: "data-processing",
    navTitle: "Data Processing",
    category: "Service",
    eyebrow: "Structured Information Services",
    title: "Data Processing",
    subtitle: "Turn raw data into precise, usable information.",
    description:
      "Devnet collects, organizes, validates, cleanses, transforms and analyzes data so organizations can improve decisions, operations, reporting and strategic planning.",
    visualLabels: ["Collect", "Clean", "Inform"],
    heroStat: { value: "Structured", label: "decision-ready output" },
    benefitsTitle: "We meet the business need",
    benefits: [
      { title: "Data entry", description: "Support accurate manual and automated data-entry operations.", icon: "keyboard" },
      { title: "Data cleansing", description: "Validate, standardize and improve the quality of datasets.", icon: "spark" },
      { title: "Data transformation", description: "Convert and format information for target systems and use cases.", icon: "workflow" },
      { title: "Custom data solutions", description: "Design processing pipelines around specific business requirements.", icon: "settings" },
      { title: "Data analysis", description: "Produce reporting and insight from processed information.", icon: "chart" }
    ],
    featuresTitle: "Operational value",
    features: [
      { title: "Informed decisions", description: "Use cleaner, organized information to support better judgment.", icon: "target" },
      { title: "Efficient operations", description: "Reduce manual rework and fragmented data handling.", icon: "bolt" },
      { title: "Improved customer understanding", description: "Create more complete and usable customer data.", icon: "users" },
      { title: "Risk mitigation", description: "Identify errors, gaps and inconsistencies before they become operational issues.", icon: "shield" }
    ],
    capabilities: ["Data entry", "Data validation", "Data cleansing", "Data transformation", "Custom pipelines", "Data analysis", "Reporting", "Quality control", "Secure processing", "System migration"],
    related: ["bpo", "capture-software", "ai-and-machine-learning"],
    sourceUrl: "https://devnetlimited.com/data-processing/"
  },
  {
    slug: "bpo",
    navTitle: "Business Process Outsourcing",
    category: "Service",
    eyebrow: "Managed Business Operations",
    title: "Business Process Outsourcing",
    subtitle: "Transform the process. Transfer the burden.",
    description:
      "Devnet provides managed operational support across data entry, customer service, finance, human resources and content moderation with a focus on accuracy, efficiency and cost control.",
    visualLabels: ["Transition", "Operate", "Improve"],
    heroStat: { value: "Flexible", label: "operating capacity" },
    benefitsTitle: "Our BPO services",
    benefits: [
      { title: "Data entry and processing", description: "Provide data entry, validation, cleansing and structured processing.", icon: "keyboard" },
      { title: "Customer support", description: "Operate customer-service and technical-support activities.", icon: "headset" },
      { title: "Finance and accounting", description: "Support bookkeeping, financial data and payroll operations.", icon: "wallet" },
      { title: "HR and recruitment", description: "Assist with people operations and recruitment process execution.", icon: "users" },
      { title: "Content moderation", description: "Review content using defined quality and policy processes.", icon: "shield" }
    ],
    featuresTitle: "Why outsource with Devnet",
    features: [
      { title: "Focus on core work", description: "Let internal teams concentrate on strategy and differentiated activities.", icon: "target" },
      { title: "Specialized expertise", description: "Access trained teams and process knowledge without building every capability internally.", icon: "spark" },
      { title: "Scalable capacity", description: "Adjust processing volume and staffing as needs evolve.", icon: "scale" },
      { title: "Quality and accuracy", description: "Use defined procedures, validation and operational oversight.", icon: "check" }
    ],
    capabilities: ["Improved efficiency", "Customer service", "Cost savings", "Risk mitigation", "Faster time to market", "Flexible capacity", "Scalability", "Quality control", "Process documentation", "Operational reporting"],
    related: ["data-processing", "banking-solution", "rpa"],
    sourceUrl: "https://devnetlimited.com/bpo/"
  },
  {
    slug: "banking-solution",
    navTitle: "Banking Solution",
    category: "Service",
    eyebrow: "Financial Process Modernization",
    title: "Banking Solutions",
    subtitle: "Modern tools for secure, efficient financial operations.",
    description:
      "Devnet combines document management, workflow automation and integration to support trade finance, lending, account opening, applications and recruitment processes in financial institutions.",
    visualLabels: ["Verify", "Approve", "Comply"],
    heroStat: { value: "10+", label: "banks using DMS and workflow" },
    benefitsTitle: "Banking solutions we provide",
    benefits: [
      { title: "LC process automation", description: "Digitize trade-finance workflows to reduce errors and processing time.", icon: "bank" },
      { title: "Loan and investment documents", description: "Coordinate document capture, validation and workflow for lending operations.", icon: "file" },
      { title: "Account opening", description: "Use electronic forms, identity integration and controlled review stages.", icon: "person" },
      { title: "Application automation", description: "Build efficient digital intake and decision workflows.", icon: "workflow" },
      { title: "Recruitment process", description: "Reduce manual work and improve consistency in financial-sector hiring.", icon: "users" }
    ],
    featuresTitle: "Business value",
    features: [
      { title: "Improved efficiency", description: "Reduce delays and repeated handling in document-heavy operations.", icon: "bolt" },
      { title: "Enhanced service", description: "Give customers faster, clearer and more convenient experiences.", icon: "users" },
      { title: "Enhanced security", description: "Apply access controls, audit trails and controlled document handling.", icon: "shield" },
      { title: "Quality and accuracy", description: "Standardize validation, review and approval activities.", icon: "check" }
    ],
    capabilities: ["LC automation", "Loan documentation", "Account opening", "Application workflows", "Recruitment automation", "DMS", "Maker/checker", "Audit trails", "Identity integration", "Core banking integration"],
    related: ["docudex-workflow", "e-kyc-and-cim-solution", "invoice-processing"],
    sourceUrl: "https://devnetlimited.com/banking-solution/"
  },
  {
    slug: "ai-and-machine-learning",
    navTitle: "AI & Machine Learning",
    category: "Service",
    eyebrow: "Applied Data Intelligence",
    title: "AI & Machine Learning",
    subtitle: "Elevate the future with practical, intelligent systems.",
    description:
      "Devnet designs AI and machine-learning services for predictive analytics, natural-language processing, recommendations, image recognition, automation, data engineering and decision support.",
    visualLabels: ["Learn", "Predict", "Optimize"],
    heroStat: { value: "AI-ready", label: "data and workflow strategy" },
    benefitsTitle: "Drive the future with AI",
    benefits: [
      { title: "Predictive analytics", description: "Use data and machine learning to anticipate trends and outcomes.", icon: "chart" },
      { title: "Natural-language processing", description: "Analyze and understand text-based information and interactions.", icon: "message" },
      { title: "Recommendation systems", description: "Build personalized suggestions from behavior and business data.", icon: "spark" },
      { title: "AI strategy and consulting", description: "Define practical use cases, data readiness and implementation paths.", icon: "target" },
      { title: "AI-enabled automation", description: "Reduce manual effort through intelligent workflow decisions.", icon: "bot" },
      { title: "Custom AI solutions", description: "Create tailored models and systems for industry-specific needs.", icon: "code" }
    ],
    featuresTitle: "Engineering capability",
    features: [
      { title: "Deep learning", description: "Address complex image, speech and pattern-recognition tasks.", icon: "brain" },
      { title: "Data analysis and insight", description: "Extract actionable information for data-driven decisions.", icon: "chart" },
      { title: "Data engineering", description: "Build pipelines and integrations that support AI initiatives.", icon: "database" },
      { title: "Responsible implementation", description: "Plan monitoring, human review, security and operational controls.", icon: "shield" }
    ],
    capabilities: ["Predictive analytics", "NLP", "Recommendation engines", "Image recognition", "Sentiment analysis", "Deep learning", "Data engineering", "Model integration", "AI automation", "Decision support"],
    related: ["data-processing", "rpa", "application-development"],
    sourceUrl: "https://devnetlimited.com/ai-and-machine-learning/"
  }
];

export const allContentPages = [...productPages, ...servicePages];

/* DocuDEX platform grouping — the core lifecycle modules and the extended
   application family built on the same platform. Order is presentation order. */
export const docudexCoreSlugs = [
  "capture-software",
  "docudex-edms",
  "docudex-workflow",
  "record-management",
  "invoice-processing"
];

export const docudexExtendedSlugs = [
  "agile-audit",
  "hrms",
  "e-kyc-and-cim-solution",
  "land-management-solution",
  "library-management",
  "online-proctoring",
  "rpa"
];

export const docudexSuitePages = docudexCoreSlugs
  .concat(docudexExtendedSlugs)
  .map((slug) => productPages.find((p) => p.slug === slug))
  .filter(Boolean) as SitePage[];

export const productNavGroups = [
  {
    title: "Content & workflow",
    items: productPages.slice(0, 4)
  },
  {
    title: "Business solutions",
    items: productPages.slice(4, 12)
  },
  {
    title: "Scanning hardware",
    items: productPages.slice(12)
  }
];

export const serviceNav = servicePages;

export function getContentPage(slug: string) {
  return allContentPages.find((page) => page.slug === slug);
}

export const partners = ["ABBYY", "KODAK ALARIS", "AVISION", "ATIZ", "PIQL", "GONSIN", "I2S", "SMA"];

export const testimonials = [
  {
    quote: "Devnet's document imaging, archiving and customized Digital Library Management System helped modernize Bangladesh National Library and preserve books, newspapers, magazines and maps.",
    name: "Wadudul Bari Chowdhury",
    role: "Directorate of Archives & Libraries"
  },
  {
    quote: "Scanning and archiving mouza maps helped the Department of Land Records & Surveys deliver printed copies to citizens with strong accuracy.",
    name: "Kongkham Nilmani Singha",
    role: "Project Director & Deputy Director (Admin)"
  },
  {
    quote: "Devnet's tailored data capture and imaging approach delivered meaningful value for data entry, processing and optimization.",
    name: "Prof. Dr. Abul Kalam Azad",
    role: "Directorate General of Health Services"
  }
];

export const contactDetails = {
  address: "Level-9 (East), BDBL Bhaban, 12 Kawran Bazar, Dhaka-1215, Bangladesh",
  phone: "+8802 55013964",
  phoneAlt: "+8802 55013965",
  cell: "+88 01713-044055",
  fax: "+8802 55013958",
  email: "info@devnetlimited.com"
};

export const socialLinks = [
  { name: "Facebook", icon: "facebook", href: "https://www.facebook.com/WeAreDevnet" },
  { name: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/company/devnet-limited/" },
  { name: "WhatsApp", icon: "whatsapp", href: "https://web.whatsapp.com/" }
];

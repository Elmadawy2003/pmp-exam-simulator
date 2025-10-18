import { Question } from '../types/question';

export const sampleQuestions: Question[] = [
  {
    id: 'Q1',
    question: 'In making investment decisions, the senior management in your company prefers to use a rate that equates the present value of cash inflows with the present value of cash outflows. This rate is also called',
    options: [
      'Discount Ra te',
      'Benefit Cost Ratio',
      'Internal Rate of Return',
      'Net Present Value',
    ],
    correctAnswer: 2,
    explanation: 'Internal Rate of Return (IRR)  Discount Rate on an investment which makes Present value of c ash inflows = Present value of cash outflows  Project Selection Criterion: Select a project with higher IRR. Example: There are 2 projects. Project A has an IRR of 15% and will be completed in 5 years. Project B has an IRR of 10% and will be completed in 1 year. Which project will you select? Answer: Project A will be selected. The fact that project B has a smaller duration than project A does not matter because time is already taken into account in IRR calculations.',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q2',
    question: 'You are completing a NASA project for the launch of a weather forecasting satellite. The satellite is being tested for a specific quality metric: Performance under Strong Winds . For which processes are quality metrics used?',
    options: [
      'Perform Quality Assurance and Plan Quality',
      'Plan Quality and Control Quality',
      'Control Quality, Plan Quality, and Perform Quality Assurance',
      'Perform Quality Assurance and Control Quality',
    ],
    correctAnswer: 3,
    explanation: 'Quality metrics are used in the Perform Quality Assurance and Control Quality processes.',
    category: 'Project Quality Management',
    difficulty: 'easy'
  },
  {
    id: 'Q3',
    question: 'As a project manager, you are in the process of creating a list of all the project team members, their roles, and communication information. This information should reside in',
    options: [
      'Project plan',
      'Project team directory',
      'Performance reports',
      'Responsibility assignment matrix',
    ],
    correctAnswer: 1,
    explanation: 'Project team directory is a documented list of project team members, their proje ct roles, and communication information.',
    category: 'Project Communications Management',
    difficulty: 'easy'
  },
  {
    id: 'Q4',
    question: 'You are a procurements manager and are responsible for managing complex procurement contracts. In this context, which of the follow ing is the most effective means of handling complex communications?',
    options: [
      'Formal oral',
      'Formal written',
      'Informal written',
      'Informal oral',
    ],
    correctAnswer: 1,
    explanation: 'The best way to manage complex communications, such as in contracts, is through formal written communication.',
    category: 'Project Integration Management',
    difficulty: 'medium'
  },
  {
    id: 'Q5',
    question: 'In managing risks for your project, you examine the extent to which the uncertainty of each proje ct element affects the objective being examined when all other uncertain elements are held at baseline values. This helps to',
    options: [
      'Get a qualitative analysis of the risk.',
      'Determine which risks may have impact on the project.',
      'Translate the uncertainties at a detailed level into potential impact on objectives expressed at the level of the total project.',
      'Determine the implication of choosing one alternative over the other.',
    ],
    correctAnswer: 1,
    explanation: 'Sensitivity analysis helps to determine which risks have the most potential impact on the project. It helps to understand how the variations in project`s objectives correlate with variations in different uncertainties. Conversely, it e xamines the extent to which the uncertainty of each project element affects the objective being studied when all other uncertain elements are held at their baseline values.',
    category: 'Project Risk Management',
    difficulty: 'hard'
  },
  {
    id: 'Q6',
    question: 'You are in the process of selecting an appropriate type of contract for your project. In this context, which of the following statements related to fixed price, cost reimbursable, and time and material contracts is NOT correct?',
    options: [
      'In a fixed -price contract, the product is well defined.',
      'In a cost reimbursable contract, the risk of the seller is low.',
      'In a time and material contract, the risk of the buyer is low.',
      'In a time and material contract, the typ e of payment is based on unit rates for work done. The unit rate for work done is fixed, but the total cost increases with time.',
    ],
    correctAnswer: 2,
    explanation: 'Contract Type Selection Fixed Price Cost Reimbursable Time and Material Definition of product Well -defined Not well -defined Not well -defined Risk of buyer Low High High Risk of seller High Low Low Type of payment Fixed total price Payment for actual cost + fee for seller profit Unit rate of payment fixed, but the cost incr eases with time',
    category: 'Project Cost Management',
    difficulty: 'medium'
  },
  {
    id: 'Q7',
    question: 'What are common updates made throughout the Project Stakeholder Management processes?',
    options: [
      'Project Documents, Project Management Plan, Enterprise Environmental F actors',
      'Project Documents, Organizational Process Assets, Project Management Plan',
      'Organizational Process Assets, Issue Log, Stakeholder Register',
      'Organizational Process Assets, Stakeholder Management Plan, Issue L og',
    ],
    correctAnswer: 1,
    explanation: 'Project documents such as the Stakeholder Register, Project Schedule, Issue Log, and Change Log may be updated throughout the Project Stakeholder Management processes. Various organizational process assets such as project status reports, lessons learned documentation, and project records (e.g., correspondence, memos, meeting minutes) may also be updated. Finally, various components of the Project Management Plan, such as the Stakeholder Management Pla n, Communications Management Plan, Human Resource Management Plan and potentially other subsidiary plans, may need to be updated due to stakeholder management activities. Option 1: Enterprise Environmental Factors (e.g., organizational culture or structu re, government or industry standards) are not typically updated throughout the Project Stakeholder Management processes, but they may be used; so you will see Enterprise Environmental Factors as an input in the Identify Stakeholders and Plan Stakeholder Ma nagement processes, but not and output. Options 3 and 4: Although these are all correct, option 2 is more inclusive. You should choose the most inclusive response when there are multiple correct options.',
    category: 'Project Schedule Management',
    difficulty: 'medium'
  },
  {
    id: 'Q9',
    question: 'You are a project manager in XYZ Company, which has a projectized organizational structure. In this context, which of the following statements is incorrect?',
    options: [
      'Team members are often co -located.',
      'There is a "home" for project team members after a project is completed.',
      'You have a great deal of authority and independence.',
      'Organizational units (or departments) either report directly to you or provide support services to the various projects.',
    ],
    correctAnswer: 1,
    explanation: 'One disadvantage of a projectized organization is that there is "no home" for the project team members once the project is completed. All the re maining answer options mentioned are features of a projectized organization.',
    category: 'Project Communications Management',
    difficulty: 'easy'
  },
  {
    id: 'Q10',
    question: 'You are in the Direct and Manage Project Work process. Which of the following is NOT a result?',
    options: [
      'Deliverables',
      'Project management plan updates',
      'Product management plan',
      'Change requests',
    ],
    correctAnswer: 2,
    explanation: 'Please refer to PMBOK® Guide - Fifth Edition, page 79 (figure 4 -6) Refer ence: PMBOK® Guide - Fifth Edition, page 79 PMstudy.com comments: PMBOK® Guide does not define product management plan',
    category: 'Project Integration Management',
    difficulty: 'easy'
  },
  {
    id: 'Q11',
    question: 'In projects, expert judgment will often be used throughout the Project Integration processes. Which of t he following does not provide expert judgment?',
    options: [
      'Professional and technical associations',
      'Competitors',
      'Consultants',
      'Other units within the organization',
    ],
    correctAnswer: 1,
    explanation: 'Expert judgment is available from many sources, including but not limited to: - Other units within the organization - Consultants - Stakeholders, including customers or sponsors - Professional and technical associations - Industry groups - Subject matter experts',
    category: 'Project Integration Management',
    difficulty: 'easy'
  },
  {
    id: 'Q12',
    question: 'An activity has an optimistic estimate of 10 days, pessimistic estimate of 16 days, and most likely estimate of 13 days. What is the PERT estimate for the task?',
    options: [
      '13 days',
      '10 days',
      '16 days',
      'Cannot be determined with available information',
    ],
    correctAnswer: 0,
    explanation: 'In a normal distribution, the PERT duration (also called mean) = {Pessimistic + (4 x Most Likely) + Optimistic}/6 = {16 + (4 x 13) + 10}/6 = 13',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q13',
    question: 'Which of the following proj ects described below will you select?',
    options: [
      'Project A with opportunity cost of $100,000 and investment of $1,000,000.',
      'Project B with opportunity cost of $200,000 and investment of $500,000.',
      'Project C with opportunity cost of $300,000 and investment of $3,500,000.',
      'Cannot be determined from the above options.',
    ],
    correctAnswer: 3,
    explanation: 'Opportunity cost and investment are not project selection criteria. So, we cannot use these to make a decision.',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q14',
    question: 'In your project, you are preparing a process improvement plan for the manufacture of a new drug. You include process configuration, as part of the process improvement plan. The use of process configuration advances this objective through',
    options: [
      'Description of the process and start and end of processes',
      'Graphic depiction of processes, with interfaces identified, used to facilitate analysis',
      'Process metric to maintain control over status of process',
      'Improvement of process activities',
    ],
    correctAnswer: 1,
    explanation: 'Process configuration is a graphic depiction of processes, with identified interfaces, used to facilitate analysis.',
    category: 'Project Communications Management',
    difficulty: 'medium'
  },
  {
    id: 'Q15',
    question: 'In your previous project, the project manager gave a lot of autonomy to the team members, which led to anarchy. The management style followed by the project manager was',
    options: [
      'Directing',
      'Laissez faire',
      'Delegating',
      'Democratic',
    ],
    correctAnswer: 1,
    explanation: 'The project manager usually follows different leadership styles as listed below: • Autocratic: Makes decisions himself/herself; allows team members little involvement and discussion before a decision is made. • Directing: Instruct people what tasks will be performed and when and how they should be performed. • Laissez Faire: Does not interfere; team is left unsupervised which may lead to anarchy. • Democratic: Allows team to discuss issues and reach decisions, although still guides and advises. • Delegating: Delegates to team members, particularly if competent to handle tas ks. • Coaching: Issues instructions and then supports and monitors. • Discussing: Two-way communication and discussion with team members. • Facilitating: Coordinates inputs from several sources before making a decision. • Supportive: Provides positive assistance and encouragement; maintains and presents a positive outlook during times of uncertainty; listens and encourages. • Participatory: Involve others; same as Democratic style. • Task -Oriented: Enforces task completion by deadlines. • Team -Based : Emphasizes teamwork and working well together. • Assertive: Confronts issues and displays confidence; establishes authority with respect.',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q16',
    question: 'In accordance with the communications management plan , you have been providing the Sponsor with status updates on a daily basis but now the Chief Financial Officer has been coming to your desk every week to request a status update on the project. What should the project manager do?',
    options: [
      'Update the communications management plan',
      'Re-examine the stakeholder registry',
      'Ask the Chief Financial Officer to talk to the Sponsor to get status updates',
      'Continue providing the Sponsor with the status updates and ignore the Chief Financial Officer',
    ],
    correctAnswer: 0,
    explanation: 'The best course of action would be to update the communications management plan to provide updates to the Sponsor and the Chief Financial Officer.',
    category: 'Project Stakeholder Management',
    difficulty: 'hard'
  },
  {
    id: 'Q17',
    question: 'Plan Risk Responses is the process of developing options and actions to enhance opportunities and to reduce threats to project objectives. The output of Plan Risk Responses process may be',
    options: [
      'Expert judgment',
      'Project manageme nt plan updates',
      'Risk management plan',
      'Risk register',
    ],
    correctAnswer: 1,
    explanation: 'Project documents updates and project management plan updates are outputs of Plan Risk Responses process.',
    category: 'Project Risk Management',
    difficulty: 'hard'
  },
  {
    id: 'Q18',
    question: 'In your company, you are in the process of deciding whether to buy a product or to make it in -house. Which of the fo llowing statements about make -or-buy analysis are correct? A. Make -or-buy analysis is part of the Conduct Procurements process that can be used to determine whether a particular product can be produced cost effectively by the performing organization. B. A make -or-buy analysis should consider all related costs. C. Budget constraints may influence make -or-buy decisions. D. Buy -side of the analysis includes both the actual out -of-pocket costs to purchase the product, as well as the indirect costs of support ing the purchasing process.',
    options: [
      'B, C and D',
      'A, C and D',
      'B, C and A',
      'A, B and D',
    ],
    correctAnswer: 0,
    explanation: 'Make -or-buy analysis is part of the Plan Procurement Management proces s. It is a general management technique used to determine whether particular work can best be accomplished by the project team or outsourced.',
    category: 'Project Cost Management',
    difficulty: 'medium'
  },
  {
    id: 'Q19',
    question: 'You have just started working on a project to construct a new toll highway that has been recently approved by the government. You are aware that some local residents are opposed to the construction of the highway and a group of them have been lobbying against it. Some seem to be concer ned with the noise from the traffic on the highway, others with the potential that they may need to relocate due to the highway’s planned location. Which of the following would be considered valid stakeholders that should be identified and managed in your project?',
    options: [
      'Residents of the city',
      'Government employees',
      'Lobbying group',
      'All of the above are stakeholders',
    ],
    correctAnswer: 3,
    explanation: 'Stakeholders include all individuals and groups who are involved in, could impact, or be impacted by the project. All of these are valid stakeholders. Residents who live in (and near) the city will be impacted by the new highway. Government employees have already been involved in decision -making and would likely be providing further input and approvals needed throughout the project. The group of local residents lobbying against the highway should also be identified and their expectations considered. Even though they are negatively impacted by the project, they should still be identified as stakeholders and managed throughout the project.',
    category: 'Project Integration Management',
    difficulty: 'hard'
  },
  {
    id: 'Q20',
    question: 'You are constructing a railway track, which will pass through a less populated area. All necessar y government and regulatory approvals have been obtained for the project. You are aware that due to the motion of the train, there is a very low probability of houses in the vicinity developing cracks. In this context, you should',
    options: [
      'Stop the p roject',
      'Do nothing, since the probability of adverse consequences is minimal',
      'Inform the local people about the possibility of damage to their houses and preventive measures',
      'Teach people how to rebuild their house s with concrete',
    ],
    correctAnswer: 2,
    explanation: 'According to PMI Code of Ethics and Professional Conduct, a certificant should assume: a. Responsibility to provide accurate and truthful communications. b. Responsibility to comply with laws, regulations, and ethical standards governing professional practice in the state/province and/or country while providing project management services. Option 3: This is the correct answer. Although the probability of damage to the houses is low, it is ethical to inform the local people and provide them all necessary assistance. Option 1: Stopping of the project is an extreme reaction, because all approvals have already been obtained. Option 2: This is unethical and violates the PMI Code of Ethi cs and Professional Conduct. Option 4: Teaching them to rebuild houses with concrete is beyond the scope of the project.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q21',
    question: 'You are working as a coordinator in an organizatio n where decisions are primarily made by the senior management. The structure of the organization you are working in is',
    options: [
      'Weak Matrix',
      'Balanced Matrix',
      'Functional',
      'Strong Matrix Correct Cho ice : 1',
    ],
    correctAnswer: 0,
    explanation: 'Corrective action is an intentional activity that realigns the performance of the p roject work with the project management plan.',
    category: 'Project Integration Management',
    difficulty: 'medium'
  },
  {
    id: 'Q23',
    question: 'You are a project manager for a $50 million project that is highly complex and involves more than 100 people. To successfully e xecute the project, you decide to break it down into smaller manageable units. Which of the following processes will you use?',
    options: [
      'Control Scope',
      'Collect Requirements',
      'Define Scope',
      'Create WBS',
    ],
    correctAnswer: 3,
    explanation: 'Create WBS is the process of subdividing project deliverables and project work into smaller, more manageable components.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q24',
    question: 'Which o f the following statements about the creation of duration estimates is incorrect?',
    options: [
      'Mathematical analyses like CPM, GERT, and PERT indicate the dates on which the activity can be scheduled, given resource limits and other constraints.',
      'Duration compression techniques, including fast tracking and crashing can help in decreasing the project schedule.',
      'WBS classification allows for useful activity ordering and sorting.',
      'The duration of the project is the s um of the duration of all the tasks in the project.',
    ],
    correctAnswer: 3,
    explanation: 'The duration of the project should be calculated after drawing a network diagram and determining the critical path. The duration of the project is the length of the critical path and not the sum of the duration of all the tasks in the project.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q25',
    question: 'You have been managing a project to build a new Baseball complex and are three months into the construction. You notice some variances and would like to forecast a new EAC. You hope to get approval to adjust the Cost Performance Baseline by submitting the new EAC and justification through the Integrated Change Control process. Calculate the To -comp lete performance index of your project, based on this new EAC, when the actual cost of your project is $200,000, cost variance of your project is $25,000 and the budget at completion of your project is $350,000.',
    options: [
      '1.125',
      '-1.4',
      '1',
      '-1',
    ],
    correctAnswer: 0,
    explanation: 'CV = EV - AC EV = CV + AC = $25,000 + $200,000 = $225,000 CPI = EV / AC = $225,000 / $200,000 = 1.125 EAC = BAC / CPI = $350,000 / 1.125 = $311,111.11 TCPI = (BAC - EV) / (EAC - AC) = ($350,000 - $225,000) / ($311,111.11 - $200,000) = $125,000 / $111,111 = 1.125',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q26',
    question: 'As a project manager, you want to ensure that appropriate quality standards and operational definitions are used for your product s. In this context, which of the following tools or techniques would you use to achieve this objective? A. Quality audit B. Process analysis C. Quality control measurements D. All quality planning tools and techniques',
    options: [
      'Only A',
      'A and B',
      'A, B and D',
      'All of the above',
    ],
    correctAnswer: 2,
    explanation: 'Quality control measurements are an input (not tool and technique) for Perform Quality Assurance. All the remaining are valid tools f or the Perform Quality Assurance process. The Perform Quality Assurance process uses the tools and techniques of the Plan Quality Management and the Control Quality processes.',
    category: 'Project Quality Management',
    difficulty: 'hard'
  },
  {
    id: 'Q27',
    question: 'You have a portfolio architect in your project, who has been with the company for 30 years. She commands a lot of respect and recognition from others and is very self -confident. From a Maslow`s hierarchy of needs perspective, sh e has reached the phase of',
    options: [
      'Self-actualization',
      'Social',
      'Physiological',
      'Self-esteem',
    ],
    correctAnswer: 3,
    explanation: 'Please refer to the below diagram:',
    category: 'Project Resource Management',
    difficulty: 'hard'
  },
  {
    id: 'Q28',
    question: 'Work performance reports are the physical or electronic representation of work performance information compiled in project documents inte nded to generate decisions or raise issues, actions, or awareness. Which of the following is NOT a common format for work performance reports?',
    options: [
      'S-curves',
      'Control charts',
      'Tables',
      'Histograms',
    ],
    correctAnswer: 1,
    explanation: 'Common formats for work performance reports include bar charts, S -curves, histograms, and tables. Control charts are a tool used in the Control Quality process.',
    category: 'Project Quality Management',
    difficulty: 'medium'
  },
  {
    id: 'Q30',
    question: 'Which of the following tools are used in the Control Procurements process? A. Payment systems B. Performance reporting C. Inspections and audits D. Procurement audits',
    options: [
      'B, C, and D',
      'Only B',
      'Only C',
      'A, B, and C',
    ],
    correctAnswer: 3,
    explanation: '`Procurement audits` is not a tool used in the Control Procurements process. It is a tool for the Close Procurements process. All the other options are tools and techniques used in the Contr ol Procurements process.',
    category: 'Project Integration Management',
    difficulty: 'easy'
  },
  {
    id: 'Q31',
    question: 'Which one of the following is not an input to the Manage Stakeholder Engagement process?',
    options: [
      'Project Management Plan',
      'Change Log',
      'Communications Management Plan',
      'Organizational Process Assets',
    ],
    correctAnswer: 0,
    explanation: 'In the Manage Stakeholder Engagement process, the Project Management Plan is not listed as an input, but instead two of its subsidiary plans – the Stakeholder Management Plan and the Communications Management Plan – are listed. The Stakeholder Management Plan provides information on how to manage and keep stakeholders involved in the project. T he Communications Management Plan includes information on managing stakeholder expectations in terms of their informational needs. These are the main plans needed to Manage Stakeholder Engagement.',
    category: 'Project Stakeholder Management',
    difficulty: 'easy'
  },
  {
    id: 'Q32',
    question: 'You are doing a project under cost -reimbursable contract where the target price was $1,200,000. Your project is nearing comple tion and CPI is currently 1.3. You are concerned that you will be losing money by billing for less. In this context, you should',
    options: [
      'Tell your buyer about the CPI as it stands today and explain the reasons for the deviation from the plan.',
      'Invoice for $1,500,000 because there are chances for costs being higher in a subsequent project.',
      'Tell the bad news to the buyer and suggest charging more from the customer.',
      'Add some extra features to cause "customer delight".',
    ],
    correctAnswer: 0,
    explanation: 'As per PMI Code of Ethics and Professional Conduct, you should assume: a. Responsibility to maintain and satisfy the scope and objectives of professional services, unless otherwise directed by the customer Option 1: This is the correct answer, because it is ethical to inform the buyer about the CPI as it stands. Option 2: This is unethical because you are over -invoicing for the project. Option 3: This does not reflect the correct position. S ince CPI is 1.3, you have extra money, and there is no need to ask the buyer for extra funding. Choice 4: This is also called "gold plating." We should never deliver more than what is undertaken and as approved in the project scope.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q33',
    question: 'The dictionary meaning of authority is "power to influence or command thought, opinion, or behavior.” Your authority as a project manager is greatly dependent on',
    options: [
      'Support from functional managers',
      'Support from senior management',
      'Your influencing and leadership skills',
      'Organizational structure',
    ],
    correctAnswer: 3,
    explanation: 'Please refer to PMBOK® Guide - Fifth Edition, page 22 (table 2 -1)',
    category: 'Project Integration Management',
    difficulty: 'easy'
  },
  {
    id: 'Q34',
    question: 'The customer communicates a request for a change in your project plan. What should be your first step tow ards addressing the change request?',
    options: [
      'Talk with team members to understand implications of the change.',
      'Communicate the change to the management to get their inputs.',
      'Open up a change control.',
      'Implem ent the change and communicate to the customer.',
    ],
    correctAnswer: 0,
    explanation: 'Any time the customer requests for a change, you should: 1. Understand what kind of change is requested and talk with team members to assess the implicat ion of the change. 2. Open up a change control if there is a formal change control mechanism. 3. Communicate the change to the management, and inform the customer about the impact of the change (e.g. increase in sizing, schedule, etc.). 4. Implement the ch ange, if it is accepted.',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q35',
    question: 'Decomposition is a valuable tool for Create WBS process. However, decomposition may not be possible for a deliverable or subcomponent if',
    options: [
      'The deliver able or subcomponent is very complicated',
      'The deliverable or subcomponent is already being produced',
      'The deliverable or subcomponent will be accomplished far into the future',
      'The deliverable is a service',
    ],
    correctAnswer: 2,
    explanation: 'Decomposition may not be possible for a deliverable or subcomponent that will be accomplished far into the future.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q36',
    question: 'You are in th e process of developing the project schedule to determine start and finish dates for project activities. Which of the following tools would NOT be used for this purpose?',
    options: [
      'Critical path method',
      'Schedule compression',
      'Scheduling tool',
      'Schedule baseline',
    ],
    correctAnswer: 3,
    explanation: 'Develop Schedule is the process of analyzing activity sequences, durations, resource requirements and schedule constrains to create the project schedule . Schedule baseline is an output for this process. The tools and techniques specified in the other options are used in the Develop Schedule process.',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q37',
    question: 'Given the f ollowing information, determine the EV of your project. AC = $120,000 PV = $125,000 CV = -$10,000',
    options: [
      '$130,000',
      '$110,000',
      '$90,000',
      '$120,000',
    ],
    correctAnswer: 1,
    explanation: 'The f ormula to calculate CV is EV - AC, so when given both CV and AC, you can use this formula as a basis for solving for EV. CV = EV - AC EV = CV + AC EV = -$10,000 + $120,000 EV = $110,000',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q38',
    question: 'Your company manufactures bearings for the automobile industry. You have historical information on the identified errors and defects, and you would like to use this information to determine future performance. An appropriate tool which you can use is',
    options: [
      'Scatter diagram',
      'Statistical sampling',
      'Control chart',
      'Trend analysis',
    ],
    correctAnswer: 3,
    explanation: 'Trend Analysis. An analytical technique that uses mathematical models to foreca st future outcomes based on historical results.',
    category: 'Project Quality Management',
    difficulty: 'medium'
  },
  {
    id: 'Q39',
    question: 'You are the project manager of a complicated construction project, which involves building highways in the state of North Carolina. You have several groups working with you in the project. To plan resources for this project and determine connection between activities you should preferably use',
    options: [
      'Staffing pool description',
      'Staffing management plan',
      'Responsibility assignment matrix (RAM)',
      'Organization matrix',
    ],
    correctAnswer: 2,
    explanation: 'RAM is used to illustrate the connections between activities or work packages and project team members. On larger projects, RAMs can be developed at various levels. For example, a high -level RAM can define what a project team group or unit is responsible for within each component of the WBS, while lower level RAMs are used within the group to designate roles, responsibil ities, and levels of authority for specific activities.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q40',
    question: 'The processes used in Project Communications Management are',
    options: [
      'Plan Communications Management, Manage Com munications, and Control Communications.',
      'Plan Communications Management, Control Communications, and Integrated Change Control.',
      'Plan Communications Management, Administrative Closure, Control Communications, and Manage Communi cations.',
      'Control Communications, Manage Communications, and Administrative Closure.',
    ],
    correctAnswer: 0,
    explanation: 'Plan Communications Management, Manage Communications, and Control Communications are the processes use d in Project Communications Management.',
    category: 'Project Integration Management',
    difficulty: 'easy'
  },
  {
    id: 'Q41',
    question: 'In your project, you have just conducted a risk data quality assessment to evaluate the degree to which the data about risks is useful for risk management. What is your next step?',
    options: [
      'Perform a str uctured review of project plans and assumptions, both at the total project and detailed scope levels.',
      'Develop checklists to identify risks based on historical information and knowledge that has been accumulated from previous similar projects .',
      'Conduct planning meetings to develop the risk management plan.',
      'Conduct interviews to quantify the probability and impact of risks on project activities.',
    ],
    correctAnswer: 3,
    explanation: 'Risk data quality assessment is a tool for Perform Qualitative Risk Analysis. Option 4: This is the correct answer. It refers to "Interviewing" which is a tool and technique for Perform Quantitative Risk Analysis. Perform Quantitative Risk Analysis is conducted after Perf orm Qualitative Risk Analysis. Option 1: This refers to Documentation Reviews which is a tool for Identify Risks. Identify Risks is conducted before Perform Qualitative Risk Analysis. Option 2: This refers to Checklist Analysis which is a tool for Identify Risks. Identify Risks is conducted before Perform Qualitative Risk Analysis. Option 3: This refers to "Meetings" which is a tool for Plan Risk Management process. Plan Risk Management process is conducted before Perform Qualitative Risk Analysis process.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q42',
    question: 'You have just signed a contract with a seller. Due to funding issues, your management decides to terminate the contract. For this purpose, you will',
    options: [
      'Go back to procurement pl anning to determine what to procure and when.',
      'Choose from other potential sellers.',
      'Follow procedures as listed in contract closure.',
      'Initiate procedures listed in contract change control system to define the proc ess by which the contract may be identified.',
    ],
    correctAnswer: 2,
    explanation: 'Early termination of a contract is a special case of procurement closure that can result from a mutual agreement of both parties, from the default of one par ty, or for convenience of the buyer if provided for in the contract.',
    category: 'Project Procurement Management',
    difficulty: 'hard'
  },
  {
    id: 'Q43',
    question: 'Which of the following processes is Information Management Systems a tool for?',
    options: [
      'Plan Stak eholder Management',
      'Manage Stakeholder Engagement',
      'Identify Stakeholders',
      'Control Stakeholder Engagement',
    ],
    correctAnswer: 3,
    explanation: 'Information Management Systems are used to collect, sto re, manage, and distribute information in various methods and formats (e.g., hard copy, electronic, tables, spreadsheets, presentations, graphical). Standard tools are used by the project manager to capture, store, and distribute information to stakeholder s about project cost, schedule, and other performance data. The project manager consolidates information from several systems and distributes reports to project stakeholders.',
    category: 'Project Schedule Management',
    difficulty: 'medium'
  },
  {
    id: 'Q44',
    question: 'The se ller`s project is undertaken on contract and you are an employee of the seller. Since you had worked earlier with ABC Bank, the buyer, you happen to be aware of the evaluation criteria used in ABC Bank to select sellers. You understand that this could be a potential conflict of interest situation. How do you propose to act?',
    options: [
      'Do nothing and continue to work as before',
      'Take appropriate person in ABC Bank into confidence and discuss this issue with her',
      'Disclose the ev aluation criteria to your (seller) organization and help their business growth',
      'Remove yourself from the project',
    ],
    correctAnswer: 1,
    explanation: 'Option 2: This is the correct answer. Since the evaluation criteria are pro prietary information of ABC Bank, it is important for you to discuss the matter directly with the appropriate person in the ABC Bank. Option 1: This introduces conflict of interest as to whether to act or not in favor of your current employer. Option 3 : This is unethical, because proprietary information of the buyer should not be disclosed. Option 4: This is an extreme step that could be taken only if required after talking to the buyer.',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q45',
    question: 'Your director has appointed you as a portfolio manager in the company. Your responsibility as a portfolio manager is to',
    options: [
      'Select and support projects or program investments',
      'Manage groups of projects in a coordinated way',
      'Create a unique product, service, or result',
      'Ensure that customer requirements are satisfied through progressive elaboration of projects',
    ],
    correctAnswer: 0,
    explanation: 'A portfolio refers to projects, programs , subportfolios, and operations managed as a group to achieve strategic objectives.',
    category: 'Project Integration Management',
    difficulty: 'hard'
  },
  {
    id: 'Q46',
    question: 'You are the project manager for a projec t, which is being managed under a contract. You receive a change request from the buyer involving a government regulation. What should you do FIRST?',
    options: [
      'Talk with team members to understand implications of the change.',
      'Communicate the change to the management to get their inputs.',
      'Open up a change control.',
      'Implement the change and communicate to the customer.',
    ],
    correctAnswer: 2,
    explanation: 'Since the change request pertains to a go vernment regulation and the project is being managed as part of a contract, it is mandatory to implement the change. The first step towards that is to activate the change control mechanism.',
    category: 'Project Procurement Management',
    difficulty: 'medium'
  },
  {
    id: 'Q47',
    question: 'As part of decomposing, you break down the project work that needs to be accomplished in the near term at a low level of WBS. However, the work planned in the future is broken down at a relatively high level of WBS. This technique is called',
    options: [
      'Procrastination',
      'Delaying tactics',
      'Futuristic planning',
      'Rolling wave planning',
    ],
    correctAnswer: 3,
    explanation: 'Rolling Wave Planning: An iterative planning technique in which the work to be accomplished in the near term is planned in detail, while the work in the future is planned at a higher level.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q48',
    question: 'You are the project manager in the public works department, w hich awards contracts for constructing roads. Before selecting the sellers, you must advertise in local newspapers. This is an example of',
    options: [
      'Best practices in the industry',
      'External dependency',
      'Discretionary depende ncies',
      'Mandatory dependencies',
    ],
    correctAnswer: 3,
    explanation: 'Mandatory dependencies are those that are contractually required or inherent in the nature of the work. Mandatory dependencies often involve physical limitati ons, such as on a construction project where it is impossible to erect the superstructure until after the foundation has been built, or on an electronics project, where a prototype must be built befor e it can be tested.',
    category: 'Project Integration Management',
    difficulty: 'medium'
  },
  {
    id: 'Q49',
    question: 'In your project, you are aggregating the estimated costs of individual activities to establish an authori zed cost baseline. For this purpose, which of the following will NOT be used as an input?',
    options: [
      'Resource calendars',
      'Scope baseline',
      'Cost baseline',
      'Basis of estimates',
    ],
    correctAnswer: 2,
    explanation: 'Determine Budget is the process of aggregating the estimated costs of individual activities or work packages to establish an authorized cost baseline. Cost baseline is an output, not an input, of the Determine Budget process.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q50',
    question: 'In your project, you would like to generate ideas that can be linked to form organized patterns of thought about a problem. Which one of the following techniques would you us e?',
    options: [
      'Force field analysis',
      'Affinity diagrams',
      'Nominal group techniques',
      'Brainstorming',
    ],
    correctAnswer: 1,
    explanation: 'Affinity diagrams are used to generate ideas that can be lin ked to form organized patterns of thought about a problem.',
    category: 'Project Integration Management',
    difficulty: 'easy'
  },
  {
    id: 'Q51',
    question: 'In your software project, you have a programmer, who constantly professes to know all about project management and keeps challenging his superiors. The programmer is playing the role of',
    options: [
      'Aggressor',
      'Conflict maximizer',
      'Devil`s Advocate',
      'Dominator',
    ],
    correctAnswer: 3,
    explanation: 'Roles that un dermine project management implementation The Aggressor - Criticizes everybody and everything on project management - Deflates the status and ego of other team members - Always acts aggressively The Dominator - Always tries to take over - Professes to kn ow everything about project management - Tries to manipulate people - Will challenge those in charge for a leadership role The Devil’s Advocate - Finds fault in all areas of project management - Refuses to support project management unless threatened - Acts more of a devil than an advocate',
    category: 'Project Communications Management',
    difficulty: 'hard'
  },
  {
    id: 'Q52',
    question: 'Which of the following is not an organizational process asset that can influence the Control Communications process?',
    options: [
      'Report templates',
      'Policies, standards, and procedures that define communications',
      'Specific communication technologies available',
      'The project`s budget Correct Choic e : 4',
    ],
    correctAnswer: 2,
    explanation: 'Decision tree analysis. A diagramming and calculation technique for evaluating the implications of a chain of multiple options in the presence of uncertainty.',
    category: 'Project Cost Management',
    difficulty: 'medium'
  },
  {
    id: 'Q54',
    question: 'Which of the following is a major component in a procurement Agreement? A. Incentives B. Penalties C. Warranty D. Identified project manager',
    options: [
      'B, C and D',
      'All of the above',
      'B and C',
      'A, B and C',
    ],
    correctAnswer: 3,
    explanation: 'The major components in a contract document will vary, but will sometimes include the followin g: Incentives, penalties, pricing, place of delivery, warranty, etc.',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q55',
    question: 'You are the project manager for a project that involves developing a very important product fo r the company. While executing the project plan, you notice that there are a lot of disagreements and conflicts occurring among project team members, specifically regarding approved changes to the product. You review the Change and Issue Logs to gather som e information about what the conflicts could be about. After doing this, what should be your NEXT step?',
    options: [
      'Allow the team members to work through their disagreements without your involvement',
      'Ask a senior team member to help the ot her members resolve their issues',
      'Meet with all team members, listen to each perspective, and facilitate conflict management and consensus toward project objectives',
      'Have each team member discuss how he/she believes the changes should be made',
    ],
    correctAnswer: 2,
    explanation: 'While the project is in executing phase, it is not uncommon for there to be conflict and disagreement among project team members. The role of the project manager is to effectively manage stakeholders and promote appropriate stakeholder engagement. It is therefore important for the project manager to have strong interpersonal and management skills. Examples of interpersonal skills include building trust, resolving conflict, active listening , and overcoming resistance to change. Examples of management skills include facilitating consensus toward project objectives, influencing others to support the project, negotiating agreements to satisfy the project needs, and modifying organizational beha vior to accept the project outcomes. Option 1: The team has already been trying to work out disagreements without success so the project manager must now step in. Option 2: The project manager is ultimately responsible for managing the project team membe rs; this should not be delegated to other team members who may themselves be involved in conflicts. Option 4: This may be a valid exercise after the project manager explores option 3 if the issues are primarily about how the changes to the product should be made.',
    category: 'Project Risk Management',
    difficulty: 'hard'
  },
  {
    id: 'Q56',
    question: 'You observe that two technical team members have been arguing constantly. You would like to ensure that personality clashes do not endanger your project. To resolve this issue, you should use',
    options: [
      'Leading and influencing skills',
      'Communication skills',
      'Negotiation skills',
      'Problem solving skills',
    ],
    correctAnswer: 3,
    explanation: 'Problem solving skills include problem definition and decision -making. Pro blems may be technical (differences of opinion about the best way to design a product), managerial (a functional group is not performing according to plan), or interpersonal (personality or style clashes).',
    category: 'Project Resource Management',
    difficulty: 'medium'
  },
  {
    id: 'Q58',
    question: 'In your curr ent role as a project manager, you track, review, and regulate the progress of your project. Which of the following would you not use to perform these activities?',
    options: [
      'Project management plan',
      'Performance reports',
      'Organizational process assets',
      'Approved change requests',
    ],
    correctAnswer: 3,
    explanation: 'Monitor and Control Project Work is the process of tracking, reviewing, and reporting the progress to meet the performance objectives d efined in the project management plan. Approved change requests is not an input to this process.',
    category: 'Project Integration Management',
    difficulty: 'hard'
  },
  {
    id: 'Q59',
    question: 'Your company exhibited a car model in two international auto expos and obtained feedback from the global automobile industry, auto magazines, and others. The company decided to go ahead with the designing and manufacturing of the car, taking into consideration the feedback received. Which of the following methods did your company use to make this decision?',
    options: [
      'Observation technique',
      'Prototype',
      'Requirement documentation',
      'Requirement traceability matrix',
    ],
    correctAnswer: 1,
    explanation: 'Prototype is a method of ob taining early feedback on requirements by providing a working model of the expected product before actually building it. Since a prototype is tangible, it allows stakeholders to experiment with a model of the final product rather than being limited to disc ussing abstract representations of their requirements.',
    category: 'Project Integration Management',
    difficulty: 'hard'
  },
  {
    id: 'Q60',
    question: 'Based on the following, construct a project schedule network diagram and determine the duration of the critical path. Your project has a total of five tasks. At the beginning of the project you can simultaneously begin task s A and C. Task A has a duration of 3 days, and task C has a duration of 4 days. When task A completes, task B can begin. Task B has a duration of 5 days. Task C is followed by task D, which is estimated at 6 days. Once task B is done, you can start task E . The duration of task E is 4 days. Task D is a predecessor to Task E. What is the duration of the critical path?',
    options: [
      '12 days',
      '15 days',
      '18 days',
      '14 days',
    ],
    correctAnswer: 3,
    explanation: 'The project schedule network diagram can be represented as shown below.',
    category: 'Project Schedule Management',
    difficulty: 'medium'
  },
  {
    id: 'Q61',
    question: 'In your project, you are estimating schedule activity costs. You decide to use the bottom -up estimating technique . In this context, which of the following statements about Bottom -up Estimates is incorrect?',
    options: [
      'Determines the cost of individual scope requirements in the scope statement',
      'Provides detailed costs at lowest levels that are rolled up to higher levels for reporting and tracking purposes',
      'Is a method of estimating a component of work',
      'Provide cost and accuracy, which is influenced by the size and complexity of the individual schedule activity or work packag e',
    ],
    correctAnswer: 0,
    explanation: 'Bottom -up estimating is a method of estimating a component of work. The cost of individual work packages or activities is estimated to the greatest level of specified detail. The detailed cost is then summarized or "rolled up" to higher levels for subsequent reporting and tracking purposes.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q62',
    question: 'You are managing a project to design and implement a process to manufacture components for internal combustion engines used in the automobile industry. You notice that in the past couple of days too many defects have been observed. You would like to find out whether the process is stable or unusual events are occurring in your manufacturing process. For this purpose, you should use',
    options: [
      'Inspection',
      'Pareto charts',
      'Statistical sampling',
      'Control charts',
    ],
    correctAnswer: 3,
    explanation: 'Control charts are used to determine whether or not a process is stable or has predictable performance. Control charts can be used to monitor various types of output variables. Although used most frequentl y to track repetitive activities required for producing manufactured lots.',
    category: 'Project Quality Management',
    difficulty: 'hard'
  },
  {
    id: 'Q63',
    question: 'In your project, you are determining project roles, responsibilities, and reporting relationships. W hich of the following is not an input to this process?',
    options: [
      'Enterprise environmental factors',
      'Organizational process assets',
      'Activity resource requirements',
      'Project organization charts',
    ],
    correctAnswer: 3,
    explanation: 'Plan Human Resource Management is the process of identifying and documenting project roles, responsibilities, required skills, reporting relationships, and creating a staffing management plan. Inputs to this process are a ctivity resource requirements, enterprise environmental factors, and organizational process assets. However, project organization charts are an output.',
    category: 'Project Resource Management',
    difficulty: 'hard'
  },
  {
    id: 'Q64',
    question: 'In yo ur project, you have created a list of identified risks and potential responses. You should document this information in the',
    options: [
      'Risk management plan',
      'Risk database',
      'Project plan',
      'Risk register',
    ],
    correctAnswer: 3,
    explanation: 'The risk register is a document in which the results of risk analysis and risk response planning are recorded.',
    category: 'Project Risk Management',
    difficulty: 'easy'
  },
  {
    id: 'Q65',
    question: 'You will use the C onduct Procurements process to receive bids or proposals and apply the selection criteria for selecting a provider. Which of the following tools and techniques can be used for the Conduct Procurements process?',
    options: [
      'Procurement negotiations, bidde r conferences, and independent estimates',
      'Procurement negotiations, contract types, and bidder conferences',
      'Procurement negotiations, make -or-buy analysis, and independent estimates',
      'Performance reporting, advertis ing, and independent estimates',
    ],
    correctAnswer: 0,
    explanation: 'Procurement negotiations, bidder conferences, advertising, and independent estimates are some of the tools and techniques used in the Conduct Procurements process. Refer ence: PMBOK® Guide - Fifth Edition, page 371 (figure 12 -4)',
    category: 'Project Procurement Management',
    difficulty: 'hard'
  },
  {
    id: 'Q66',
    question: 'You are managing a large software development project which involves an external customer. According to the Scope Management Plan, the customer is expected to be verif ying product deliverables when completed throughout the project. This is especially important due to the complexity of the product requirements. You have sent a few of the software modules to the customer for deliverable acceptance as scheduled; however, s he appears to be busy and is slow responding to emails and voice mails. The project is starting to fall behind and product acceptance risk has increased. What should be your NEXT step?',
    options: [
      'Schedule a meeting with the customer to discuss the issu e and explore ways of increasing current engagement',
      'Ask the project sponsor to contact the customer and discuss the impact to the project',
      'Ask the customer to provide another contact to verify the deliverables',
      'Provide the customer with extra time to verify the modules and change the project schedule accordingly',
    ],
    correctAnswer: 0,
    explanation: 'It is the project manager’s responsibility to effectively manage all stakeholder engagement throughou t the project life cycle. Any issues that arise should be addressed promptly to limit negative impact to the project. At this point, the next step is t o try to deal with the issue with the customer first by using appropriate management and interpersonal sk ills. Option 2: The option of involving the project sponsor can be explored if option 1 is not effective. Option 3: This is also not an immediate next step but can be explored later if the sponsor decides that her schedule cannot accommodate the demands of the project. Option 4: Allowing extra time for the customer to verify the scope could have significant impact to the project schedule and other parts of the project management plan, so this would not be the best choice at this time.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q67',
    question: 'You are a project manager in an IT company. You have recently received an offer as a project manager in a construction company offering a 25% salary hike. You have excellent technical knowledge in the IT field, but do not have much exposure to the construction industry. In this context,',
    options: [
      'You should attend training classes related to the construction industry to get more technical expertise in the field.',
      'You should not take up the assignm ent, because you will lose out on the experience and skills gained in the IT field.',
      'You should take up the assignment, because project management skills required in the construction company are similar to those required in the IT field.',
      'You should try to get more information about project management in the construction industry and then make an informed decision about whether to take up the new opportunity.',
    ],
    correctAnswer: 2,
    explanation: 'According to PMI, project management skills span across industries and the knowledge gained in one industry can be used in other industries. A project manager need not be technically qualified in any specific industry to succeed.',
    category: 'Project Communications Management',
    difficulty: 'hard'
  },
  {
    id: 'Q68',
    question: 'At what stage of the project are factors like probability of successfully completing the project, cost of changes, and cost o f error correction, the highest?',
    options: [
      'Beginning',
      'End',
      'Executing',
      'Beginning and end',
    ],
    correctAnswer: 1,
    explanation: 'The cost of making changes and correcting errors typically increases substantially as the project approaches completion.',
    category: 'Project Cost Management',
    difficulty: 'medium'
  },
  {
    id: 'Q69',
    question: 'As a project manager, you know that project plan development is an important element to manage projects. Develop Project Management Plan is done as part of',
    options: [
      'Initiating',
      'Planning',
      'Executing',
      'Controlling',
    ],
    correctAnswer: 1,
    explanation: 'Develop Project Management Plan process is taken up as part of the Planning Process Group. Please refer table 3 -1 (page 61) and figure A1 -7 (page 428 ).',
    category: 'Project Integration Management',
    difficulty: 'medium'
  },
  {
    id: 'Q70',
    question: 'As a project manager, you are interested in creating a detailed project scope statement to clearly define what work will be performed and what work is going to b e excluded. Which of the following will NOT be a part of this project scope statement?',
    options: [
      'Project exclusions',
      'Work breakdown structure (WBS)',
      'Project deliverables',
      'Project assumptions and constraints',
    ],
    correctAnswer: 1,
    explanation: 'The detailed project scope statement, either directly, or by reference to other documents, includes the following: product scope description, acceptance criteria, deliverable, project exclusion, constrain ts, and assumptions. However, it does not include WBS, which is created in the Create WBS process.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q71',
    question: 'Please refer to the diagram below: What is the slack for Task 2?',
    options: [
      '3 days',
      '2 days',
      '- 4 days',
      '4 days',
    ],
    correctAnswer: 3,
    explanation: 'The two paths for this project are: Task 1→ Task 2→ Task 5 Task 1→ Task 3→ Task 4→ Task 5 The lengths of the paths are: Task 1→ Task 2→ Task 5 : 17 days Task 1→ Task 3→ Task 4→ Task 5 : 21 days So, the critical path is of 21 days duration. Slack in Task 2 = 21 - 17 days = 4 days',
    category: 'Project Schedule Management',
    difficulty: 'medium'
  },
  {
    id: 'Q72',
    question: 'Your sponsor has asked you to use payback period as a selection criterion to select amongst 5 competing projects. In this context, which of the following statements related to payback period is incorrect?',
    options: [
      'Payback period is the number of years required to get back the initial investment in the project.',
      'Payback period takes the discount rate into account to determine the best pos sible option.',
      'Payback period is a project selection criterion widely used in conjunction with NPV and IRR to determine the most suitable project.',
      'The initial investment in the project will not impact the selection criteria whe n payback period is used for project selection.',
    ],
    correctAnswer: 1,
    explanation: 'Payback Period  Number of years required for an organization to recapture an initial investment.  Discount rate is not taken into account in calculations for payback period.  Project Selection Criterion: Select a project with lower payback period. Example: There are 2 projects. Project A has an investment of $500,000 and a payback period of 3 years. Project B has an investment of $300,000 and a payback period of 5 years. Using the payback period criterion, which project will you select? Answer: Project A will be selected. The fact that project B has a smaller investment than project A will not impact the selection.',
    category: 'Project Integration Management',
    difficulty: 'hard'
  },
  {
    id: 'Q73',
    question: 'You are working as a research assistant studying the growth of bacteria under different environmental conditions. Based on yo ur experiments, you conclude that the longevity of bacteria increases as the temperature increases. What type of diagram can you use to illustrate your observation?',
    options: [
      'Control chart',
      'Run chart',
      'Scatter diagram',
      'Histogram',
    ],
    correctAnswer: 2,
    explanation: 'A scatter diagram shows the relationship between two variables.',
    category: 'Project Quality Management',
    difficulty: 'hard'
  },
  {
    id: 'Q74',
    question: 'As a project manager, you realize the importance of team development for human resource management. Which of the following is NOT a tool for the Develop Project Team process?',
    options: [
      'Interpersonal skills',
      'Pre-assignment',
      'Train ing',
      'Ground rules',
    ],
    correctAnswer: 1,
    explanation: 'Pre-assignment refers to the project team members selected in advance and is one of the tools and techniques used for the Acquire Project Team process.',
    category: 'Project Resource Management',
    difficulty: 'hard'
  },
  {
    id: 'Q75',
    question: 'In your project, the risk calculations show that there is a risk of overrunning the project scope and schedule targets to levels that are beyond the threshold limits determined in the project . To bring the level of risk to a level acceptable to your organization, you should',
    options: [
      'Consider using contingency reserves',
      'Decrease the project scope and increase the project schedule',
      'Talk with your sponsor about cancelling the project',
      'Do additional risk response planning',
    ],
    correctAnswer: 0,
    explanation: 'Contingency reserves are needed to bring the risk of overrunning stated project objectives to a level acceptable to the organiz ation.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q76',
    question: 'In your project, the procurement statement of work (SOW) describes the procurement item in sufficient detail to allow prospective sellers to determine if they are cap able of providing the product. In this context, the details of the procurement items` descriptions',
    options: [
      'May vary, based on the nature of the item or needs of the buyer.',
      'Should be at the level of work breakdown structures.',
      'Should be at the activity level.',
      'Should be at the level required in the proposal.',
    ],
    correctAnswer: 0,
    explanation: 'The Procurement statement of work describes the procurement item in sufficient detail to allow pr ospective sellers to determine if they are capable of providing the products, services, or results. Sufficient detail can vary based on the nature of the item, the needs of the buyer, or the expected contract form.',
    category: 'Project Procurement Management',
    difficulty: 'hard'
  },
  {
    id: 'Q77',
    question: 'During which process would the project manager most often need to use skills that influence others to support the project and facilitate consensus toward project objectives?',
    options: [
      'Identify Stakeholders',
      'Manage Stakeholder Engagement',
      'Plan Stakeholder Management',
      'Control Stakeholder Engagement',
    ],
    correctAnswer: 1,
    explanation: 'These are examples of Management Skills which are tools for Manage Stake holder Engagement.',
    category: 'Project Stakeholder Management',
    difficulty: 'medium'
  },
  {
    id: 'Q78',
    question: 'Your company has recently been awarded a contract by the government to reconstruct houses devastated by an earthquake. In this context, the government`s role will impact your',
    options: [
      'Project scope baseline',
      'Business case and Business need',
      'Project charter',
      'Project management plan',
    ],
    correctAnswer: 2,
    explanation: 'Option 3: Since the governme nt is an external agency, and this is a "recently awarded" project as mentioned in the question, hence inputs (e.g. contract) from the government will help the project manager in creation of the project charter for the performing organization. Option 1: S cope Baseline includes the Scope Statement, WBS and WBS Dictionary. So, this will be created later on after the project charter is finalized. Option 2: Business Need/Business case for the project should be already established because the government has contracted out the work to your company. Option 4: Project management plan is a planning document which will be created after the project charter is finalized.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q79',
    question: 'A project manager is responsible f or managing project costs and human resources. Factors like cost and staffing level for a project',
    options: [
      'Increase with duration of the project',
      'Decrease with duration of the project',
      'Are low at the start, peak as the w ork is carried out, and drop rapidly as the project draws to a close',
      'Cannot be determined, as they are specific to the project',
    ],
    correctAnswer: 2,
    explanation: 'Refer PMBOK® Guide - Fifth Edition, page 39 (figure 2 -8).',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q80',
    question: 'You are managing a small project with five team members working part -time. At the beginning of every week, you orally allocate work to all the team mem bers. This is an example of',
    options: [
      'Work Authorization System',
      'Improper planning because team members do not know in advance what needs to be done at what time',
      'Project time management plan',
      'Project flexib le time management plan',
    ],
    correctAnswer: 0,
    explanation: 'A work authorization system is a collection of formal documented procedures that defines how project work will be authorized (committed) to ensure that the work is done by the id entified organization, at the right time, and in the proper sequence.',
    category: 'Project Resource Management',
    difficulty: 'medium'
  },
  {
    id: 'Q81',
    question: 'In your project, you are preparing the requirements management plan to define and document stakeholders` needs to meet the project`s objectives. Which of the following is not a component of the requirements management plan?',
    options: [
      'Traceability structure',
      'WBS',
      'Requiremen ts prioritization process',
      'Product metrics',
    ],
    correctAnswer: 1,
    explanation: 'Components of the requirements management plan can include, but are not limited to... requirements prioritization process, product metrics that w ill be used and the rationale for using them; and traceability structure to reflect which requirement attributes will be captured on the traceability matrix.',
    category: 'Project Scope Management',
    difficulty: 'medium'
  },
  {
    id: 'Q82',
    question: 'The Trustees of a Race Track have appointed you as the Project Manager for a $400 million redevelopment project. They expect the project to be completed before the Race Da te exactly 3 Years from Project Start Date. Which of the following parameters will help in determining the probability of finishing on time?',
    options: [
      'PERT value',
      'CPM',
      'Standard deviation',
      'Variance',
    ],
    correctAnswer: 2,
    explanation: 'Standard deviation is a measure that determines the probability of getting a result. Hence, it is a good indicator of the probability of completing the task on time.',
    category: 'Project Risk Management',
    difficulty: 'hard'
  },
  {
    id: 'Q83',
    question: 'You are the project manager for a project where your team must travel to the work site by foot. The walk is 100 miles, and is the first task on the project schedule. The total amount budgeted for this task is $4,000. If the team is sched uled to walk 20 miles per day, they should reach the work site at the end of day 5. At the end of the second day, you realize the team has only traveled 30 miles, and you have spent $2,000. Based on this, what is the SPI for your project, and the projected TCPI.',
    options: [
      '0.8, 1.4',
      '0.75, 1.4',
      '0.75, 1.2',
      'Cannot be determined with the given information',
    ],
    correctAnswer: 1,
    explanation: 'Given: BAC = $4,000 AC = $2,000 PV = $1,600 ($4,000 / 5 days = $800 / day x 2 days = $1,600) EV = $1,200 ($4,000 / 100 = $40 / mile; 30 miles x $40 / mile) SPI = EV/PV = $1,200 / $1,600 = 0.75 (or 30 miles / 40 miles = 0.75) TCPI = (BAC – EV) / (BAC – AC) = ($4,000 -$1,200) / ($4,000 -2,000) = $2,800 / $2, 000 = 1.4',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q84',
    question: 'After joining as a stand -in project manager for an ongoing project, you are informed by the team that certain features are being added to the deliverable which was not asked for by the customer, to earn customer appreciation. In this situation',
    options: [
      'You are concerned, because the project team is gold -plating',
      'You are happy, because the project will `exceed customer expectations`',
      'You are worrie d that this is going to increase the project size',
      'You are undecided about the increase in the quality metrics of the project',
    ],
    correctAnswer: 0,
    explanation: 'You should be concerned because the project team is gold -plating, which is not a recommended project management practice. Please note that `adding extra functionality beyond project scope` is not recommended by PMI, since a project is supposed to deliver what is defined in its scope. Similarly, one cannot request fo r additional sizing for the project because the customer had never asked for the additional requirements.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q85',
    question: 'Among the various conflict resolution modes (Confrontation, Compromise, Withdrawal, For cing, and Smoothing), which conflict resolution mode is most preferred or least preferred by project managers (answer format: most preferred, least preferred)?',
    options: [
      'Compromise, Withdrawal',
      'Confrontation, Withdrawal',
      'Confrontation, Forcing',
      'Smoothing, Withdrawal',
    ],
    correctAnswer: 1,
    explanation: 'The most preferred conflict resolution techniques adopted by project managers (in descending order of preference) are as follows: 1. Confronta tion 2. Compromise 3. Smoothing 4. Forcing 5. Withdrawal Blake and Mouton have delineated five modes for handling conflicts as listed below:  Withdrawal: Retreating or withdrawal from a potential disagreement.  Smoothing: De-emphasizing or avoiding areas o f differences and emphasizing areas of agreement.  Compromising: Bargaining and searching for solutions that bring some degree of satisfaction to the parties in a dispute. Characterized by a ‘’give and take’’ attitude.  Forcing: Exerting one’s viewpoint at the potential expense of another. Often characterized by competitiveness and a win -lose situation.  Confrontation: Facing the conflict directly, which involves a problem solving approach, whereby affected parties work through their disagreements. Referenc e: Project Management - A Systems Approach to Planning, Scheduling and Controlling, pages 304, 305 and 306',
    category: 'Project Resource Management',
    difficulty: 'medium'
  },
  {
    id: 'Q86',
    question: 'As a project manager, you are creating a risk management plan to describe how risk management will be structured and performed on the project. Which of the following would the risk management plan not include?',
    options: [
      'Budgeting',
      'Methodology',
      'Trigger condition',
      'Risk categories',
    ],
    correctAnswer: 2,
    explanation: 'Trigger condition is an event or situation that indicates that a risk is about to occur.',
    category: 'Project Risk Management',
    difficulty: 'medium'
  },
  {
    id: 'Q87',
    question: 'As the project manager for a critical project in your organizat ion, you must ensure that your team has the newest available technology, so you are procuring 25 custom desktop computers, printers, and updated software for the project team members. You will select a vendor and conduct negotiations with the vendor you de termine best able to provide the customized computers as required. What is a key output of this process?',
    options: [
      'Source selection criteria',
      'Procurement negotiations',
      'Procurement management plan',
      'Agreements',
    ],
    correctAnswer: 3,
    explanation: 'You are currently in the Conduct Procurements process and one of the key output of this process is the Agreement. Option 1: Source selection criteria is an output of the Plan Procurement Management pro cess. Option 2: Procurement negotiations is a tool for the Conduct Procurements process, its not an output. Option 3: The Procurement management plan in an output of the Plan Procurement Management process.',
    category: 'Project Resource Management',
    difficulty: 'easy'
  },
  {
    id: 'Q88',
    question: 'Issue resolution is necessary to address obstacles that can prevent the team from achieving its goals. In order to manage and resolve issues that arise during project execution, you develop an Issue Log and ass ign each issue to a team member to ensure there is accountability for resolving specific issues by a target date. The Issue Log is generated and updated in which Project Stakeholder Management process(es)?',
    options: [
      'Manage Stakeholder Engagement',
      'Control Stakeholder Engagement',
      'Manage Stakeholder Expectations',
      'Manage Stakeholder Engagement and Control Stakeholder Engagement',
    ],
    correctAnswer: 3,
    explanation: 'The question asks where the Issue Log is generated and updated. The Issue Log is an output of the Manage Stakeholder Engagement process. It is also an input to the Control Stakeholder Engagement process so it is used and updated there as well.',
    category: 'Project Stakeholder Management',
    difficulty: 'hard'
  },
  {
    id: 'Q89',
    question: 'Which of the following is not the responsibility of a Project Management Professional?',
    options: [
      'Making decisions and taking actions',
      'Fulfilling the commitments that you undertake',
      'Ignoring er rors and omissions',
      'Upholding the Code of Ethics and Professional Conduct',
    ],
    correctAnswer: 2,
    explanation: 'It is the responsibility of a project management professional to take ownership of the decisions you make or fail to make, the actions you take or fail to take, and the consequences that result from these actions. When errors or omissions are made, the certificant should not ignore them, but should take ownership and make suitable corrections.',
    category: 'Project Integration Management',
    difficulty: 'medium'
  },
  {
    id: 'Q90',
    question: 'Project performance must be monitored and measured regularly to identify variances from the plan. Which of the following processes does not belong to the Monitoring and Controlling Process Group?',
    options: [
      'Valida te Scope',
      'Control Risks',
      'Control Communications',
      'Perform Quality Assurance',
    ],
    correctAnswer: 3,
    explanation: 'Perform Quality Assurance is a process in the Executing Process group.',
    category: 'Project Scope Management',
    difficulty: 'medium'
  },
  {
    id: 'Q91',
    question: 'To know who will approve the changes in your project deliverables and documentation, you should refer to',
    options: [
      'Change control system',
      'Project plan',
      'Organization chart',
      'Resource assignment matrix',
    ],
    correctAnswer: 0,
    explanation: 'Change control system is a set of procedures that describes how modifications to the project deliverables and documentation are managed and controlled.',
    category: 'Project Resource Management',
    difficulty: 'easy'
  },
  {
    id: 'Q92',
    question: 'Which of the following cannot be considered a benefit of a well -constructed scope statement?',
    options: [
      'Provides a documented basis for making future proje ct decisions',
      'Develops common understanding of project scope among stakeholders',
      'Provides knowledge of project justification, deliverables, and objectives',
      'Provides a basis for time and cost estimates',
    ],
    correctAnswer: 3,
    explanation: 'Work breakdown structure (which is a component of the scope baseline, an output from Create WBS process) helps in providing a basis for time and cost estimates. Options 1, 2, and 3 are benefits of a well -constructe d scope statement.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q93',
    question: 'You are responsible for Quality Audit in an Ongoing Project. The Audit has an optimistic estimate of ten days, pessimistic estimate of sixteen days, and most likely estimate of thirteen days. Assuming a normal distribution, what is the probability that the Audit will be completed within 10 to 16 days?',
    options: [
      '99.99 %',
      '99.73 %',
      '95.46 %',
      '68.26%',
    ],
    correctAnswer: 1,
    explanation: 'Please refer to the following Six Sigma exhibit: In a normal distribution, the PERT duration (also called mean) {Pessimistic + (4* Most Likely) + Optimistic} / 6 = {16 + (4 * 13) + 10}/6 = 13 days 1 Standard Deviation (sigma) = (Pes simistic - Optimistic) / 6 = (16 - 10) / 6 = 1 day If the task has to be completed within 10 days to 16 days, then the probability of completion within the time frame is 99.73% (3 sigma) as shown in the Six Sigma exhibit.',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q94',
    question: 'You have calculated the projected cost performance that is required to be achieved with the remaining resources in order to meet a specified management goal. This projected cost performance is also known as',
    options: [
      'Performance measurement document',
      'To-complete performance index',
      'Cost baseline',
      'Cost performance index',
    ],
    correctAnswer: 1,
    explanation: 'The To -complete performance index (TCPI) is a measure of t he cost performance that is required to be achieved with the remaining resources in order to meet a specified management goal, expressed as the ratio of the cost to finish the outstanding work to the remaining budget.',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q95',
    question: 'In your project, you recommend a specific technique to identify a problem, discover the underlying causes that lead to it, and develop preventive actions. The recommended technique is',
    options: [
      'Trend analys is',
      'Process analysis',
      'Risk analysis',
      'Root cause analysis',
    ],
    correctAnswer: 3,
    explanation: 'Root cause analysis is a specific technique used to identify a problem, discover the underlying causes that lead to it, and develop preventive actions.',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q96',
    question: 'You are the project manager of a high priority project, which will require more than 1,000 team members. During human resource planning, you would like to apply proven principles to shorten the time needed to create a human resource plan and make it effective. In this context, you will benefit if you consult an expert in the field of',
    options: [
      'Networking and team formation',
      'Human resource theory',
      'Organizational theory',
      'Cost management',
    ],
    correctAnswer: 2,
    explanation: 'Organizational theory provides information regarding the way in which people, teams, and organiza tional units behave. Effective use of this information can shorten the amount of time, cost, and effort needed to create the Plan Human Resource Management process outputs and improve planning efficiency.',
    category: 'Project Cost Management',
    difficulty: 'easy'
  },
  {
    id: 'Q97',
    question: 'Project Risk Management helps in maximizing the likelihood and impact of positive events, and minimizing the likelihood and impact of negative events in the project. In this context, Plan Risk Responses process',
    options: [
      'Helps in defining how to conduct the risk management activities',
      'Develops procedures and techniques to enhance opportunities and to reduce threats to project objectives',
      'Determines which risks may affect the project and documents their characteristics',
      'Monitors residual risks, identifies new risks, and evaluates risk process effectiveness',
    ],
    correctAnswer: 1,
    explanation: 'Plan Risk Responses is the process of developing options and actions to enha nce opportunities and to reduce threats to project objectives.',
    category: 'Project Risk Management',
    difficulty: 'hard'
  },
  {
    id: 'Q98',
    question: 'In your project, the seller is worried that the CPIF contract is reaching the point of total assumption. What is meant by thepoint of total assumption ?',
    options: [
      'Point where share r atio becomes irrelevant',
      'Point where risk registers need to be updated',
      'Point where buyer assumes all the risk',
      'Point where seller decides not to do the project any more',
    ],
    correctAnswer: 0,
    explanation: 'Justifica tion : Point of total assumption refers to the point where the costs have to be incurred by the seller herself when they have exceeded the ceiling limits stipulated in the contract. Hence, share ratio ceases to be relevant.',
    category: 'Project Risk Management',
    difficulty: 'hard'
  },
  {
    id: 'Q99',
    question: 'You are working with your team to execute a project which involves implementation of 50 new Base Transceiver Station (BTS) towers throughout remote areas of the country in order to improve wireless communication services . The project involves many internal and external stakeholders which you have been managing throughout. Current schedule performance is 1.3 and cost performance is 1.1 and there are no pressing issues that require escalations at this time. The sponsor is a very high -level executive in the company who fully supports the project. However, he seems quite nervous these days and has showed up at the past two team status meetings during which he diverted the team discussion away from the usual agenda to issues th at did not involve the project team. What is the best NEXT step for you to pursue?',
    options: [
      'Speak with the sponsor separately to discuss his present concerns and offer to provide any other required information outside of the team status meetings.',
      'Since the sponsor is a high -level executive, you should allow him to attend the meeting and address his concerns there.',
      'Ask the sponsor not to attend any more meetings.',
      'Ask the sponsor to submit his issues prior to the meeting so you can add them to the Issue Log and the meeting agenda.',
    ],
    correctAnswer: 0,
    explanation: 'The project sponsor is a very valuable stakeholder to the project since he/she is accountable for enabling project success. Some sponsors may be over - or under -involved in projects which could adversely impact the project’s objectives. In this case, the sponsor is causing some distraction for the project team members by attending team meetings and bringing up issues that should not be part of the regular status meeting. The project manager should first have a discussion with the project sponsor to understand his present concerns and offer options for him to get any information he needs instead of attending regular team status meetin gs. It is the project manager’s responsibility to manage stakeholders to ensure the project’s success and to also ensure that they are all engaged when appropriate. Option 2: Although the sponsor is a senior manager, he does not need to attend regular tea m status meetings, but rather should be involved when issues need to be escalated, or when required for authorizing changes, phase -end reviews, very high risks, etc. Option 3: The sponsor does not usually need to attend team meetings but this option is a bit drastic. There are times when the sponsor may want to check in and provide support to the project team so he may occasionally attend a meeting. Also it would not be a good idea for the project manager to ask the sponsor not to attend any more meetings as the authority of the sponsor is usually above that of the project manager. Option 4: It’s always best to include all issues to be discussed in the meeting on an agenda; however, that’s not the real problem in this situation and the issues being brought up by the sponsor are not relevant to this meeting.',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q100',
    question: 'You have joined a company as a project manager, and although you maintain the professional conduct expected of you, it is not reciprocated b y the other employees. The BEST course of action for you would be to',
    options: [
      'Maintain the same conduct',
      'Change your behavior and be one among the other employees',
      'Complain to the higher authority',
      'Ignore ot hers` behavior',
    ],
    correctAnswer: 0,
    explanation: 'As a project manager, you are expected to behave as befitting a professional project management certificant, even when such conduct is not reciprocated by your colleagues. This is one of the major tenets of the Code of Ethics and Professional Conduct prescribed by PMI.',
    category: 'Project Integration Management',
    difficulty: 'hard'
  },
  {
    id: 'Q101',
    question: 'As a project manager, you are aware that project management process groups are linked by their objectives. Pla nning process group outputs including the project management plan become inputs for project implementation. In this context, which of the following statements is inaccurate?',
    options: [
      'Process groups are non -overlapping activities that occur with varyi ng intensity throughout the project.',
      'If the project is divided into phases, the process groups interact within a project phase and may also cross over to other phases.',
      'Not all processes will be needed on all projects and not a ll of the interactions will apply to all the projects or process groups.',
      'Among the process groups and their processes, the process outputs are related and have an impact on the other process groups.',
    ],
    correctAnswer: 0,
    explanation: 'Justifi cation : The Process Groups are seldom either discrete or one -time events; they are overlapping activities that occur throughout the project. The output of one process generally becomes an input to another process or is a deliverable of the project, subproject, or project phase.',
    category: 'Project Integration Management',
    difficulty: 'hard'
  },
  {
    id: 'Q102',
    question: 'Perform Integrated Change Control process requires coordina ting changes across knowledge areas. When a proposed schedule change occurs, which of the following will not be affected?',
    options: [
      'Cost',
      'Quality',
      'Staffing',
      'Communications',
    ],
    correctAnswer: 3,
    explanation: 'A proposed schedule change will often affect cost, risk, quality, and staffing. Usually, communications are not impacted if there is a schedule change in the project.',
    category: 'Project Schedule Management',
    difficulty: 'medium'
  },
  {
    id: 'Q103',
    question: 'You are t he project manager for an initiative to release a new product in the market. But because of government regulations, you will have to make some changes to the requirements documentation and the WBS. The changes made in the requirements documentation are ref lected in the',
    options: [
      'Project document updates',
      'Work breakdown structure',
      'Project plan',
      'Project charter',
    ],
    correctAnswer: 0,
    explanation: 'Project Document updates: If approved change re quests result from the Create WBS process, then the requirements documentation may need to be updated to include approved changes.',
    category: 'Project Scope Management',
    difficulty: 'easy'
  },
  {
    id: 'Q104',
    question: 'Of the following documents, all of which are updated during the Control Schedule process, which is NOT a part of the project management plan?',
    options: [
      'Schedule baseline',
      'Cost baseline',
      'Schedule management plan',
      'Schedule data Correct Choic e : 4',
    ],
    correctAnswer: 1,
    explanation: 'Determine Budget is the process of aggregating the estimated costs of individual activities or work packages to establish an authorized cost baseline. Resource calendars are inputs to this process.',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q106',
    question: '`Cost of quality` includes all costs incurred over the life of the product by investing in meeting requirements. In this cont ext, which of the following is NO T a ‘cost of quality’?',
    options: [
      'Opportunity costs',
      'Cost of poor quality',
      'External failure costs',
      'Appraisal costs',
    ],
    correctAnswer: 0,
    explanation: 'Cost of quality includes all costs incur red over the life of the product by investment in preventing non -conformance to requirements, appraising the product or service for conformance to requirements, and failing to meet requirements (rework). Failure costs are often categorized into internal (f ound by the project) and external (found by the customer). Failure costs are also called cost of poor quality.',
    category: 'Project Cost Management',
    difficulty: 'medium'
  },
  {
    id: 'Q107',
    question: 'You are the project manager in an organization, so all your team members report to you. Managing a team is always a challenge and a project manager needs to focus on',
    options: [
      'Communication',
      'Observation',
      'Influence',
      'Assessment',
    ],
    correctAnswer: 0,
    explanation: 'Team management involves a combination of skills with special emphasis on communication, conflict management, negotiation, and leadership.',
    category: 'Project Communications Management',
    difficulty: 'easy'
  },
  {
    id: 'Q108',
    question: 'If there is a fire, the risk response plan developed is to use a fire extinguisher. If the fire extinguisher cannot take care of the fire, you call in a fire engine – calling in the fire engine is an e xample of',
    options: [
      'Secondary risk',
      'Residual risk',
      'Fallback Plan',
      'Work around',
    ],
    correctAnswer: 2,
    explanation: 'Several risk response strategies are available… A fallback plan can be devel oped for implementation if the selected strategy turns out not to be fully effective or if an accepted risk occurs.',
    category: 'Project Risk Management',
    difficulty: 'hard'
  },
  {
    id: 'Q110',
    question: 'Which of the following statements about pro ject stakeholders is not correct?',
    options: [
      'Stakeholders influence over the final characteristics of the product is usually highest at the beginning of a project.',
      'Stakeholders may passively or actively detract from the success of the pr oject.',
      'Stakeholder identification is a continuous process throughout the entire project life cycle.',
      'Stakeholders’ levels of responsibility and authority remain the same throughout the project’s life cycle. Correct C hoice : 4',
    ],
    correctAnswer: 3,
    explanation: 'When you realize that you are in an actual or a potential conflict of interest situation, you should immediately withdraw fro m engaging in decision -making activities. Decisions taken in such situations might go against the interests of your current project and the employer company.',
    category: 'Project Stakeholder Management',
    difficulty: 'hard'
  },
  {
    id: 'Q112',
    question: 'You are the project manager of a new project, tasked wit h construction of a bridge on the River Nile in Egypt. While initiating the project, you should',
    options: [
      'Create a scope management plan to document project scope definition, verification, and control',
      'Develop a project management plan',
      'Determine specific activities that need to be performed to produce various project deliverables',
      'Develop a project charter',
    ],
    correctAnswer: 3,
    explanation: 'Project Charter is a document issued by the projec t initiator or sponsor that formally authorizes the existence of a project and provides the project manager with the authority to apply organizational resources to project activities.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q113',
    question: 'You are in the initiating phase of your project and are involved with creation of the project charter. Which of the following statements relating to the project charter is NOT correct?',
    options: [
      'Includes or references the business need and product description.',
      'Provides authority to the project manager.',
      'Formally authorizes a project.',
      'Authorized only by the project sponsor.',
    ],
    correctAnswer: 3,
    explanation: 'Projects are initiated by an entity external to the project such as a sponsor, program or project management office (PMO) staff person, or a portfolio governing body chairperson or authorized representative. The project initiator o r sponsor should be at the level that is appropriate to procure funding and commit resources to the project.',
    category: 'Project Procurement Management',
    difficulty: 'medium'
  },
  {
    id: 'Q115',
    question: 'Please refer to the diagram below: Task 1→ Task 3→ Task 4→ Task 5 is the critical path. What is the late finish date for Task 2?',
    options: [
      '15 days',
      '17 days',
      '13 days',
      '3 days',
    ],
    correctAnswer: 1,
    explanation: 'The length of t he critical path is: (3 + 6 + 8 + 4) = 21 days. So, the late finish for Task 2 = Critical path - time for Task 5 = 21 - 4 = 17 days',
    category: 'Project Schedule Management',
    difficulty: 'easy'
  },
  {
    id: 'Q116',
    question: 'As the project manager in a software company, you are determining the possible costs to complete project activities. This is done as part of',
    options: [
      'Variance analysis',
      'Estimate Costs',
      'Determine Budget',
      'Control Costs',
    ],
    correctAnswer: 1,
    explanation: 'Estimate Costs is the p rocess of developing an approximation of the monetary resources needed to complete project activities. Cost trade -offs and risks should be considered, such as make versus buy, buy versus lease, and the sharing of resources in order to achieve optimal costs for the project.',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q117',
    question: 'You are trying to determine the cost and schedule trade -off which will be most appropriate for determining the ride quality of a car. You classify factors like tire pressure, suspension, height of vehicle, etc., which have to be optimized to improve ride quality. A tool you can use to facilitate making the decision is',
    options: [
      'Cost of quality',
      'Cause -and-effect diagrams',
      'Design of experiments',
      'Network diagrams',
    ],
    correctAnswer: 2,
    explanation: 'Design of Experiments (DOE) is a statistical method for identifying which factors may influence specific variables of a product or process un der development or in production.',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q118',
    question: 'As part of your project, you were involved with improving the competencies and interaction of team members to enhance project perform ance. What should you do next?',
    options: [
      'Manage conflicts if they arise',
      'Create organization charts with appropriate position descriptions',
      'Interact with others in the organization in a constructive way to understand politi cal and interpersonal factors',
      'Create a staffing management plan',
    ],
    correctAnswer: 0,
    explanation: 'Develop Project Team is a process to improve the competencies and interaction of team members to enhance project performanc e. In the Manage Project Team process you manage conflicts if they arise. This follows the Develop Project Team process. Organization charts, position descriptions, and networking are tools for the Plan Human Resource Management process. Staffing managemen t plan is an output of the Plan Human Resource Management process. Since the Plan Human Resource Management process precedes the Develop Project Team process, options 2, 3 and 4 are not correct.',
    category: 'Project Resource Management',
    difficulty: 'hard'
  },
  {
    id: 'Q119',
    question: 'You have created an Excel spreadsheet that shows cumulative cost at any particular point of time in the project duration. Your director wants to review the project costs and you decide to make a presentation. Cumulative costs plotted against time is sho wn in the slide as a',
    options: [
      'S-curve',
      'Histogram',
      'Control chart',
      'Pareto diagram',
    ],
    correctAnswer: 0,
    explanation: 'S-curve is a graphic display of cumulative costs, labor hours, percentage of work, or other quantities, plotted against time. The name derives from the S -like shape of the curve.',
    category: 'Project Cost Management',
    difficulty: 'medium'
  },
  {
    id: 'Q120',
    question: 'Which of the following elements of the organizational process assets is necessary to b e updated in the Control Procurements process? A. Procurement audits B. Correspondence C. Payment schedules and requests D. Seller performance evaluation documentation',
    options: [
      'B, C and D',
      'Only B',
      'Only C',
      'All of the above',
    ],
    correctAnswer: 0,
    explanation: 'Elements of the organizational process assets that may be updated include, but are not limited to: correspondence, payment schedules and requests, seller performance evaluation document ation',
    category: 'Project Procurement Management',
    difficulty: 'medium'
  },
  {
    id: 'Q121',
    question: 'As part of your duties as a project manager, you make sensitive company data available to a vendor. In this context, which of the following precautions should you take?',
    options: [
      'Insist that the vendor signs a non -disclosure agreement after you release the sensitive information.',
      'Make sure that the vendor receives all th e sensitive information in time.',
      'Ensure that the vendor signs a non -disclosure agreement before you release the sensitive information.',
      'Monitor the vendor in order to prevent her from sharing the information with her competitor s.',
    ],
    correctAnswer: 2,
    explanation: 'PMI Code of Ethics and Professional Conduct requires a project manager not to disclose sensitive or confidential information. But, at times, an organization has a legitimate need to disclose confiden tial information to vendors, governmental agencies, or others. When disclosing confidential or sensitive information, it is the responsibility of the proj ect manager to ensure that proper nondisclosure agreements are signed prior to the disclosure of the s ensitive information.',
    category: 'Project Communications Management',
    difficulty: 'medium'
  },
  {
    id: 'Q122',
    question: 'In your project, you are coordinating people and resources as well as integrating and performing activities of the project in accordance with the project management plan. This is performed during',
    options: [
      'Initiating Process Group',
      'Executing Process Group',
      'Planning Process Group',
      'Monitoring Process Group',
    ],
    correctAnswer: 1,
    explanation: 'The Executing Pro cess Group consists of those processes performed to complete the work defined in the project management plan to satisfy the project specifications. This Process Group involves coordinating people and resources, managing stakeholder expectations, as well as integrating and performing the activities of the project in accordance with the project management plan.',
    category: 'Project Stakeholder Management',
    difficulty: 'medium'
  },
  {
    id: 'Q123',
    question: 'Ideally, when should a project manager be assigned to a project?',
    options: [
      'As soon as a project is authorized',
      'Soon after the scope statement is finalized',
      'When the WBS is completed',
      'At any time during the project life cycle, depending on requirements Correct Choic e : 1',
    ],
    correctAnswer: 0,
    explanation: 'Justificat ion : Decomposition is a technique used for dividing and subdividing the project scope and project deliverables into smaller, more manageable parts. (Decomposition is done as part of the Create WBS process.)',
    category: 'Project Scope Management',
    difficulty: 'easy'
  },
  {
    id: 'Q125',
    question: 'Critical chain is a schedule network analysis technique that modifies the project schedule to account for limited resources. In this context, the non -work schedule activities that are added in the critical chain method to m anage uncertainty are referred to as',
    options: [
      'Duration buffers',
      'Resource leveling',
      'Reverse resource leveling',
      'Crashing',
    ],
    correctAnswer: 0,
    explanation: 'The critical chain method adds du ration buffers that are non -work schedule activities to manage uncertainty.',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q126',
    question: 'In your project, you are using project files, records, and closed contracts to determine the co st of many categories of resources. This will help you to estimate the cost of the resources needed to complete the project activities. This information is available to you as a part of',
    options: [
      'Activity list',
      'Estimating publications',
      'Historical information',
      'Code of accounts',
    ],
    correctAnswer: 2,
    explanation: 'Historical information: Documents and data on prior projects, including project files, records, correspondence, closed contracts, and closed projects.',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q127',
    question: 'Which of the following statements about "Quality" and "Grade" is correct? A. Grade is a rank given to entities having the same functional use but different technical characteristics. B. Low quality product may be of high grade. C. Low grade product may be of high quality. D. It is a problem if the product is of high quality and low grade.',
    options: [
      'A and B',
      'Only B',
      'All of the Above',
      'A, B and C',
    ],
    correctAnswer: 3,
    explanation: 'Grade is a category assigned to deliverables having the same functional use but different technical characteristics. While a quality level that fails to meet quality requirements is always a problem, low grade may not be.',
    category: 'Project Quality Management',
    difficulty: 'hard'
  },
  {
    id: 'Q128',
    question: 'Which of the following activities does a project manager NOT perform during the Manage Project Team process?',
    options: [
      'To observe and converse to stay in touch with the work and attitudes of project team members',
      'To perform appraisals to clarify roles and responsibilities, develop training plans, etc.',
      'To negotiate for assignment of approp riate project members to the team.',
      'To manage conflicts which leads to increased creativity and better decision making',
    ],
    correctAnswer: 2,
    explanation: 'Option 3 (negotiation) is a tool and technique for the Acquire Projec t Team process. Option 1 (observation and conversation), Option 2 (project performance appraisals) and Option 4 (conflict management) are tools and techniques for the Manage Project Team process.',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q129',
    question: 'Utility function is a commonly used technique to determine risk tolerance levels. Some project managers are more averse to risk than others. Which of the following is NOT a commonl y used classification for risk tolerance?',
    options: [
      'Risk averter',
      'Risk seeker',
      'Risk mitigator',
      'Neutral risk taker',
    ],
    correctAnswer: 2,
    explanation: 'The three commonly used classifications f or risk tolerance are risk averter or avoider, risk taker or seeker and the neutral risk taker (risk averse, risk seeking, risk neutral).',
    category: 'Project Risk Management',
    difficulty: 'medium'
  },
  {
    id: 'Q130',
    question: 'ABC Inc recently signed a contract for nuclear waste disposal from nuclear power plants in your state. During project implementation, some employees of ABC Inc were exposed to a high level of nuclear radiation. ABC Inc now wants to get out of the agreement. The only means for either party to exit the contract is by',
    options: [
      'Getting validation from the U.S. FDA that nuclear waste is dangerous',
      'Determining that the contract violates applicable law',
      'Estab lishing that the company will be under financial difficulties due to labor issues if the project continues',
      'Declaring the contract null and void',
    ],
    correctAnswer: 1,
    explanation: 'Regardless of the document’s complexity, a contract is a mutually binding legal agreement that obligates the seller to provide the specified products, services, or results, and obligates the buyer to compensate the seller. A contract is a legal relationship subject to remedy in the courts. Refere nce: PMBOK® Guide - Fifth Edition, page 377 The only way that either party can get out of a signed contract is if the contract violates applicable law. ABC Inc has not violated the law of the land.',
    category: 'Project Procurement Management',
    difficulty: 'hard'
  },
  {
    id: 'Q131',
    question: 'You are working as a proj ect manager in a company; you get to know that a person managing another project of your company has furnished false reports about his PMP experience and credentials. What should you do in this context?',
    options: [
      'Report violation of the PMP code of c onduct to PMI.',
      'Report violation of the PMP code of conduct to PMI only if found true after verifying the facts.',
      'Report violation of the PMP code of conduct to PMI and then verify the facts.',
      'Report the violation to your manager.',
    ],
    correctAnswer: 1,
    explanation: 'Reporting violations of the PMP code of conduct is one of the primary responsibilities of a project management professional. If and when one gets to know that a violation of the PMP cod e of conduct has occurred, she should verify the facts, if found true, must notify the PMI.',
    category: 'Project Communications Management',
    difficulty: 'medium'
  },
  {
    id: 'Q132',
    question: 'ABC company has recently launched a new model of their car in the market and the market response h as been overwhelming. Sales have gone up to a level much higher than what the company anticipated. To cater to the increased market demand, the company plans to start a project to create a new assembly line for the cars. Who, according to you, is the user for this project?',
    options: [
      'Project manager and project management team',
      'Person who may buy the car in the future',
      'Project sponsor who provides funding',
      'Assembly line worker who is going to work on the new ass embly line being created',
    ],
    correctAnswer: 3,
    explanation: 'Customers are the persons or organizations who will approve and manage the project’s product, service, or result. Users are the persons or organizations who will use the projec t’s product, service, or result.',
    category: 'Project Resource Management',
    difficulty: 'hard'
  },
  {
    id: 'Q133',
    question: 'In the project execution phase, deliverables are produced. While monitoring and controlling project work, you track, review, and regulate the progress to meet the performance objectives. In this context, what is NOT performed in the Monit or and Control Project Work process?',
    options: [
      'Comparing expected project performance against the project plan',
      'Monitoring implementation of approved changes as they occur',
      'Providing information to support status reporting , progress measurement, and forecasting',
      'Providing forecasts to update current cost and current schedule information',
    ],
    correctAnswer: 0,
    explanation: 'The Monitor and Control Project Work process is concerned with comparin g actual project performance against the project management plan.',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q134',
    question: 'Your project is very critical for the company and must be completed within six months. The project charter ha s been signed, but the scope statement is not yet prepared. The management asks you to go ahead with the project without the scope statement being approved. What should you do?',
    options: [
      'Refuse to work on the project, because the management is not fo llowing standard project management practices.',
      'To save time, you should start the project with inputs from the project charter.',
      'Meet the management and explain the problems you may face if you start a project without a scope s tatement.',
      'Escalate the issue to the project sponsor and issue a risk memo.',
    ],
    correctAnswer: 2,
    explanation: 'Option 3: This is the best available alternative. Without the scope statement, you do not have a good understand ing of the project justification, product, or project deliverables and project objectives. Also, you do not have all the inputs for the scope definition and for the creation of work breakdown structure (WBS). The best option is to talk to the management about the problems likely to be faced if you start a project without a scope statement. Option 1: This is an extreme step and is not recommended Option 2: This will pose problems. For example, you will not be able to create a WBS without the help of a scope statement. Option 4: This is an extreme measure and is not recommended.',
    category: 'Project Scope Management',
    difficulty: 'medium'
  },
  {
    id: 'Q135',
    question: 'In which of the following processes is decomposition used as a tool?',
    options: [
      'Define Activities',
      'Sequence Activities',
      'Estimate Activity Resources',
      'Estimate Activity Durations',
    ],
    correctAnswer: 0,
    explanation: 'Decomposition is a tool used in the Define Activities process.',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q136',
    question: 'You have recently taken over a new project. While studying the project information, you find out that cost variances are very severe. To provide a realistic basis for performance measurement, what should you recommend?',
    options: [
      'Issue budget updates',
      'Revise the cost baseline',
      'Adjust schedule activity budget',
      'Close the project',
    ],
    correctAnswer: 1,
    explanation: 'In some cases, cost vari ances can be so severe that a revised cost baseline is needed to provide a realistic basis for performance measurement.',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q137',
    question: 'Which of the following should be determined during the Plan Quality Management process, so the cost of quality will include the number of tests, expected scrap, etc.?',
    options: [
      'Sample frequency',
      'Sample size',
      'Sample time',
      'Sample frequency and Sample size',
    ],
    correctAnswer: 3,
    explanation: 'Sample frequency and sizes should be determined during the Plan Quality Management process, so the cost of quality will include the number of tests, expected scrap, etc.',
    category: 'Project Cost Management',
    difficulty: 'medium'
  },
  {
    id: 'Q138',
    question: 'Ten members were assigned in advance to your project. In this context, which of the following cannot be a reason for this pre-assignment?',
    options: [
      'Specific people were promised as part of a competitive propo sal.',
      'Suitable people volunteered to work on the project.',
      'Staff assignments were defined in the project charter.',
      'The project was dependent on the expertise of the pre -assigned persons',
    ],
    correctAnswer: 1,
    explanation: 'When project team members were selected in advance, they would be considered pre -assigned. This situation could occur if the project was the result of specific people being promised as part of a competitive proposal, if the projec t was dependent upon the expertise of particular persons, or if some staff assignments were defined within the project charter.',
    category: 'Project Procurement Management',
    difficulty: 'easy'
  },
  {
    id: 'Q139',
    question: 'The Plan Risk Responses process helps the pro ject manager to develop options and actions to enhance opportunities and to reduce threats to project objectives. The output from the Plan Risk Responses is updates to the risk register, which should be',
    options: [
      'At the level of detail of work packag es in the WBS',
      'At the level of detail whereby actions can be taken',
      'Able to identify and document residual risks and secondary risks',
      'Used for periodic risk reviews to identify risk ratings and prioritization',
    ],
    correctAnswer: 1,
    explanation: 'The risk register should be written to a level of detail that corresponds with the priority ranking and the planned response. Often, the high and moderate risks are addressed in detail.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q140',
    question: 'The scope of your project is very well defined and you have completed all the work described in the contract to your satisfaction, but you think your buyer is not happy with the work. What shoul d you do?',
    options: [
      'Go through arbitration proceedings to ensure that disputes are resolved',
      'Talk with senior management about changing the scope of the project to accommodate requirements that would satisfy the customer',
      'Ask the customer for input and get her advice on changes that need to be made',
      'Move to contract close -out',
    ],
    correctAnswer: 3,
    explanation: 'As stated in the question, the scope of your project is very well defined, and you have completed all the work described in the contract. You should now move towards contract close -out. Also note that while `you think` that your buyer is not happy, there is no mention of the buyer explicitly stating that she is dissatisfied.',
    category: 'Project Scope Management',
    difficulty: 'medium'
  },
  {
    id: 'Q141',
    question: 'You are managing a team of twenty members; you realize that some of your team members are showing less -than- desirable customer service attitude. In this context, which of the following will be the mo st appropriate action?',
    options: [
      'Warn those team members of the consequences of their attitude.',
      'Inform the senior management about those team members.',
      'Influence those team members to adhere to company expectations about c ustomer service',
      'Replace those team members.',
    ],
    correctAnswer: 2,
    explanation: 'A project manager has a great amount of influence on her team members. It is her responsibility to coach and influence the team members who do not posses right attitudes, to conform to the standards of the conduct expected by her organization.',
    category: 'Project Resource Management',
    difficulty: 'medium'
  },
  {
    id: 'Q142',
    question: 'At the end of the closing process group,',
    options: [
      'It is verified that the defined pro cesses are completed within all the process groups to close the project or project phase.',
      'It is determined that the product will be successful in the market.',
      'The project management plan is written off by the project sponsor.',
      'The new change requests are initiated as required.',
    ],
    correctAnswer: 0,
    explanation: 'The Closing Process Group, when completed, verifies that the defined processes are completed within all of the Process Groups to close th e project or a project phase, as appropriate, and formally establishes that the project or project phase is complete.',
    category: 'Project Integration Management',
    difficulty: 'easy'
  },
  {
    id: 'Q143',
    question: 'You have recently appointed a project manager to handle a critical project in your organization. You want to give her the authority to apply organizational resources to project activities. Which document should you use?',
    options: [
      'Resource authorization document',
      'Work Breakdown Structure',
      'Project charter',
      'Project scope description',
    ],
    correctAnswer: 2,
    explanation: 'The project charter provides the project manager with the authority to plan and execute the project...This understanding will better al low for efficient resources allocation to project activities.',
    category: 'Project Scope Management',
    difficulty: 'medium'
  },
  {
    id: 'Q144',
    question: 'You have undertaken a project under contract, where you are supposed to create an anti -virus software product for a customer in ten months. You follow the software development life -cycle which includes analysis, high -level design, low - level design, coding, testing, and rollout, with a deliverable at the end of each phase. Your customer has defined the scope very well , and said that he is going to review your product after ten months. In this case, you should',
    options: [
      'Insist that the customer verify the deliverables at the end of each phase',
      'Ask your senior management to review the deliverables at the end of each phase to ensure that the deliverables satisfy customer requirements',
      'Complete the product as per specifications and provide the completed product to the customer as requested',
      'Provide project deliverables to the customer at the end of each phase, even if the customer does not review them',
    ],
    correctAnswer: 0,
    explanation: 'The verified deliverables obtained from the Control Quality process are reviewed with the customer or sponsor to ensure that they are completed satisfactorily and have received formal acceptance of the deliverables by the customer or sponsor.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q146',
    question: 'In your project, you have determined the planned quantity of work to be performed. Luckily, a similar project was successfully completed three months ago, and historical information from that project is readily available. To get a cost estimate for your project, you multiply the planned quantity of work in your project with the cost per unit obtained from the previous project. This is a classic example of',
    options: [
      'Analogous estimating',
      'Determining resource cost rates',
      'Bottom -up estimating',
      'Parametric estimating',
    ],
    correctAnswer: 3,
    explanation: 'Parametric estimating uses a statistical relationship between historical data and other variables (e.g., square footage in construction) to calculate a cost estimate fo r project work.',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q147',
    question: 'A flow chart is a diagram, which shows how various elements of a system relate and includes tools like "cause and effect diagrams" and "flowcharting." As a pro ject manager, you find "cause and effect diagrams" a useful tool for',
    options: [
      'Showing the relationship between two variables',
      'Identifying which factors may influence specific variables of a product or process under development or in production',
      'Determining whether or not a process is stable or has predictable performance',
      'Illustrating how various factors might be linked to potential problems or effects',
    ],
    correctAnswer: 3,
    explanation: 'Option 4: This is the correct answer. Cause and effect diagrams, also called Ishikawa diagrams or fishbone diagrams illustrate how various factors might be linked to potential problems or effects.',
    category: 'Project Integration Management',
    difficulty: 'hard'
  },
  {
    id: 'Q148',
    question: 'Your project has two hundred and fifty people from five diff erent countries working to create a software solution to be deployed across fifteen countries. One of your project leads continually misses project deadlines and undermines your authority in front of other team members. In a stakeholder meeting, you want t o settle a particular conflict with this project lead quickly and exert your authority. What conflict management technique would you use?',
    options: [
      'Confronting',
      'Forcing',
      'Withdrawing',
      'Avoiding Correc t Choice : 2',
    ],
    correctAnswer: 2,
    explanation: 'Risks judged to be of low priority are included in a watch list for periodic monitoring.',
    category: 'Project Schedule Management',
    difficulty: 'medium'
  },
  {
    id: 'Q150',
    question: 'A contract which includes features of cost reimbursable and fixed price types of contract is a',
    options: [
      'Fixed price plus incentive fee contract',
      'Cost plus award fee contract',
      'Time and material contract',
      'Cost plus fixed fee contract',
    ],
    correctAnswer: 2,
    explanation: 'Time and material contracts are a hybrid type of contractual arrangements that contain aspects of both cost -reimbursable and fixed -price contracts. Option 1: This type of contract involves fixed -price features which allow for deviation from performance, with financial incentives tied to achieving agreed metrics. Option 2: In this type of contract, the seller is reimbursed for all le gitimate costs, but the majority of the fee is only earned based on the satisfaction of certain broad subjective performance criteria defined and incorporated into the contract. Option 4: In this type of contract, the seller is reimbursed for all allowable costs for performing the contract work, and receives a fixed fee payment calculated as a percentage of the initial estimated project costs.',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q151',
    question: 'You are managing a tea m consisting of members from four different countries; you realize that some cultural differences among your team members are hampering the progress of your project. In this context, what should you do?',
    options: [
      'Conduct team building activities in w hich most of the team members can participate actively.',
      'Train your team members on project objectives.',
      'Train your team members on the broad objectives of your organization.',
      'Provide training to your team members regarding cultural diversities among different countries along with training on project objectives and the company culture.',
    ],
    correctAnswer: 3,
    explanation: 'When working with team members of different countries, to ensure that cultural diversities do not hamper the progress of the project, the project manager must provide training to her team members regarding cultural diversities among various countries, project goals, and the ethics and culture of the company.',
    category: 'Project Resource Management',
    difficulty: 'medium'
  },
  {
    id: 'Q152',
    question: 'You recently joined ABC bank as a project manager. Although the project is within budget and doing well, recently there have been several change requests. The outgoing project manager was using twelve project manageme nt processes during the project execution. Given this information, which of the following could be the most likely cause of frequent change requests?',
    options: [
      'The new project manager was appointed for a very critical project and proper training was not provided.',
      'All stakeholders were not identified.',
      'New methods of communication like email and SMS were not used as part of project communication management.',
      'Very few project management processes were used by t he outgoing project manager.',
    ],
    correctAnswer: 1,
    explanation: 'We should try to find out the reason for the problem. The question clearly states that recently there have been several change requests. The root cause of the problems is th at all stakeholders are not identified. Training (option 1), communication methods (option 3) or the number of project management processes (option 4) cannot be contributing factors to the increase in change requests. However, if some stakeholders are no t identified (option 2), there is a possibility that some requirements of those stakeholders are left out. This is the most important reason for increase in change requests.',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q154',
    question: 'Items at the lowest level of a Work Breakdown Structure are called',
    options: [
      'Work Packages',
      'WBS Dictionaries',
      'Work Components',
      'WBS, Work Components, Work Packages or WBS Dictionaries - depending on the context in which the term is used',
    ],
    correctAnswer: 0,
    explanation: 'The p lanned work is contained within the lowest level of WBS components, which are called work packages.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q155',
    question: 'You are the project manager on a Software Creation Project. If the number of critical paths in the project increases, but the duration of the project remains the same, what should the project manager do?',
    options: [
      'Perform crashing to complete project on time',
      'Fast track the project',
      'Perform addit ional risk planning',
      'Decrease the scope of the project',
    ],
    correctAnswer: 2,
    explanation: 'If the number of critical paths increases in the project, delay in any one of the critical paths has the potential to delay t he proje ct. The risk of the project (in meeting the project schedule) increases; hence additional risk planning has to be performed.',
    category: 'Project Scope Management',
    difficulty: 'medium'
  },
  {
    id: 'Q156',
    question: 'Your project is in the execution stage. NPV of your project is -$200,000 and IRR is 5%. CPI is 1.2 and SPI is 0.8. What is the recommended action?',
    options: [
      'Cancel the project since NPV is negative',
      'Cancel the project since IRR is very low',
      'Crash your project',
      'Try to improve the NPV',
    ],
    correctAnswer: 2,
    explanation: 'Option 3 is the most recommended action. CPI is greater than 1 and SPI is less than 1. Since SPI is less than 1, this means that project is behind schedule; hence it is recommended to crash the project to bring it on schedule. Please note that crashing may increase costs. Since your project has CPI greater than 1, cost will not be a concern. Options 1, 2, and 4 are not recommended actions. NPV and IRR are project selection criteria (selection of projects is done in the initiation stage). Since this project is already in the execution phase, NPV and IRR should not be considered.',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q158',
    question: 'You have recently taken over as project manag er. In your initial meeting, you first notice that there is too much conflict among the project team members, which harms productivity and working relationships. In this context, which of the following would not be a technique you would use to reduce confl ict in your team?',
    options: [
      'Establish team ground rules',
      'Establish group norms',
      'Minimize differences of opinion among team members',
      'Better manage the communication channels',
    ],
    correctAnswer: 2,
    explanation: 'Team ground rules, group norms, and solid project management practices like communication planning and role definition reduce the amount of conflict. When managed properly, differences of opinion can lead to increased creativity and bette r decision making.',
    category: 'Project Schedule Management',
    difficulty: 'medium'
  },
  {
    id: 'Q159',
    question: 'Your company is a pioneer in the construction industry. The government recently floated a tender for setting up a new airport. Since you do not ha ve all the requisite skills within the company, you enter into a joint venture with a leading airport construction company to bid jointly for the government contract. This is an example of',
    options: [
      'Risk exploitation',
      'Risk sharing',
      'Risk enhancing',
      'Risk mitigating',
    ],
    correctAnswer: 1,
    explanation: 'Strategies for positive risks or opportunities (share): Sharing a positive risk involves allocating some or all of the owners hip of the opportunit y to a third party who is best able to capture the opportunity for the benefit of the project. Examples of sharing actions include forming risk -sharing partnerships, teams, special -purpose companies, or joint ventures, which can be established with the exp ress purpose of taking advantage of the opportunity so that all parties gain from their actions.',
    category: 'Project Risk Management',
    difficulty: 'medium'
  },
  {
    id: 'Q160',
    question: 'As a project manager, you have created a document that describes the procurem ent item in sufficient detail to provide a basis for the sellers to determine if they can provide the item. This document is referred to as',
    options: [
      'Statement of work',
      'Contract',
      'Procurement document',
      'Procur ement statement of work',
    ],
    correctAnswer: 3,
    explanation: 'Procurement Statements of Work: The statement of work (SOW) for each procurement is developed from the project scope baseline and defines only that portion of the project scope t hat is to be included within the related contract. The procurement SOW describes the procurement item in sufficient detail to allow prospective sellers to determine if they are capable of providing the products, services, or results. Option 1: Statement of work is a narrative description of products and services to be delivered by the project. Statement of work is provided by the sponsor in case of internal projects, but for external projects, it is provided by the customer. Option 2: Contract is a mutua lly binding agreement that obligates the seller to provide the specified product or service or result and obligates the buyer to pay for it. Option 3: Procurement document is a document utilized in bid and proposal activities, which includes the buyer’s i nvitation for bid, invitation for negotiations, request for information, request for quotation, request for proposal and seller’s responses.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q161',
    question: 'You are a member of the c ommittee which is appointed to oversee the awarding of an important contract in your company. In this context, which of the following cannot be treated as conflict of interest situations?',
    options: [
      'Your friend bids for the contract and you inform the committee and the project sponsor about it.',
      'Your relative bids for the contract and you do not inform the project sponsor about it.',
      'Your close friend bids for the contract and you refrain from participating in the contract aw arding decision process without informing your sponsor.',
      'Your friend bids for the contract and you make sure that the contract is awarded to him.',
    ],
    correctAnswer: 0,
    explanation: 'Conflict of interest arises when personal interests out -weigh professional considerations. A person`s associations and affiliations with others can also lead to conflict of interest. Please note that if there is a conflict of interest situation, inform the appropriate stakeholders and distance y ourself from the conflict situation, if possible.',
    category: 'Project Schedule Management',
    difficulty: 'medium'
  },
  {
    id: 'Q162',
    question: 'Earlier you were working at the helpdesk of ABC company managing a team. Your job primarily involved handling customer queries, analyzing custo mer feedback, and supervising your team. You have recently been re -assigned to a new project involving integration of the helpdesk activities with an ERP (Enterprise Resource Planning) package. This project will improve efficiency in the company and help i n integrating all inter -related activities. In this context, which of the following is not a difference between project work and work at helpdesk?',
    options: [
      'The objective of the project is to meet strategic objectives of the company. The objective of the helpdesk was to sustain the business.',
      'A project has to be planned, executed, and controlled, and it is not so in the case of helpdesk.',
      'As part of the project, you are creating a new information system, but nothing unique w as being created as part of the helpdesk activities.',
      'Unlike a project, helpdesk was an ongoing operational activity.',
    ],
    correctAnswer: 1,
    explanation: 'Helpdesk work is an operational activity. Organizations perform work to achieve a set of objectives. In many organizations, the work performed can be categorized as either project or operations work. These two types of work share a number of characteristics as follows: a. Performed by individuals b. Limited by constraints including resource constraints c. Planned, executed, monitored and controlled Both projects and operations need to be planned, executed, and controlled. However, projects and operations differ primarily in that operations are ongoing and produce repetiti ve products, services, or results. Projects are temporary, and end.',
    category: 'Project Communications Management',
    difficulty: 'hard'
  },
  {
    id: 'Q163',
    question: 'Project Integration Management includes the processes and activities needed to identify, define, combine, unify and coordinate the various processes and project management activities within the Project Management Process Groups. When a project is initiated, one of the processes taken up early on in the project initiation stage is',
    options: [
      'Identify Stakeholders',
      'Define Scope',
      'Plan Human Resource Management',
      'Develop Project Management Plan',
    ],
    correctAnswer: 0,
    explanation: 'Identify Stakeholders is the process of identifying the people, groups, or organizations that could impact or be impacted by a decision, activity, or outcome of the project; and analyzing and documenting relevant information regarding their interests, involvement, interdependencies, influence, and potential impact on project success... It is critical for project success to identif y the stakeholders early in the project or phase and to analyze their levels of interest, their individual expectations, as well as their importance and influence.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q164',
    question: 'Inspection includes activities such as measuring, examining, and testing undertaken to determine whether results conform to requirements. Which of the following terms does not refer to Inspection?',
    options: [
      'Product review',
      'Audit',
      'Walkthrough',
      'Stage -gate',
    ],
    correctAnswer: 3,
    explanation: 'Inspections are sometimes called reviews, product reviews, au dits, and walkthroughs.',
    category: 'Project Quality Management',
    difficulty: 'hard'
  },
  {
    id: 'Q165',
    question: 'Control Schedule is th e process of monitoring the status of the project to update project progress and managing changes to the schedule baseline. During this process, you undertake various activities that allow you to identify any changes, or potential changes to the project sc hedule. In this context, which of the following is NOT true about the Control Schedule process?',
    options: [
      'Project manager determines the current status of the project schedule',
      'Project manager influences the factors that create schedule changes',
      'Project manager takes the anticipated changes through the change control process.',
      'Project manager manages the actual schedule changes as they occur',
    ],
    correctAnswer: 2,
    explanation: 'The Control Sch edule process is concerned with determining the current status of the project schedule, influencing the factors that create schedule changes, determining if the project schedule has changed, and managing the actual changes as they occur.',
    category: 'Project Schedule Management',
    difficulty: 'medium'
  },
  {
    id: 'Q166',
    question: 'Project A has an initial investment of $3 million, out of which $1.5 million has been spent. Project B, which meets the same objectives as project A , requires only $1.6 million for completion. Which project should you select?',
    options: [
      'Project A',
      'Project B',
      'Neither project A nor project B',
      'Both project A and project B',
    ],
    correctAnswer: 0,
    explanation: 'Project A has already spent $1.5 million, the sunk cost, which need not be considered as it has already been incurred and cannot be avoided. So $1.5 million is required to complete project A. However, $1.6 million is required to complete p roject B, so it is better to select project A.',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q167',
    question: 'Your company has implemented ISO standards for quality. In this context, which of the following statements regarding quality is accurate? A. The objective of a quality audit is to compare project deliverables against the product requirements as defined in the WBS. B. Process analysis identifies the needed improvements from an organizational and technical standpoint. C. Control Quality is the proce ss of monitoring and recording results of executing the quality activities to assess performance and recommend necessary changes. D. The Quality management plan describes how the project management team will implement the performing organization`s quality policy.',
    options: [
      'B, C and D',
      'C and D',
      'B and D',
      'A, B and C',
    ],
    correctAnswer: 0,
    explanation: 'A quality audit is a structured, independent process to determine if project activities comply with organizational and project policies, processes, and procedures.',
    category: 'Project Scope Management',
    difficulty: 'medium'
  },
  {
    id: 'Q168',
    question: 'You are the manager of a project, which aims to start 15 more schools in your state. You have to deal wit h several non - government organizations, state agencies, sponsors, and other stakeholders. There are conflicts between stakeholders. In this context, you should know that maximum intensity of conflicts happens due to',
    options: [
      'Personality conflict, co st, and administration',
      'Risk management, status meetings, and Define Scope',
      'Schedules, priorities, and manpower',
      'Administration, technical issues, and procedures',
    ],
    correctAnswer: 2,
    explanation: '',
    category: 'Project Scope Management',
    difficulty: 'medium'
  },
  {
    id: 'Q169',
    question: 'Probability distributions are popular tools of the Perform Quantitative Risk Analysis process. In this context, whi ch of the following statements on probability distributions is not accurate?',
    options: [
      'Beta Distribution is a continuous distribution.',
      'Triangular distribution is a discrete distribution.',
      'Discrete distributions can be used to represent uncertain events such as a possible scenario in a decision tree.',
      'Uniform distributions can be used only if there is no obvious value that is more likely than any other between specified high and low bounds. Correct C hoice : 2',
    ],
    correctAnswer: 3,
    explanation: 'This is the correct answer. Scope baseline describes the need, justification, requirements, and current boundaries for the project. Procurement statement of work for each of the procurements is developed from the project scope baseline . Options 1 and 2: Scope statement describes the project deliverables and the work required to create those deliverables. Work breakdown structure (WBS) is a deliverable -oriented hierarchical decomposition of the work to be executed by the project team to accomplish the project objectives and create the required deliverables. The creation of procurement statement of work does not directly require the scope statement and WBS or the latter alone. Option 3: Contract is a mutually binding agreement that obliga tes the seller to provide the specified product or service or result and obligates the buyer to pay for it. Creation of procurement statement of work does not directly rely on contract.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q171',
    question: 'Your company has been awarded an engineering, procurement and construction (EPC) contract to build a combined -cycle gas turbine (CCGT) plant. You have been assigned to manage this project, but your expertise as a project manager is in the field of information technology. In this context, what should you do?',
    options: [
      'Explain to your senior management about your knowledge and experience.',
      'Ask for adequate training in your new area of operation.',
      'Accept the responsibility and put in your best efforts.',
      'Reject the assignment stating that it is beyond your capabilities and experience.',
    ],
    correctAnswer: 2,
    explanation: 'A project manager must always be truthful while reporting a bout her qualification, experience, background, and past performances to one`s prospective employers, customers, etc. PMI believes that a project manager need not be a subject matter expert, and similar project management skills can be used across differ ent industries.',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q172',
    question: 'You are working as the project manager simultaneously on four (4) projects in your organization, which vary in complexity. In this context, which of the following does not contri bute to the success of the projects?',
    options: [
      'Project Manager must comply with the requirements to meet stakeholders` needs and aspirations',
      'Applying knowledge, skills, and processes uniformly across various projects in your portfolio',
      'Balancing competing needs of time, cost, and quality',
      'Using a defined approach to adapt the product specifications and plans to meet project and product requirements',
    ],
    correctAnswer: 1,
    explanation: 'For any given project, the project manager, in collaboration with the project team, is always responsible for determining which processes are appropriate, and the appropriate degree of rigor for each process.',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q173',
    question: 'You are creating a project charter to formally authorize the project. A project statement of work will be helpful in creation of the charter. In this context, which of the following is NOT a part of project statement of work?',
    options: [
      'Product scope description',
      'Business need',
      'Strategic plan',
      'Project manager name',
    ],
    correctAnswer: 3,
    explanation: 'The project statement of work references product scope description, business need, and strategic plan.',
    category: 'Project Scope Management',
    difficulty: 'easy'
  },
  {
    id: 'Q174',
    question: 'Project scope management includes the processes required to ensure that the project includes all the work require d and only the work required to complete the project successfully. In this context, the project charter plays a very important role because it',
    options: [
      'Provides a list of project deliverables',
      'Provides high -level project description a nd product characteristics',
      'Provides deliverable oriented grouping of work components',
      'Describes the project plan parameters, i.e., quantifiable criteria that must be met for the project to be considered successful',
    ],
    correctAnswer: 1,
    explanation: 'The project charter provides the high -level project description and product characteristics.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q175',
    question: 'In your project, you need to determine how each task is related to other tasks. This will ultimately help you develop the schedule for the project. In which process will you determine these relationships?',
    options: [
      'Define Activities',
      'Estimate Activity Durations',
      'Sequence Activities',
      'Develop Schedule',
    ],
    correctAnswer: 2,
    explanation: 'Sequence Activities is the process of identifying and documenting relationships among the project activities.',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q176',
    question: 'Please refer to the following diagram: What is the Earned Value (EV)?',
    options: [
      '$5,000',
      '$10,000',
      '$11,000',
      '$12,500',
    ],
    correctAnswer: 3,
    explanation: 'Earned Value (EV) = The sum of the approved cost estimates for activities completed during a given period = Estimated cost of work that is completed after day 11 = $5,000 + $5,000 + $5,000 x 0.50 = $12,500 (because Tasks A and B are completed and Task C is 50% complete) Acronym Term Description Formula PV (BCWS) Planned Value (Budgeted Costs for Work Scheduled) Physical work to be scheduled, including the estimated value of the work EV (BCWP) Earned Value (Budgeted Costs for Work Performed) Physical work actually accomplished, including estimated value of this work AC Actual Cost Actual cost of the work completed SV Schedule Variance Negative SV: Behind Schedule Positive SV: Ahead of Schedule EV – PV CV Cost Variance Negative CV: Over Budget Positive CV: Under Budget EV – AC CPI Cost Performance Index Value got for $1 of Actual Cost EV/AC = BAC/EAC SPI Schedule Performance Index Progress as a % of Planned Progress EV/PV',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q177',
    question: 'You are working on a construction project. You gather data regularly on the productivity of several employees and tasks (e.g., concrete poured per hour, length of electrical wiring done by a person per day, etc.). You compare thi s with that of similar projects embodied in your organizational process assets. This is a real life example of',
    options: [
      'Force field analysis',
      'Cost of quality',
      'Benchmarking',
      'Design of experiments',
    ],
    correctAnswer: 2,
    explanation: 'Benchmarking involves comparing actual or planned project practices to those of comparable projects to identify best practices, generate ideas for improvement, and provide a basis for measuring performance.',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q178',
    question: 'In the executing phase of your project, you lose some key resources. Some new people have joined, and you (the project manager) set up a meeting to get the team together. What should be the most important agenda item for this meeting?',
    options: [
      'Discussing team building activities',
      'Inviting the team members to share their past project experiences',
      'Reviewing WBS and responsibilities of all team members',
      'Planning risk responses for existing risks',
    ],
    correctAnswer: 2,
    explanation: 'The most important agenda item for the meeting should be reviewing of WBS to ensure that responsibilities are assigned. Reviewing WBS and responsibilities of all team members helps in establishing clear expectations on acceptable behavior and roles of all team members. Early commitment to clear guidelines decreases misunderstandings and increases productivity.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q179',
    question: 'In your project, you have completed the Identify Risks process to determine which risks may affect the project, and a risk register has been prepared. What should you do NEXT?',
    options: [
      'Risk probability and impact assessment',
      'Avoid, transfer or mitigate negative risks',
      'Exploit, share or enhance opportunities',
      'Risk audits',
    ],
    correctAnswer: 0,
    explanation: 'After the Identify Risks process, the next step is the Perform Qualitative Risk Analysis process. Risk probability and impact assessment is one of the tools and techniques for the Perform Qualitative Risk Analysis process.',
    category: 'Project Risk Management',
    difficulty: 'medium'
  },
  {
    id: 'Q180',
    question: 'The buyer wants to provide a single source contract, but your sponsor tells you that sole source contract would be better for the company. In this context, how do sole source contracts differ from single source contracts?',
    options: [
      'Single source contracts are forms of non -competitive procurements, whereas sole source contracts are forms of competitive procurements.',
      'Single source contracts are forms of competitive procurements, whereas sole source contracts are forms of non - competitive procurements',
      'In single source contracts, you (buyer) contract a seller because he is your preferred seller, whereas in sole source contracts, you (buyer) contract a seller because there are no other sellers for your required procurement item.',
      'Unlike sole source contracts, single source contracts help an organization to save time because they do not involve procurement process before bids or proposals are received.',
    ],
    correctAnswer: 2,
    explanation: 'Options 1 and 2: Both types are forms of non -competitive procurements. Option 3: This is the correct answer. The major difference between single source contracts and sole source contracts — though both are non -competitive forms of procurements — is that in single source contracts, the contract is awarded to a seller because he is the organization’s preferred seller, whereas in sole source contracts, the contract is awarded to a seller because there are no other sellers for the organization’s required procure ment item. Option 4: Sole source contracts also help organizations save time.',
    category: 'Project Procurement Management',
    difficulty: 'medium'
  },
  {
    id: 'Q181',
    question: 'You and your sponsor are discussing the financial benefits of selecting between two similar projects - project A and project B. When evaluating the projects, you realize that project A will cause some amount of short -term environmental damage but minimal l ong-term environmental problems. In this context, what will be the best course of action?',
    options: [
      'Explain to your senior management about the potential environmental damage caused by project A and persuade them to discard the project.',
      'Select the project A as there is only low probability of causing long -term environmental damage.',
      'Try to find solutions to the environmental damage that may occur in the future because of project A.',
      'Undertake the project A but try to minimize the environmental damage, if any.',
    ],
    correctAnswer: 0,
    explanation: 'Project managers, while making decisions regarding a project, should preferably select a project with no(or minimal) negative impact on the environment, community and society.',
    category: 'Project Risk Management',
    difficulty: 'hard'
  },
  {
    id: 'Q182',
    question: 'Which of the following statements relating to product -oriented processes and project management processes is accurate?',
    options: [
      'Product -oriented processes are defined in the project management life cycle',
      'Product -oriented processes help in creating the project`s product',
      'Project management processes rarely interact with product -oriented processes',
      'Project management processes apply globally but to certain industry groups',
    ],
    correctAnswer: 1,
    explanation: 'Product -oriented processes specify and create the project`s product.',
    category: 'Project Integration Management',
    difficulty: 'medium'
  },
  {
    id: 'Q183',
    question: 'A new project manager has been appointed to manage a project which was terminated six months earlier because of funding related issues. The project manager wants to find out the exact reasons for the termination of the project. He also wants to know which deliverables were produced from the terminated project. Which of the following document(s) should the project manager refer to?',
    options: [
      'Final product, service, or result transition',
      'Project files',
      'Historical information',
      'Project closure documents',
    ],
    correctAnswer: 3,
    explanation: 'If the project was terminated prior to completion, the formal documentation indicates why the project was terminated and formalizes the procedures for the transfer of the finished and unfinished deliverables of the cancelled project to others.',
    category: 'Project Risk Management',
    difficulty: 'medium'
  },
  {
    id: 'Q184',
    question: 'In your project, you are working with your customer to formalize acceptance of the completed project deliverables. This is done as part of',
    options: [
      'Planning',
      'Executing',
      'Monitoring and Controlling',
      'Initiating',
    ],
    correctAnswer: 2,
    explanation: 'Validate Scope is the process of formalizing acceptance of the completed project deliverables. This process belongs to the Monitoring and Controlling Process Group.',
    category: 'Project Scope Management',
    difficulty: 'medium'
  },
  {
    id: 'Q185',
    question: 'You are the project manager on a research project. You have received the news that your shipment of supplies will be delayed by two weeks due to bad weather. What will be your FIRST step?',
    options: [
      'Fast track the project to ensure that the project schedule is not delayed.',
      'Determine how much float is available in that task.',
      'Try to get additional supplies from an alternate location as soon as possible.',
      'Take corrective action to minimize the impact of delay.',
    ],
    correctAnswer: 1,
    explanation: 'Before you take corrective measures, determine the impact of the delay in shipment. For example, if the task has 3 weeks float, you need not resort to options 1, 3, or 4.',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q186',
    question: 'Please refer to the following diagram: What is the status of the project?',
    options: [
      'Behind schedule, Under budget',
      'Ahead of schedule, Under budget',
      'Ahead of schedule, Over budget',
      'Behind schedule, Over budget',
    ],
    correctAnswer: 2,
    explanation: 'Earned value (EV) = The sum of the approved cost estimates for activities completed during a given period = Estimated cost of work that is completed after day 11 = $5,000 + $5,000 + $5,000 x 0.50 = $12,500 (because Task A, Task B are complete, Task C is 50% complete) Planned value(PV) = Planned work to be completed after day 11 = $5,000 + $5,000 + $5,000 x (1/5) (because at end of day 11, according to our plan, Task A, Task B should be complete; Task C only one day out of 5 days should be complete, i.e., 20% complete ($ 1,000 of work should be done)) = $11,000 Actual cost (AC) = Actual Cost of work completed = $13,000 Schedule variance (SV) = EV - PV = $12,500 - $11,000 = $1,500 Since SV is positive, we are ahead of schedule. Cost variance (CV) = EV - AC = $12 ,500 - $13,000 = - $500 Since CV is negative, we are over budget. Acronym Term Description Formula PV (BCWS) Planned Value (Budgeted Costs for Work Scheduled) Physical work to be scheduled, including the estimated value of the work EV (BCWP) Earned Value (Budgeted Costs for Work Performed) Physical work actually accomplished, including estimated value of this work AC Actual Cost Actual cost of the work completed SV Schedule Variance Negative SV: Behind Schedule Positive SV: Ahead of Schedule EV – PV CV Cost Variance Negative CV: Over Budget Positive CV: Under Budget EV – AC CPI Cost Performance Index Value got for $1 of Actual Cost EV/AC = BAC/EAC SPI Schedule Performance Index Progress as a % of Planned Progress EV/PV',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q196',
    question: 'Please refer to the following diagram: You know that current variances are atypical, i.e., similar variances will not occur in the future. What is the Estimate at Completion (EAC)?',
    options: [
      '$15,000',
      '$20,000',
      '$20,500',
      '$22,000',
    ],
    correctAnswer: 2,
    explanation: 'Earned Value (EV) = The sum of the approved cost estimates for activities completed during a given period = Estimated cost of work that is completed after day 11 = $5,000 + $5,000 + $5,000 x 0.50 = $12,500 (because Tasks A and B are complete, Task C is 50% complete) Actu al Cost (AC) = Actual Cost of work completed = $13,000 Budget at Completion (BAC) = Budget for the full project = $5,000(Task A) + $5,000(Task B) + $5,000(Task C) + $5,000(Task D) = $20,000 Estimate at completion (EAC) assuming that current variance s are atypical = AC + (BAC - EV) = $13,000 + ($20,000 - $12,500) = $13,000 + $7,500 = $20,500 Acronym Term Description Formula PV (BCWS) Planned Value (Budgeted Costs for Work Scheduled) Physical work to be scheduled, including the estimated value of the work EV (BCWP) Earned Value (Budgeted Costs for Work Performed) Physical work actually accomplished, including estimated value of this work AC Actual Cost Actual cost of the work completed SV Schedule Variance Negative SV: Behind Schedule Positive SV: Ahead of Schedule EV – PV CV Cost Variance Negative CV: Over Budget Positive CV: Under Budget EV – AC CPI Cost Performance Index Value got for $1 of Actual Cost EV/AC = BAC/EAC SPI Schedule Performance Index Progress as a % of Planned Progress EV/PV',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q187',
    question: 'You are the project manager of a car manufacturing company. You understand that there are costs associated with improvement in quality parameters. To justify costs required to improve quality, you find out the incremental increase in benefits for an increm ental improvement in quality. This is an example of',
    options: [
      'Parkinson`s law',
      'Learning Curve theory',
      'Marginal analysis',
      'Maslow`s hierarchy of needs',
    ],
    correctAnswer: 2,
    explanation: 'Marginal analysis balances the additional benefits from an action against the additional cost. It is an acknowledgement that decisions should be made based on the incremental gains and losses that result from a decision.',
    category: 'Project Cost Management',
    difficulty: 'medium'
  },
  {
    id: 'Q188',
    question: 'While working on the project, you set realistic (and challenging) targets. This is because you know that if extra time is provided, "Work expands so as to fill the time available for its completion." This is also referred to as',
    options: [
      'Herzberg`s Motivation Theory',
      'Learning Curve Theory',
      'Theory Y',
      'Parkinson`s law',
    ],
    correctAnswer: 3,
    explanation: 'Parkinson`s law states that work expands so as to fill the time available for its completion or in brief, "work expands to fi ll the time available."',
    category: 'Project Resource Management',
    difficulty: 'easy'
  },
  {
    id: 'Q189',
    question: 'In your project, you identified disaster situations (e.g. floods, earthquakes, etc.) as potential risks. The project sponsor suggested that, at the project level, no steps could be taken to deal with such risks and recommended creation of a contingency r eserve (with 5% of the project budget) which could be used in case of disaster situations. This is an example of',
    options: [
      'Risk mitigation',
      'Risk acceptance',
      'Risk avoidance',
      'Bad policy decision',
    ],
    correctAnswer: 1,
    explanation: 'Accept: Risk acceptance is a risk response strategy whereby the project team decides to acknowledge the risk and not take any action unless the risk occurs. This strategy is adopted where it is not possible or cost -effective to address a specific risk in a ny other way. This strategy indicates that the project team has decided not to change the project management plan to deal with a risk, or is unable to identify any other suitable response strategy... The most common active acceptance strategy is to establi sh a contingency reserve, including amounts of time, money, or resources to handle the risks.',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q190',
    question: 'In your company, you have a practice of preparing your own estimates of the items to be procured or services to be availed. This helps you conduct procurements to select seller. This can also be referred to as',
    options: [
      'Preferred price',
      'Independent Estimate.',
      'Fixed price contract',
      'Careful cost budgeting',
    ],
    correctAnswer: 1,
    explanation: 'Option 2: For many procurement items, the procuring organization may elect to either prepare its own independent estimate, or have an estimate of costs prepared by an outside professional estimator, to serve as a benchmark on proposed responses. Significan t differences in cost estimates can be an indication that the procurement statement of work was deficient, ambiguous, and/ or that the prospective sellers either misunderstood or failed to respond fully to the procurement statement of work. Options 1 and 4 : The answers provided in these options do not refer to the practice of preparing independent estimates of the items to be procured or services to be availed. Option 3: Fixed -price contracts involve setting a fixed price for defined product or service to b e provided.',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q191',
    question: 'Your company asks you to manage a project of its subsidiary unit in another country. You quickly realize that workers in the subsidiary unit have poor work ethics as compared with that of your parent company. In this context, which of the following will be the most appropriate course of action?',
    options: [
      'Ask your new team to emulate the work ethics of the teams of your parent company.',
      'Take steps to change the work culture of your new team.',
      'Regard your new team as lazy and impose sanctions.',
      'Treat it as cultural differences, and try to determine ways to improve productivity.',
    ],
    correctAnswer: 3,
    explanation: 'The PMI Code of Ethics and Professional Conduct requires a project manager to address things with an open mind and accept the cultural and ethical diversity that exists between different countries. So, it is not the responsibility of the pr oject manager to enforce the work -ethics of one`s own country on the people of another country.',
    category: 'Project Risk Management',
    difficulty: 'medium'
  },
  {
    id: 'Q192',
    question: 'Your construction company recently secured a project to build a new overpass on Interstate 10. You have been appointed as project manager for the assignment. Your company has successfully executed similar projects in the past, and you would like to refer t o the past project documents. At what stage of the project should this be done FIRST?',
    options: [
      'Executing',
      'Initiating',
      'Planning',
      'Monitoring and Controlling',
    ],
    correctAnswer: 1,
    explanation: 'Organizational Process Assets is an input to Develop Project Charter (which is in the Initiating Process Group).',
    category: 'Project Integration Management',
    difficulty: 'medium'
  },
  {
    id: 'Q193',
    question: 'Your project involves creating a launch vehicle for NASA satellites. For successful project implementation, it is important t o coordinate activities with other NASA operational groups and also divide your project into several phases to provide better manag ement control. To facilitate this, you should (select the BEST answer)',
    options: [
      'Break the project into several sub -projects.',
      'Use life cycle approach to manage the project.',
      'Develop specific deliverables, which are approved by the sponsor.',
      'Create a very comprehensive project charter.',
    ],
    correctAnswer: 1,
    explanation: 'A project life cycle is the series of phases that a project passes through from its initiation to its closure.',
    category: 'Project Integration Management',
    difficulty: 'hard'
  },
  {
    id: 'Q194',
    question: 'You are the project manager of a software company involved in creating an anti -virus software product. You are in the execution phase of the project when you realize that a requirement was not included in the product. This is due to an omission in defining the scope baseline of the project. What should you do?',
    options: [
      'Issue a change request',
      'Take corrective action',
      'Add the requirements to your product and continue with execution',
      'Take defect repair action',
    ],
    correctAnswer: 0,
    explanation: 'Analysis of scope performance can result in a change request to the scope baseline or other components of the project management plan.',
    category: 'Project Scope Management',
    difficulty: 'medium'
  },
  {
    id: 'Q195',
    question: 'A project manager intends to identify and document interactivity dependencies. Which of the following inputs can the project manager use for this purpose? A. Project scope statement B. Activity list C. Project schedule D. Activity attributes',
    options: [
      'B, C and D',
      'A, C and D',
      'A, B and D',
      'A, B and C',
    ],
    correctAnswer: 2,
    explanation: 'Activity list, activity attributes, milestone list, project scope statement are some of the inputs for the Sequence Activitie s process.',
    category: 'Project Scope Management',
    difficulty: 'medium'
  },
  {
    id: 'Q196',
    question: 'Please refer to the following diagram: You know that current variances are atypical, i.e., similar variances will not occur in the future. What is the Estimate at Completion (EAC)?',
    options: [
      '$15,000',
      '$20,000',
      '$20,500',
      '$22,000',
    ],
    correctAnswer: 2,
    explanation: 'Earned Value (EV) = The sum of the approved cost estimates for activities completed during a given period = Estimated cost of work that is completed after day 11 = $5,000 + $5,000 + $5,000 x 0.50 = $12,500 (because Tasks A and B are complete, Task C is 50% complete) Actual Cost (AC) = Actual Cost of work completed = $13,000 Budget at Completion (BAC) = Budget for the full project = $5,000(Task A) + $5,000(Task B) + $5,000(Task C) + $5,000(Task D) = $20,000 Estimate at completion (EAC) assuming that current variances are atypical = AC + (BAC - EV) = $13,000 + ($20,000 - $12,500) = $13,000 + $7,500 = $20,500 Acronym Term Description Formula PV (BCWS) Planned Value (Budgeted Costs for Work Scheduled) Physical work to be scheduled, including the estimated value of the work EV (BCWP) Earned Value (Budgeted Costs for Work Performed) Physical work actually accomplished, including estimated value of this work AC Actual Cost Actual cost of the work completed SV Schedule Variance Negative SV: Behind Schedule Positive SV: Ahead of Schedule EV – PV CV Cost Variance Negative CV: Over Budget Positive CV: Under Budget EV – AC CPI Cost Performance Index Value got for $1 of Actual Cost EV/AC = BAC/EAC SPI Schedule Performance Index Progress as a % of Planned Progress EV/PV',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q197',
    question: 'In your pharmaceutical company, quality is an important criterion to determine project success. Which of the following is not an example of cost of nonconformance?',
    options: [
      'Training',
      'Rework',
      'Loss of reputation',
      'Warranty',
    ],
    correctAnswer: 0,
    explanation: 'Cost of quality: A method of determining the costs incurred to ensure quality. Prevention and appraisal costs (cost of conformance) include costs for quality planning, quality control (QC), and quality assurance to ensure compliance to requirements (i.e., training, QC systems, etc.). Failure costs (cost of nonconformance) include costs to rework products, components, or processes that are non -compliant, costs of warranty work and waste, and loss of reputation.',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q198',
    question: 'You are promoted to a new role in your company to replace someone who recently retired. To be an effective leader, which of the following should you do FIRST?',
    options: [
      'Enroll in appropriate training programs',
      'Understand all the leadership theories',
      'Find out your strong and weak areas',
      'Take advice from the person who retired from the company',
    ],
    correctAnswer: 2,
    explanation: '(Option 3) Finding out your strong and weak areas helps determine how you can do the job better and become an effective leader. This may also result in identifying the needed training programs. Therefore, option 1(enroll in appropriate training programs) a nd option 2 (learning all leadership theories) are not recommended. Option 4 (Taking advice from the person who retired from the company) is recommended, but this can be done after determining your strong and weak areas.',
    category: 'Project Integration Management',
    difficulty: 'medium'
  },
  {
    id: 'Q199',
    question: 'While doing a cost -benefit analysis, you determine that a new project has 60% probability of earning a profit of $1,000,000 or 30% probability of incurring a loss of $500,000. What is the expected monetary value of the decision?',
    options: [
      '$400,000',
      '$600,000',
      '$450,000',
      '$200,000',
    ],
    correctAnswer: 2,
    explanation: 'Expected monetary value (EMV) analysis is a statistical concept that calculates the average outcome when the future includes scenarios that may or may not happen (i.e. analysis under uncertainty). The EMV of opportunities are generally expressed as positiv e values, while those of threats are expressed as negative values... EMV for a project is calculated by multiplying the value of each possible outcome by its probability of occurrence and adding the products together.',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q200',
    question: 'The buyer has clearly specified that only companies that have revenues greater than $300 million and profitability of more than $30 million over the past 3 years can bid for the contract. This can also be referred to as',
    options: [
      'Procurement negotiation',
      'Source selection criteria',
      'Independent estimate',
      'Make or buy analysis',
    ],
    correctAnswer: 1,
    explanation: 'Source Selection Criteria: Selection criteria are often included as a part of the procurement documents. Such criteria are developed and used to rate or score seller proposals, and can be objective or subjective.',
    category: 'Project Cost Management',
    difficulty: 'hard'
  }
];

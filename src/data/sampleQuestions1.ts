import { Question } from '../types/question';

export const sampleQuestions: Question[] = [
  {
    id: 'Q1',
    question: 'You are working as a project manager in ABC company. Your company decides to select a vendor for a specific requirement and invites bids from vendors. After the bidders conference, one of the vendors gifts you a watch stating that it is his country`s culture to offer a gift to new acquaintances. In this context, what should you do?',
    options: [
      'Accept the gift regardless of your company`s policy.',
      'Act as per the norms of your company regarding accepting gifts.',
      'Reject the gift.',
      'Accept the gift and inform your senior management.',
    ],
    correctAnswer: 1,
    explanation: 'The PMI Code of Ethic and Professional Conduct requires a project management professional to respect different cultures and customs, yet it mandates one to follow the policies of one`s company at all costs. So, respecting the culture of another country must not supersede the policies of one`s organization.',
    category: 'Project Risk Management',
    difficulty: 'medium'
  },
  {
    id: 'Q2',
    question: 'As a project manager, you understand the importance of identifying and documenting project risks. In this context, which of the following statements is true?',
    options: [
      'Risk identification occurs during the Planning of the project',
      'Risk identification occurs during Monitoring and Controlling of the project',
      'Risk identification occurs during Execution of the project',
      'Risk identification occurs during different project stages depending on the type of the project',
    ],
    correctAnswer: 0,
    explanation: 'Risk identification is done as part of the Planning Process Group.',
    category: 'Project Risk Management',
    difficulty: 'easy'
  },
  {
    id: 'Q3',
    question: 'Your customer wants some change to be effected in the project scope. You determine that the change in scope will not impact the project schedules but will cost the project an additional $50,000. What should you do FIRST?',
    options: [
      'Try crashing or fast tracking the project.',
      'Do not allow the customer to change the project scope.',
      'Let the customer know about the impact of the change in project scope and ask for additional funding.',
      'Discuss with your project sponsor.',
    ],
    correctAnswer: 3,
    explanation: 'The different steps that should be followed when a change is requested are as follows: a) Evaluate the impact of the change within the team. b) Be proactive. If the change can have negative impact on the project, try to influence the factors that cause change, so that only approved changes are implemented. c) Communicate the impact of the change to the project sponsor and the customer. d) Take the project through the change control process by getting approval from the project customer, project sponsor, and other stakeholders. Also, please note that additional funding is always provided by the project sponsor (not the project customer), and that changes are usually approved or rejected by the change control board. e) Get adequate resourc es required to implement the change. f) Implement the changes. Please note that you have completed the first step, i.e. you have evaluated the impact of the change. Option 1: Crashing or fast tracking is not recommended, because the project schedule i s not impacted by the change. Crashing or fast tracking may decrease the project schedule but increase costs, which is not desirable. Option 2: The project manager cannot stop the customer from requesting changes. Option 3: You should inform the customer a bout the changes but cannot ask for additional funding, because funding is always provided by the sponsor. Option 4 is the best choice in the given situation.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q4',
    question: 'In your project, the process of monitoring the status of the project and pr oduct scope and managing changes to the scope baseline is referred to as',
    options: [
      'Validate Scope',
      'Control Scope',
      'Define Scope',
      'Collect Requirements',
    ],
    correctAnswer: 1,
    explanation: 'Control Scope is the process of monitoring the status of the project and product scope and managing changes to the scope baseline.',
    category: 'Project Scope Management',
    difficulty: 'easy'
  },
  {
    id: 'Q5',
    question: 'In your project, you wish to include certain significant events in the milestone list for the project based on historical information. Such milestones are',
    options: [
      'Optional',
      'Mandatory',
      'Statutory',
      'Authorized',
    ],
    correctAnswer: 0,
    explanation: 'A milestone list identifies all milestones and indicates whether the milestone is mandatory, such as those specified by contract, or optional, such as those based upon historical information.',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q6',
    question: 'Please refer to the following diagram: You know that current variances are atypical, i.e., similar variances will not occur in future. What is the cost performance index (CPI) for the project?',
    options: [
      '0.96',
      '1.04',
      '1.00',
      '1.20',
    ],
    correctAnswer: 0,
    explanation: 'Earned value (EV) = The sum of the approved cost estimates for activities completed during a given period = estimated cost of work that is completed after day 11 = $5,000 + $5,000 + $5,000 x 0.50 = $12,500 (because Task A, Task B are complete, Task C is 50% complete) Actual cost (AC) = actual cost of work completed = $13,000 Cost performance index (CPI) = EV / AC = $12,500 / $13,000 = 0.96 Acronym Term Description Formula PV (BCWS) Planned Value (Budgeted Costs for Work Scheduled) Physical work to be scheduled, including the estimated value of the work EV (BCWP) Earned Value (Budgeted Costs for Work Performed) Physical work actually accomplished, including estimated value of this work AC Actual Cost Actual cost of the work completed SV Schedule Variance Negative SV: Behind Schedule Positive SV: Ahead of Schedule EV – PV CV Cost Variance Negative CV: Over Budget Positive CV: Under Budget EV – AC CPI Cost Performance Index Value got for $1 of Actual Cost EV/AC = BAC/EAC SPI Schedule Performance Index Progress as a % of Planned Progress EV/PV',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q7',
    question: 'You are working as a project manager in an IT company. Your project is facing major difficulties in the quality of its deliverables and you are getting recurring problems. The project sponsor has insisted that no compromise can be made in the quality of the deliverables. In this context, if the problem persist s, the BEST option you would choose as a project manager to remedy the problem is to',
    options: [
      'Allow increase in cost of quality but ensure that the root cause of the problem is fixed',
      'Reduce the project scope to increase project quality',
      'Fix a problem as soon as it occurs',
      'Prevent change requests to ensure quality',
    ],
    correctAnswer: 0,
    explanation: 'Cost of Quality includes all costs incurred over the life of the product by investment in preventing non -conformance to requirements, appraising the product or service for conformance to requirements, and failing to meet requirements (rework). Here, cost of quality is increased and measures are taken to control the recurrence of the problem.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q8',
    question: 'Motivating your team members is important for the success of the project. You understand from the HR manager that employees are motivated by self -esteem, recognition, and self-actualization. To which theory is the HR manager referring?',
    options: [
      'Theory Y',
      'Learning curve theory',
      'Herzberg`s theory',
      'Maslow`s theory',
    ],
    correctAnswer: 3,
    explanation: 'Abraham Maslow`s hierarchy of needs states that different people are at different levels in the need hierarchy. Usually people start out looking for physiological needs and then progressively move up the needs hierarchy.',
    category: 'Project Resource Management',
    difficulty: 'hard'
  },
  {
    id: 'Q9',
    question: 'You work for a company which executes heavy engineering contracts. While performing risk response planning for your project, you determine a risk that there is a "Possibility of getting new orders in the future which are beyond the current capacity of our production facilities." What should you do?',
    options: [
      'Classify this as a threat and create workaround plans.',
      'Classify this as strength and create a fallback plan.',
      'Classify this as a weakness and transfer it to another company.',
      'Classify this as an opportunity and exploit the opportunity.',
    ],
    correctAnswer: 3,
    explanation: 'Strategies for positive risks or opportunities are... exploit, share, enhance, and accept.',
    category: 'Project Risk Management',
    difficulty: 'hard'
  },
  {
    id: 'Q10',
    question: 'Your company (buyer) has entered into a few contracts recently that have not been successfully implemented. Your sponsor calls for a meeting to determine what should be the overall goal while you negotiate contracts. In this context, what should be t he most important objective of a contract?',
    options: [
      'Protect the interests of the project',
      'Ensure that negotiation is conducted as per legal statutes',
      'Negotiate for the best price and protect interests of the buyer',
      'Objective could vary depending on the type of contract',
    ],
    correctAnswer: 0,
    explanation: 'It is the project management team`s responsibility to make certain that all procurements meet the specific needs of the project while adhering to organizational procurement policies.',
    category: 'Project Procurement Management',
    difficulty: 'medium'
  },
  {
    id: 'Q11',
    question: 'You have been asked by your company to manage a project in a foreign country. You must obtain a license for starting your project, but realize that acquiring this license will take two weeks - this may lead to unnecessary delays and cost overruns. One of your team members informs that she can get the license in two days by paying an additional fee of $ 100. In this context, y ou should',
    options: [
      'Ask your team member to get the license as early as possible by paying an additional fee.',
      'Wind up the project and move to another country.',
      'Obtain the license through the normal path without paying additional fee, and inform your senior management about the impending delay.',
      'Proceed with the project work without the required license.',
    ],
    correctAnswer: 0,
    explanation: 'Fees are ethical and can be paid if required.',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q12',
    question: 'Which of the following statements about stakeholders are correct? A. Project manager must try to satisfy even the implicit requirements of stakeholders. B. Only those stakeholders who are project team members should be involved in the creation of project plan. C. Both stated and unstated needs of stakeholders should be properly identified. D. Some stakeholders may provide conflicting requirements.',
    options: [
      'B, C and D',
      'A, C and D',
      'Only C',
      'Only D',
    ],
    correctAnswer: 1,
    explanation: 'The project team seeks input and encourages involvement from all stakeholders when planning the project and developing the project management plan and project documents.',
    category: 'Project Resource Management',
    difficulty: 'medium'
  },
  {
    id: 'Q13',
    question: 'The project charter has been developed, and the project has been formally authorized. A full -time project manager is appointed for the project. There is clarity about the business needs, high -level project description, and product requirements that the project is to address. A summary budget has also be en approved. Given this information, what activity should the project manager perform FIRST from the available options?',
    options: [
      'Lead and perform the work defined in the project management plan and implement approved changes to achieve the project`s objectives.',
      'Define, prepare, and coordinate all subsidiary plans and integrate them into a comprehensive project management plan.',
      'Track, review, and report the progress to meet the performance objectives defined in the project management plan.',
      'Review all change requests, approve changes, and manage changes to the deliverables, organizational process assets, project documents, and the project management plan and communicating their disposition.',
    ],
    correctAnswer: 1,
    explanation: 'The question states that the project charter has been created. This should be followed by Develop Project Management Plan process as defined in option 2.',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q14',
    question: 'Which of the following is not an accepted form for the WBS structure?',
    options: [
      'Using phases of the project life cycle as the second level of decomposition, with the product and project deliverables inserted at the third level.',
      'Using major deliverables as the second level of decomposition.',
      'Using work packages as the first level of decomposition.',
      'Incorporating subcomponents which may be developed by organizations outside the project team, such as contracted work.',
    ],
    correctAnswer: 2,
    explanation: 'The WBS structure can be represented in a number of forms, such as: using phases of the project life cycle as the second level of decomposition, with the product and project deliverables inserted at the third level, using major deliverables as the second level of decomposition, and incorporating subcomponents which may be developed by organizations outside the project team, such as contracted work.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q15',
    question: 'In the Control Schedule process, changes to project schedule can result in change requests to',
    options: [
      'Schedule baseline',
      'Components of project plan',
      'Activity attributes',
      'Schedule baseline and/or components of project plan',
    ],
    correctAnswer: 3,
    explanation: 'Schedule variance analysis along with review of progress reports, results of performance measures and modifications to the project scope or project schedule may result in change requests to the schedule baseline, and/or to other components of the project plan.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q16',
    question: 'In your project, you estimate the cost of individual activities or work packages, and then roll up the individual estimates for subsequent reporting and tracking purposes. This can be done using',
    options: [
      'Bottom -up estimating',
      'Analogous estimating',
      'Parametric modeling',
      'Top-down estimating',
    ],
    correctAnswer: 0,
    explanation: 'Bottom -up estimating is a method of estimating a component of work. The cost of individual work packages or activities is estimated to the greatest level of specified detail. The detailed cost is then summarized or "rolled up" to higher levels for subsequent reporting and tracking purposes.',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q17',
    question: 'From a project management perspective, which of the following BEST describes quality attributes?',
    options: [
      'They are the quality criteria that are to be met mandatorily.',
      'They provide a basis for judging a project`s success or failure.',
      'They provide a basis for determining how effectively performing organization supports the project.',
      'They are the specific characteristics for which a project`s product is designed and tested.',
    ],
    correctAnswer: 3,
    explanation: 'Quality is "the degree to which a set of inherent characteristics fulfil requirements".',
    category: 'Project Quality Management',
    difficulty: 'medium'
  },
  {
    id: 'Q18',
    question: 'As a project manager, you are aware that the best way to resolve conflicts is to face the conflict directly. This involves a problem solving approach, whereby affected parties work through their disagreements. In this context, the sources of conflict with the least intensity are',
    options: [
      'Schedule, priorities, and manpower',
      'Cost, personality conflict, and administration',
      'Technical issues, administration, and manpower',
      'Cost, schedules, and priority',
    ],
    correctAnswer: 1,
    explanation: 'The sources of conflicts and their intensity can be shown by the following diagram:',
    category: 'Project Schedule Management',
    difficulty: 'medium'
  },
  {
    id: 'Q19',
    question: 'Being a diligent project manager, you understand the importance of identifying all project risks which can then be prioritize d using the Perform Qualitative and Quantitative Risk Analysis. In this context, which of the following tools and techniques can be used for the Identify Risks process?',
    options: [
      'Documentation reviews, brainstorming, root cause analysis, and checklist analysis',
      'Assumptions analysis, risk probability and impact assessment, interviewing, and Delphi technique',
      'Expected monetary value, root cause analysis, influence diagrams, and documentation reviews',
      'Contingent response strategies, assumptions analysis, influence diagrams, and Delphi technique',
    ],
    correctAnswer: 0,
    explanation: 'Option 1: This is the correct answer as it has all the tools and techniques which are used for the Identify Risks process. Option 2: Risk probability and impact assessment – this is used for the Perform Qualitative Risk Analysis process. Option 3: Expected monetary value – this is used for the Perform Quantitative Risk Analysis process. Option 4: Contingent response strategies – this is used in the Plan Risk Re sponses process.',
    category: 'Project Risk Management',
    difficulty: 'hard'
  },
  {
    id: 'Q20',
    question: 'Which of the following activities would you not perform during the Close Procurements process?',
    options: [
      'Perform a structured review of processes from plan purchases and acquisitions through contract closure.',
      'Perform procurement performance reviews to determine seller`s progress to deliver project scope and quality, within cost and on schedule, as compared to the contract.',
      'Identify successes and failures that warrant recognition to prepare or administer procurement contracts in the future.',
      'Use procurement audits as a technique.',
    ],
    correctAnswer: 1,
    explanation: 'Option 2: Procurement performance reviews are conducted in the Control Procurements process.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q21',
    question: 'While managing a crucial project for your company, your sponsor reprimands you for not including an additional feature, beyond the project scope, which could have provided "customer delight". In this context, you should',
    options: [
      'Resign from the p roject.',
      'Give precedence to project and organizational objectives.',
      'Complain against the sponsor to the customer.',
      'Add the new feature to the product as requested by the sponsor.',
    ],
    correctAnswer: 1,
    explanation: 'The PMI code of ethics and professional conduct mandates a project manager to maintain her professional demeanor at all times. Also, the project manager should always try to uphold project and organizational objectives. Option 1 and Option 3 are extreme measures, which can be taken at a later point of time, if the situation cannot be remedied. Option 4 is "gold plating" which is not recommended by PMI.',
    category: 'Project Scope Management',
    difficulty: 'easy'
  },
  {
    id: 'Q22',
    question: 'Which of the following statements about stakeholders is INCORRECT?',
    options: [
      'Stakeholders may exert influence over the project.',
      'Stakeholders` responsibilities remain stable throughout the project life cycle.',
      'Some stakeholders benefit from a successful project.',
      'Identifying stakeholders can be difficult.',
    ],
    correctAnswer: 1,
    explanation: 'Stakeholders have varying levels of responsibility and authority when participating on a project. This level can change over the course of the project`s life cycle.',
    category: 'Project Integration Management',
    difficulty: 'medium'
  },
  {
    id: 'Q23',
    question: 'While managing a project for a manufacturing company, you receive a change request from the customer for a minor alteration to the product configuration. In this context, which of the following is NOT a step you would take next?',
    options: [
      'Evaluate the impact of the change',
      'Examine other options',
      'Seek approval from change control board',
      'Reject the change request as this would change the product configuration',
    ],
    correctAnswer: 3,
    explanation: 'Requests for a change can be direct or indirect, externally or internally initiated, and can be optional or legally/contractually mandated and can include corrective action, preventive action, defect repair, and updates.',
    category: 'Project Integration Management',
    difficulty: 'hard'
  },
  {
    id: 'Q24',
    question: 'A baseline is the approved time-phased plan (for a project, a WBS, a work package, or a schedule activity), plus or minus approved changes. In this context, any modifications to the agreed project scope baseline are due to',
    options: [
      'Change requests',
      'Performance reports',
      'Project management plan updates',
      'Project document updates',
    ],
    correctAnswer: 0,
    explanation: 'Analysis of scope performance can result in a change request to the scope baseline or other components of the project management plan.',
    category: 'Project Scope Management',
    difficulty: 'medium'
  },
  {
    id: 'Q25',
    question: 'You are the project manager overseeing construction of a resort on prime oceanfront property in New York. When you estimate costs for your project, you should also closely coordinate that with',
    options: [
      'Define Activities',
      'Estimate Activity Durations',
      'Estimate Activity Resources',
      'Sequence Activities',
    ],
    correctAnswer: 2,
    explanation: 'The Estimate Activity Resource process is closely coordinated with the Estimate Costs process.',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q26',
    question: 'In your project, you use a hierarchical structure of resources by resource category and resource type to develop resource - limited schedules. This hierarchical structure is also called as',
    options: [
      'Project hierarchy',
      'Organization hierarchy',
      'Resource breakdown structure',
      'Project breakdown structure',
    ],
    correctAnswer: 2,
    explanation: 'Resource Breakdown Structure (RBS) is a hierarchical representation of resources by category and type.',
    category: 'Project Resource Management',
    difficulty: 'medium'
  },
  {
    id: 'Q27',
    question: 'You have successfully completed a project and the customer is happy with the product. From a project management perspective, when a service or a product meets customer expectations, it means that',
    options: [
      'Cost of quality is low',
      'Project is on budget',
      'Cost of quality is high',
      'Quality is achieved',
    ],
    correctAnswer: 3,
    explanation: 'Quality refers to "the degree to which a set of inherent characteristics fulfill requirements."',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q28',
    question: 'As individuals and/or organizations get more experienced at a task, they usually become more efficient at it. The more times a task has been performed, the less time will be required for subsequent iterations. This is an example of',
    options: [
      'Theory X',
      'Organizational process assets',
      'Learning curve',
      'Economics of scale',
    ],
    correctAnswer: 2,
    explanation: 'Learning curve theory states that as individuals and/or organizations get more experienced at a task, they usually become more efficient at it. The more times a task is performed, the less time will be required for subsequent iterations.',
    category: 'Project Integration Management',
    difficulty: 'easy'
  },
  {
    id: 'Q29',
    question: 'Careful and explicit risk management planning ensures possibility of success of the other risk management processes. In this context, you use sensitivity analysis to',
    options: [
      'Determine which risks may affect the project',
      'Determine which risks have the most potential impact on the project',
      'Define how risk management processes will be performed',
      'Define how to conduct risk management activities for a project',
    ],
    correctAnswer: 1,
    explanation: 'Sensitivity analysis helps to determine which risks have the most potential impact on the project.',
    category: 'Project Risk Management',
    difficulty: 'medium'
  },
  {
    id: 'Q30',
    question: 'In the Close Procurements process, you are responsible to complete each project procurement to support the Close Project or Phase process. In this context, the final equitable settlement of all outstanding issues, claims, and disputes by negotiation is done through',
    options: [
      'Procurement Negotiations',
      'Procurement audits',
      'Litigation',
      'Negotiated settlement',
    ],
    correctAnswer: 3,
    explanation: 'Option 4: `Negotiated settlement` is a process of reaching final equitable settlement of all outstanding issues, claims, and disputes through negotiation. Option 1: Procurement Negotiations clarify the structure, requirements, and other terms of the purchase so that mutual agreement can be reached prior to signing the contract. Procurement Negotiations is a tool and techni que for the Conduct Procurement process. Option 2: Procurements audit is a structured review of the procurement process originating from the Plan Procurement Management process through the Control Procurements. Option 3: Litigation in the courts is the l east desirable option.',
    category: 'Project Procurement Management',
    difficulty: 'hard'
  },
  {
    id: 'Q31',
    question: 'Your company has awarded a contract to a vendor. After some time, you realize that the vendor representative is your old buddy from school. You inform this to your senior management, but they insist that you continue to administer the contract. So, to avoid any accusations of bias in this conflict of interest situation, you should',
    options: [
      'Document all the decisions taken by you on the activities performed by the vendor.',
      'Refrain from administering the contract.',
      'Resign from the project.',
      'Remind your senior management of conflict of interest.',
    ],
    correctAnswer: 0,
    explanation: 'In case of conflict of interest situations, the project manager should inform senior management, and distance oneself from the conflict of interest situation, if possible. However, in this context, as the senior management insists and the project manager has to continue in the current position, appropriate documentation can help in preventing any accusation of bias in conflict of interest situations. Option 2 and Option 4 are not relevant - you had already mentioned about the conflict of interest situati on to the senior management and got approval to continue with the project. Option 3 is an extreme step which need not be taken at this time.',
    category: 'Project Risk Management',
    difficulty: 'hard'
  },
  {
    id: 'Q32',
    question: 'Project initiation consists of processes that facilitate the formal authorization to start a new project or a project phase. In this context, which of the following is not performed during project initiation?',
    options: [
      'Create the project charter',
      'Divide large or complex projects into phases',
      'Involve customers and stakeholders',
      'Create project scope statement',
    ],
    correctAnswer: 3,
    explanation: 'Project Scope Statement is created after project initiation.',
    category: 'Project Scope Management',
    difficulty: 'medium'
  },
  {
    id: 'Q33',
    question: 'As a project manager, what should be your objective while managing change requests?',
    options: [
      'Maintenance of an issue log for change requests',
      'Ignoring change requests from external stakeholders',
      'Prevention of unnecessary changes',
      'Keeping the sponsors informed of all the change requests',
    ],
    correctAnswer: 2,
    explanation: 'The Monitoring and Controlling Process Group also involves...: Influencing the factors that could circumvent integrated change control or configuration management so only approved changes are implemented.',
    category: 'Project Integration Management',
    difficulty: 'hard'
  },
  {
    id: 'Q34',
    question: 'The project scope statement consists of the product scope description and project deliverables. It also defines the',
    options: [
      'Scope Baseline',
      'WBS',
      'Product acceptance criteria',
      'WBS dictionary',
    ],
    correctAnswer: 2,
    explanation: 'The detailed project scope statement, either directly, or by reference to other documents, includes the following: product scope description, acceptance criteria, deliverables, project exclusions, constraints and assumptions.',
    category: 'Project Scope Management',
    difficulty: 'medium'
  },
  {
    id: 'Q35',
    question: 'As the project manager of a project intended to mask stench from a gas pipeline, you create the following Network Schedule Diagram (duration in weeks): What is the effect on the project if the duration of task J is increased to 9 weeks?',
    options: [
      'No effect since task J is not on the critical path',
      'Risk of the project will further increase',
      'The overall time -frame required to complete the project will increase by 1 week',
      'Project has to be fast tracked or crashed to prevent delay',
    ],
    correctAnswer: 1,
    explanation: 'Please refer to the following diagram and calculation: If the duration of task J is increased by 1 week, Start→ G→ I→ J→ End = 23 weeks; this also lies on the critical path (23 weeks). Since there are 3 critical paths now, a delay in any of the critical paths will delay the overall project; this increases the overall risk to the project.',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q36',
    question: 'Which of the following may not be included in the organizational process assets that influence the Estimate Costs process?',
    options: [
      'Historical information',
      'Government regulations',
      'Lessons learned',
      'Cost estimating policies',
    ],
    correctAnswer: 1,
    explanation: 'The organizational process assets that influence the Estimate Costs process include, but are not limited to:  Cost estimating policies  Cost estimating templates  Historical information, and  Lessons learned.',
    category: 'Project Cost Management',
    difficulty: 'medium'
  },
  {
    id: 'Q37',
    question: 'As a project manager, you use fishbone diagram to analyze the root cause of a problem. This is performed in which of the following process?',
    options: [
      'Plan Quality Management',
      'Verify Scope',
      'Control Quality',
      'Perform Quality Assurance',
    ],
    correctAnswer: 2,
    explanation: 'Control Quality is the process of monitoring and recording results of executing the quality activities to assess performance and recommend necessary changes. A fishbone diagram or Ishikawa diagram, generally known as Cause and Effect diagram, is one of the tools and techniques of Control Quality process. It illustrates how various factors might be linked to potential problems or effects.',
    category: 'Project Scope Management',
    difficulty: 'medium'
  },
  {
    id: 'Q38',
    question: 'Which of the following is not a conflict resolution mode you can use to resolve conflicts in your project?',
    options: [
      'Collaborate or Problem Solve',
      'Smooth or Accommodate',
      'Withdraw or Avoid',
      'Force or Direct',
    ],
    correctAnswer: 3,
    explanation: 'Conflict Resolution Modes Conflict Mode Description Collaborate or Problem Solve  Usually, the best way to resolve conflicts is to face the conflict directly with a cooperative attitude and an open dialogue to work through disagreements resulting in consensus and commitment.  Results in a Win -Win outcome Compromise or Reconcile  At times, there is bargaining and searching for solutions that bring som e partial or temporary degree of satisfaction to parties in a dispute with a “give and take” attitude.  Results in a Lose -Lose outcome Smooth or Accommodate  Sometimes you may de -emphasize or avoid areas of difference and emphasize areas of agreement in order to maintain relationships.  Results in a L se-Yield outcome Force or Direct  If you have the authority and have to settle conflicts quickly, you can also exert y our viewpoint at the expense of the viewpoints of others.  Results in a Win -Lose outcome Withdraw or Avoid  At times, when you do not have all the information or when things are getting out of hand, you may retreat or withdraw from a potential disagreement.  Results in a Lose -Leave outcome',
    category: 'Project Risk Management',
    difficulty: 'medium'
  },
  {
    id: 'Q39',
    question: 'Which of the following is used to classify critical stakeholders on a project as a “manage closely” approach?',
    options: [
      'Identify Stakeholders',
      'Plan Stakeholder Management',
      'Stakeholder Analysis',
      'Plan Communications Management',
    ],
    correctAnswer: 2,
    explanation: 'During the Identify Stakeholders process, stakeholder analysis is a technique used to gather and analyze information to determine the project stakeholders. This technique includes the classification of stakeholders. The Power/Interest Grid is one model which can be used for this purpose. Stakeholders who have a high level of authority (power) and high level of concern (in terest) regarding the project outcomes, fall into the “Manage Closely” quadrant of the Power/Interest Grid (please refer PMBOK® Guide Fifth Edition, page 397, figure 13 -4).',
    category: 'Project Stakeholder Management',
    difficulty: 'hard'
  },
  {
    id: 'Q40',
    question: 'In your project, you use a specific set of processes and automation tools to manage contract and procurement documentation. This is referred to as',
    options: [
      'Claims administration',
      'Project documents',
      'Records management system',
      'Procurement document package',
    ],
    correctAnswer: 2,
    explanation: 'Option 3: This is the correct answer. Records management technique is a technique used in the Control Procurements and the Close Procurements processes. Options 1 and 4: These are irrelevant to the context stated in the question. Option 2: Project documents contain complete supporting records for administration of the procurement processes.',
    category: 'Project Procurement Management',
    difficulty: 'hard'
  },
  {
    id: 'Q41',
    question: 'You have received a lucrative offer (with double the salary) to manage a project involving construction of a bridge. But you realize that this assignment is much more complex compared to other projects you have managed in the past and you believe that you may not be able to complete this project successfully. In this context, you should',
    options: [
      'Decline the offer.',
      'Accept the offer and carry out the project to the best of your abilities.',
      'Explain the situation to the project sponsor and ask her to provide you with training to take up PMP certification.',
      'Ask the sponsor to assign a project lead to help you, who is an expert in managing complex bridge projects and can be accountable for the tasks.',
    ],
    correctAnswer: 0,
    explanation: 'As per the PMI code of ethics and professional conduct, a project manager should always be truthful while reporting about his qualifications, experience, past performance, etc. to his potential employers, customers, etc. Option 1: The project manager should not take up assignments if he is not competent enough to complete them successfully Option 2: This may be unethical because the question states that the project manager believes that he cannot complete the project successfully. Option 3: Training may help but this option does not show that the project manager will be successful in handling the project after the training. Option 4: This is unethical. The project manager should be accountable and should n ot shift responsibility of the project to another person.',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q42',
    question: 'The project manager of a critical project in your company has to go on leave and you have to take up his responsibility. In the project briefing, the outgoing project manager tells you that the scope statement for the project has been documented, WBS has been created by subdividing the major project deliverables into smaller, more manageable components and an activity list has been prepare d. What should you do NEXT?',
    options: [
      'Create Schedule Network Diagrams',
      'Identify important project stakeholders',
      'Create the project management plan',
      'Create the project deliverables',
    ],
    correctAnswer: 0,
    explanation: 'Project Schedule Network Diagrams are graphical representation of the logical relationships among the project schedule activities. This is done after the activity list is created.',
    category: 'Project Scope Management',
    difficulty: 'medium'
  },
  {
    id: 'Q43',
    question: 'As a project manager, your key responsibility is to',
    options: [
      'Prevent changes in the project',
      'Manage project core teams` appraisal',
      'Perform project integration and uphold the project`s interest',
      'Maintain good relationship with vendors',
    ],
    correctAnswer: 2,
    explanation: 'In the project management context, integration includes characteristics of unification, consolidation, communication, and integrative actions that are crucial to controlled project execution through completion, successfully managing stakeholder expectations, and meeting requirement s.',
    category: 'Project Stakeholder Management',
    difficulty: 'hard'
  },
  {
    id: 'Q44',
    question: 'In your project, you are creating documents that will define the product or report status on product completion. These can also be referred to as',
    options: [
      'Project documents',
      'Project management plan',
      'Scope baseline',
      'Scope management plan',
    ],
    correctAnswer: 0,
    explanation: 'Project documents that may be updated as a result of the Validate Scope process include any documents that define the product or report status on product completion.',
    category: 'Project Scope Management',
    difficulty: 'easy'
  },
  {
    id: 'Q45',
    question: 'You are a project manager working on a $3 billion plan to revitalize unused parts of a city. You are in charge of building an Observation deck/Topiary garden. You have created the following diagram (duration in weeks): What is the slack of task G?',
    options: [
      '0 weeks',
      '1 week',
      '-1 week',
      'Cannot be determined',
    ],
    correctAnswer: 0,
    explanation: 'Please refer to the following diagram and calculation that follows it: START→ G→ I→ C→ D→ END: 23 weeks lies on the critical path. So, slack of task G = 0',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q46',
    question: 'You note that the ability to influence the cost of a project is',
    options: [
      'Greatest at the early stages of the project',
      'Greatest at the middle of the project',
      'Greatest at the project closure stage',
      'Constant throughout the project',
    ],
    correctAnswer: 0,
    explanation: 'The ability to influence cost is greatest at the early stages of the project, making early scope definition critical.',
    category: 'Project Scope Management',
    difficulty: 'easy'
  },
  {
    id: 'Q47',
    question: 'You are a project manager. During the quality audit, you find out that the team members have committed a number of minor mistakes. To determine whether the process is in control, the most helpful tool you use is',
    options: [
      'Ishikawa diagram',
      'Pareto chart',
      'Bar chart',
      'Control chart',
    ],
    correctAnswer: 3,
    explanation: 'Control chart is the BEST tool here as, in this process, the appropriate data is collected and analyzed to indicate the quality status of project processes and products. Control charts illustrate how a process behaves overtime and when a process is subject to special cause variation, resulting in an out -of-control c ondition.',
    category: 'Project Quality Management',
    difficulty: 'easy'
  },
  {
    id: 'Q48',
    question: 'According to Maslow`s hierarchy of needs, economic security is a',
    options: [
      'Physiological need',
      'Safety need',
      'Social need',
      'Self-esteem need',
    ],
    correctAnswer: 1,
    explanation: '',
    category: 'Project Resource Management',
    difficulty: 'medium'
  },
  {
    id: 'Q49',
    question: 'As a project manager, you would identify risks in which of the following processes?',
    options: [
      'Identify Risks',
      'Plan Risk Management and Identify Risks',
      'Identify Risks and Control Risks',
      'Perform Qualitative Risk Analysis and Control Risks',
    ],
    correctAnswer: 2,
    explanation: 'Identify Risks is the process of determining which risks may affect the project and documenting their characteristics. Control Risks is the process of implementing risk response plans, tracking identified risks, monitoring residual risks, identifying new risks, and evaluating risk process effectiveness throughout the project.',
    category: 'Project Risk Management',
    difficulty: 'hard'
  },
  {
    id: 'Q50',
    question: 'At times, a contract can be terminated early (before contract completion). Which of the following cases can lead to contract termination? A. Mutual agreement of both parties B. Default of one party C. Convenience of the seller, if they cannot deliver as per the contract statement of work D. Convenience of t he buyer, if provided for in the contract',
    options: [
      'A, B and C',
      'Only A and B',
      'A, B and D',
      'All of the Above',
    ],
    correctAnswer: 2,
    explanation: 'Early termination of contract is a special case of procurement closure that can result from mutual agreement by both parties, from the default of one party, or for convenience of the buyer if provided for in the contract.',
    category: 'Project Schedule Management',
    difficulty: 'medium'
  },
  {
    id: 'Q51',
    question: 'You have recently taken over a project from another project manager, who left the company. You realize that the project is behind schedule and over budget, but the senior management is unaware of this fact. In this context, what should you do FIRST?',
    options: [
      'Do not continue to manage the project.',
      'Update the management with the status of the project.',
      'Bring the project on schedule and then inform the management about the status of the project.',
      'Do crashing and fast -tracking of the project.',
    ],
    correctAnswer: 1,
    explanation: 'As per the PMI Code of Ethics and Professional Conduct, a project manager should always provide true account of information in an appropriate manner at appropriate times. Option 1: This is an extreme step and should not be taken now Option 2: This is the co rrect answer, the management should be informed about the project status. Option 3: This is unethical - you should not withhold information from appropriate stakeholders. Option 4: Crashing would further increase costs and fast -tracking may increase risks : this may adversely impact the project status, and should be done only after informing the management.',
    category: 'Project Schedule Management',
    difficulty: 'medium'
  },
  {
    id: 'Q52',
    question: 'A project team member informs you that a particular task is taking much more time than what was budgeted. You are surprised because you, as a project manager, had not anticipated this delay, and you ask for status reports and forecasts from all project team members. Which process group are you in?',
    options: [
      'Initiating',
      'Executing',
      'Monitoring and Controlling',
      'Planning',
    ],
    correctAnswer: 2,
    explanation: 'Control Communications is the process of monitoring and controlling communications throughout the entire project life cycle to ensure the information needs of the project stakeholders are met.',
    category: 'Project Communications Management',
    difficulty: 'easy'
  },
  {
    id: 'Q53',
    question: 'Develop Project Charter is the process of developing a document that formally authorizes a project or a phase and documenting initial project requirements. In this context, which of the following statements relating to Business Need and Business Case for a project is correct?',
    options: [
      'Business Case is referenced in the statement of work',
      'Business Case usually includes the cost benefit analysis for the project',
      'Business Need is an output of the Create Project Charter process',
      'Business Need arises only because of market demand or technology changes',
    ],
    correctAnswer: 1,
    explanation: 'Typically, the business need and the cost -benefit analysis are contained in the business case to justify the project.',
    category: 'Project Cost Management',
    difficulty: 'medium'
  },
  {
    id: 'Q54',
    question: 'In your project, you are now interested in determining the cause of variance relative to the scope baseline and deciding whether corrective action is required. You should use',
    options: [
      'Configuration management system',
      'Variance analysis',
      'Re-planning',
      'Earned value spreadsheets',
    ],
    correctAnswer: 1,
    explanation: 'Variance analysis is a technique for determining the cause and degree of difference between the baseline and actual performance.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q55',
    question: 'You are a principal at an architecture firm which has made you the Project Manager in charge of building four new apartment and office towers on a larger waterfront construction. The project has a critical path of twenty -three weeks. What is the impact on the duration of the critical path if the man agement wants you to complete the project in twenty weeks?',
    options: [
      'Increases by three weeks.',
      'Decreases by three weeks.',
      'Remains the same.',
      'Cannot be determined.',
    ],
    correctAnswer: 2,
    explanation: 'Duration of critical path = 23 weeks If the management wants to complete the project in twenty weeks, then the project float will be: 20 - 23 = -3 weeks The project float compares the critical path with an externally imposed date and may be negative. You may be forced to fast track or perform crashing to ensure that the project is completed on time as required by the management. There will be no change to the critical path.',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q56',
    question: 'In your project, you want to define variance thresholds at the designated time points over the duration of a project. So, you should use',
    options: [
      'Units of measure',
      'Precision level',
      'Organizational procedure links',
      'Control thresholds',
    ],
    correctAnswer: 3,
    explanation: 'Control thresholds: Variance thresholds for monitoring cost performance may be specified to indicate an agreed -upon amount of variation to be allowed before some action needs to be taken. Thresholds are typically expressed as percentage deviations from the baseline plan.',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q57',
    question: 'The explicit and implicit customer requirements that should be captured as part of your project can be referred to as',
    options: [
      'Quality',
      'Activity',
      'Voice of the customer',
      'Quality attributes',
    ],
    correctAnswer: 2,
    explanation: 'Voice of the Customer. A planning technique used to provide products, services, and results that truly reflect customer requirements by translating those customer requirements into the appropriate technical requirements for each phase of project product development.',
    category: 'Project Quality Management',
    difficulty: 'hard'
  },
  {
    id: 'Q58',
    question: 'Frequent heated discussions with your colleague over an issue are creating a hostile environment. To ease this situation, you agree with your colleague`s point of view. The conflict resolution mode that you are using is',
    options: [
      'Collaborate or Problem Solve',
      'Withdraw or Avoid',
      'Force or Direct',
      'Smooth or Accommodate',
    ],
    correctAnswer: 1,
    explanation: 'Conflict Resolution Modes Conflict Mode Description Collaborate or Problem Solve  Usually, the best way to resolve conflicts is to face the conflict directly with a cooperative attitude and an open dialogue to work through disagreements resulting in consensus and commitment.  Results in a Win -Win outcome Compromise or Reconcile  At times, there is bargaining and searching for solutions that bring som e partial or temporary degree of satisfaction to parties in a dispute with a “give and take” attitude.  Results in a Lose -Lose outcome Smooth or Accommodate  Sometimes you may de -emphasize or avoid areas of difference and emphasize areas of agreement in order to maintain relationships.  Results in a Lose -Yield outcome Force or Direct  If you have the authority and have to settle conflicts quickly, you can also exert y our viewpoint at the expense of the viewpoints of others.  Results in a Win -Lose outcome Withdraw or Avoid  At times, when you do not have all the information or when things are getting out of hand, you may retreat or withdraw from a potential disagreement.  Results in a Lose -Leave outcome',
    category: 'Project Risk Management',
    difficulty: 'medium'
  },
  {
    id: 'Q60',
    question: 'Your contract is nearing completion when the buyer mentions that there are some outstanding issues - this can be a potential dispute or conflict situation. In this context, what is the best way to deal with a dispute in a contract?',
    options: [
      'Negotiation',
      'Change request',
      'Arbitration including mediation or alternative dispute resolution methods',
      'Litigation in courts',
    ],
    correctAnswer: 0,
    explanation: 'In all procurement relationships, the final equitable settlement of all outstanding issues, claims, and disputes by negotiation is a primary goal. Whenever settlement cannot be achieved through direct negotiation, some form of alternative dispute resolution (ADR) including mediation or arbitration may be explored. When all else fails, litigation in the courts is the least desirable option.',
    category: 'Project Procurement Management',
    difficulty: 'hard'
  },
  {
    id: 'Q61',
    question: 'In your project, there is a necessity to use a certain technology that will save you time and money, but the required technology is patented. After extensive research, you determine that use of any other technology is not feasible. In this context, you should',
    options: [
      'Use the required technolo gy and pay the royalties later.',
      'Try to develop another technology in -house through extensive research.',
      'Pay the royalty and obtain written permission of the owner to use the technology.',
      'Use the technology with little modifications to avoid patent related issues.',
    ],
    correctAnswer: 2,
    explanation: 'Patented technology can be used only after obtaining written permission of the owner, and after payment of appropriate royalties.',
    category: 'Project Risk Management',
    difficulty: 'medium'
  },
  {
    id: 'Q62',
    question: 'What are the basic types of phase -to-phase relationships?',
    options: [
      'Sequential and concurrent',
      'Iterative and sequential',
      'Sequential and overlapping',
      'Overlapping and iterative',
    ],
    correctAnswer: 2,
    explanation: 'There are two basic types of phase -to-phase relationships. They are sequential relationships and overlapping relationships.',
    category: 'Project Integration Management',
    difficulty: 'easy'
  },
  {
    id: 'Q63',
    question: 'For a new project manager, who has never managed a project before, it is BEST to rely on which of the following to improve chances of project success?',
    options: [
      'Advice from the outgoing project manager',
      'Your project management training',
      'Historical information',
      'Intuition',
    ],
    correctAnswer: 2,
    explanation: 'Historical information and lessons learned information are transferred to the lessons learned knowledge base for use by future projects or phases. This can include information on issues and risks as well as techniques that worked well that can be applied to future projects. The outgoing manager may or may not have the complete information but all relevant information is stored as part of the historical documents',
    category: 'Project Communications Management',
    difficulty: 'medium'
  },
  {
    id: 'Q64',
    question: 'You would like to use decomposition for dividing and subdividing the project scope and project deliverables into smaller, more manageable parts. Which of the following statements about decomposition is incorrect?',
    options: [
      'All deliverables have similar levels of decomposition.',
      'The project team needs to seek a balance between too little and too much in the level of WBS planning detail.',
      'The decomposition of the upper level WBS components requires subdividing the work for each of the deliverables or subprojects into its fundamental components.',
      'Decomposition is done as part of Create WBS process.',
    ],
    correctAnswer: 0,
    explanation: 'Different deliverables can have different levels of decomposition.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q65',
    question: 'You are a Project Manager in charge of building a school that will open next month in the middle of a state -funded housing project. In your project, you are reviewing and maintaining realistic start and finish dates for project activities. This sho uld be done as part of',
    options: [
      'Sequence Activities',
      'Estimate Activity Durations',
      'Develop Schedule',
      'Define Activities',
    ],
    correctAnswer: 2,
    explanation: 'Developing an acceptable project schedule is often an iterative process. It determines the planned start and finish dates for project activities and milestones. Schedule development can require the review and revision of the duration estimates and resource estimates to create an approved project schedule that can serve as a baseline to track progress.',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q66',
    question: 'In your project, if the benefit cost ratio is greater than 1, it means that',
    options: [
      'The ratio of profits to cost is greater than 1.',
      'The ratio of revenue to cost is greater than 1.',
      'You should select this project from all other competing alternatives.',
      'You should not select this project from all other competing alternatives.',
    ],
    correctAnswer: 1,
    explanation: ' Benefit Cost Ratio (BCR) = Benefits (or Payback or Revenue)/ Costs  Project Selection Criterion: Select project with higher BCR  BCR > 1 means that benefits (i.e. expected revenue) is greater than the cost. Hence, it is beneficial to do the project. Example: There are 2 projects. Project A has an investment of $500,000 and a BCR of 2.5. Project B has an investment of $300,000 and a BCR of 1.5. Using Benefit Cost Ratio criterion, which project will you select? Answer: Project A will be selected. The fact that project B ha s a smaller investment than project A will not impact the selection. Please note that option 3 and 4 are not valid, because you do not know about other competing alternatives. The competing alternatives may have a greater benefit cost ratio than this pro ject.',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q67',
    question: 'Recently, there have been quality related problems in your project and your sponsor has asked you to work on improving the quality parameters. In this context, which of the following statements about quality parameters is correct? A. Customer satisfaction refers to understanding and managing expectations so that customer requirements are met. B. Customer satisfaction is a combination of conformance to requirements and fitness for use. C. Quality should be planned and built in - not inspected in. D. Cost of preventing mistakes is generally higher than cost of correcting them.',
    options: [
      'A and C',
      'B and C',
      'Only C',
      'A, B and C',
    ],
    correctAnswer: 3,
    explanation: 'One of the fundamental tenets of modern quality management states that quality is planned, designed, and built in - not inspected in. The cost of preventing mistakes is generally much lower than the cost of correcting them when they are found during inspection.',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q68',
    question: 'A conflict resolution technique that emphasizes areas of agreement is also called',
    options: [
      'Collaborate or Problem Solve',
      'Force or Direct',
      'Compromise or Reconcile',
      'Smooth or Accommodate',
    ],
    correctAnswer: 3,
    explanation: 'Conflict Resolution Modes Conflict Mode Description Collaborate or Problem Solve  Usually, the best way to resolve conflicts is to face the conflict directly with a cooperative attitude and an open dialogue to work through disagreements resulting in consensus and commitment.  Results in a Win -Win outcome Compromise or Reconcile  At times, ther e is bargaining and searching for solutions that bring some partial or temporary degree of satisfaction to parties in a dispute with a “give and take” attitude.  Results in a Lose -Lose outcome Smooth or Accommodate  Sometimes you may de -emphasize or avoid areas of difference and emphasize areas of agreement in order to maintain relationships.  Results in a Lose -Yield outcome Force or Direct  If you have the authority and have to settle conflicts quickly, you can also exert y our viewpoint at the expense of the viewpoints of others.  Results in a Win -Lose outcome Withdraw or Avoid  At times, when you do not have all the information or when things are getting out of hand, you may retreat or withdraw from a potential disagreement.  Results in a Lose -Leave outcome',
    category: 'Project Risk Management',
    difficulty: 'medium'
  },
  {
    id: 'Q69',
    question: 'You are the project manager for the construction of a shopping mall. As the location is prone to earthquakes, you plan to construct a building that is resistant to earthquakes. This is an example of',
    options: [
      'Risk mitigation',
      'Risk transfer',
      'Risk avoidance',
      'Risk acceptance',
    ],
    correctAnswer: 0,
    explanation: 'Risk mitigation implies a reduction in the probability and/or impact of an adverse risk to be within acceptable threshold limits.',
    category: 'Project Risk Management',
    difficulty: 'medium'
  },
  {
    id: 'Q70',
    question: 'You are the buyer for a procurement contract and your team is receiving bids or proposals for evaluation. These will be evaluated during',
    options: [
      'Conduct Procurements process',
      'Plan Procurement Management process',
      'Control Procurements process',
      'Select Sellers process',
    ],
    correctAnswer: 0,
    explanation: 'Conduct Procurements is the process of obtaining seller responses, selecting a seller, and awarding a contract. In this process, the team will receive bids or proposals and will apply previously defined selection criteria to select one or more sellers who are qualified to perform the work and acceptable as a seller.',
    category: 'Project Procurement Management',
    difficulty: 'hard'
  },
  {
    id: 'Q71',
    question: 'You have been working on a project for the last six months. Your management lets you know that you will receive an incentive of $ 5,000, if you complete the project one month ahead of schedule. When closing the project ahead of schedule, your team informs you that the product contains a minor flaw and may not fully satisfy the customer`s needs. However, rectification of the minor flaw will require a lot of changes and take 2 more months. In this conte xt, you will',
    options: [
      'Close out the project.',
      'Review the situation with your customer and sponsor.',
      'Rectify the flaw and then close out the project.',
      'Close the project and then inform the sponsor about the flaw.',
    ],
    correctAnswer: 1,
    explanation: 'Option 2: Since this is a "minor flaw," but rectification of that flaw would take a long time, it is better to discuss with t he sponsor and customer and get their inputs Option 1 and Option 4: This is unethical - the project manager should definitely complete the project as per the specifications before closing the project. Option 3: Rectification of a minor flaw can lead to delay of 2 months in the project: so, the project manager should first inform the sponsor and customer before rectification of the flaw.',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q72',
    question: 'You are in the process of developing the project charter. Which of the following forms the basis for the Develop Project Charter process?',
    options: [
      'Project Charter',
      'Project Statement of Work',
      'Deliverables',
      'Project Management Plan',
    ],
    correctAnswer: 1,
    explanation: 'Project Statement of Work is a narrative description of products, services, or results to be delivered by the project. It is an input to Develop Project Charter process.',
    category: 'Project Integration Management',
    difficulty: 'medium'
  },
  {
    id: 'Q73',
    question: 'A project management plan should be realistic so that it can be used to manage a project successfully. Which of the following is the BEST method to prepare a realistic project management plan?',
    options: [
      'Project manager creates the project management plan based on inputs from the sponsor and the functional manager.',
      'Sponsor creates the project management plan based on inputs from the project manager and the functional manager.',
      'Project manager creates the project management plan based on inputs from the team.',
      'Sponsor creates the project management plan based on inputs from all the stakeholders.',
    ],
    correctAnswer: 2,
    explanation: 'The project management plan is prepared by the project manager based on the inputs from the team and all the appropriate stakeholders.',
    category: 'Project Resource Management',
    difficulty: 'easy'
  },
  {
    id: 'Q74',
    question: 'As a project manager, which tool will you use to bring together prequalified stakeholders and subject matter experts in order to know about their expectations and attitudes about a proposed product?',
    options: [
      'Facilitated workshops',
      'Focus Groups',
      'Group creativity techniques',
      'Group decision making techniques',
    ],
    correctAnswer: 1,
    explanation: 'Focus groups bring together prequalified stakeholders and subject matter experts to learn about their expectations and attitudes about a proposed product, service, or result.',
    category: 'Project Integration Management',
    difficulty: 'medium'
  },
  {
    id: 'Q75',
    question: 'You are the managing a complicated ERP implementation project. The following provides information about one activity: deployment in your project: Early Start (ES): 25 days Late Start (LS): 30 days Early Finish (EF): 50 days Late Finish (LF): 55 days Based on this information, you can deduce that',
    options: [
      'The task is on the critical path.',
      'The project may get delayed.',
      'The project float is 5 days.',
      'The task is not on the critical path.',
    ],
    correctAnswer: 3,
    explanation: 'Option 4: This is the correct option, as the task is not on the critical path. Option 1: Since LS - ES = LF - EF = 5 days, the task has a slack of 5 days; hence this task cannot be on the critical path Option 2: There is no information in the question that suggests that the project may get delayed, Option 3: The project float is the amount of time a project can be delayed witho ut delaying the externally imposed date. Since the externally imposed date is not mentioned, we cannot determine the project float.',
    category: 'Project Schedule Management',
    difficulty: 'medium'
  },
  {
    id: 'Q76',
    question: 'In your project, you use the Earned Value Management (EVM) to measure',
    options: [
      'Work performance and magnitude of variation',
      'Work schedule',
      'Risk responses',
      'Activity duration',
    ],
    correctAnswer: 0,
    explanation: 'Earned Value Management (EVM) is a methodology that combines scope, schedule and resource measurements to assess project performance and progress. It is commonly used method of performance measurement for projects.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q77',
    question: 'In your project, you conduct extensive testing to ensure that quality problems in the final product are minimized. The costs incurred on extensive testing are known as',
    options: [
      'Costs of non -conformance',
      'Appraisal costs',
      'Failure costs',
      'Prevention costs',
    ],
    correctAnswer: 1,
    explanation: '',
    category: 'Project Quality Management',
    difficulty: 'medium'
  },
  {
    id: 'Q78',
    question: 'When your objective is to get a lasting win -win solution to a problem, which conflict resolution technique should you use?',
    options: [
      'Collaborate or Problem Solve',
      'Smooth or Accommodate',
      'Withdraw or Avoid',
      'Compromise or Reconcile',
    ],
    correctAnswer: 0,
    explanation: 'Conflict Resolution Modes Conflict Mode Description Collaborate or Problem Solve  Usually, the best way to resolve conflicts is to face the conflict directly with a cooperative attitude and an open dialogue to work through disagreements resulting in consensus and commitment.  Results in a Win -Win outcome Compromise or Reconcile  At times, there is bargaining and searching for solutions that bring some partial or temporary degree of satisfaction to parties in a dispute with a “give and take” attitude.  Results in a Lose -Lose outcome Smooth or Accommodate  Sometimes you may de -emphasize or avoid areas of difference and emphasize areas of agreement in order to maintain relationships.  Results in a Lose -Yield outcome Force or Direct  If you have the authority and have to settle conflicts quickly, you can also exert your viewpoint at the expense of the viewpoints of others.  Results in a Win -Lose outcome Withdraw or Avoid  At times, when you do not have all the information or when things are getting out of hand, you may retreat or withdraw from a potential disagreement.  Results in a Lose -Leave outcome',
    category: 'Project Risk Management',
    difficulty: 'medium'
  },
  {
    id: 'Q79',
    question: 'You are a project manager and have just discovered a risk in your project that requires an immediate corrective action. During which Project Risk Management Process is this action performed?',
    options: [
      'Plan Risk Management',
      'Identify Risks',
      'Perform Qualitative Risk Analysis',
      'Control Risks',
    ],
    correctAnswer: 3,
    explanation: 'Control Risks is the process of implementing risk response plans, tracking identified risks, monitoring residual risks, identifying new risks, and evaluating risk process effectiveness throughout the project.',
    category: 'Project Risk Management',
    difficulty: 'hard'
  },
  {
    id: 'Q80',
    question: 'In your project, you are documenting project purchasing decisions, specifying the approach, and identifying potential sellers. In this context, which tool would you not use?',
    options: [
      'Make -or-buy analysis',
      'Bidder conferences',
      'Expert judgment',
      'Contract types',
    ],
    correctAnswer: 1,
    explanation: 'Option 2: This is the correct answer. Documenting project purchasing decisions, specifying the approach and identifying potential sellers are performed as part of the Plan Procurement Management process. `Bidder conferences` is a technique used in Conduct Procurements process. Make -or buy -analysis, expert judgme nt, and contract types specified in the options 1, 3, and 4 respectively are some of the tools and techniques used in Plan Procurement Management process.',
    category: 'Project Procurement Management',
    difficulty: 'medium'
  },
  {
    id: 'Q81',
    question: 'In your project, the project manager believes in the superiority of his own race or ethnic background. This is an example of',
    options: [
      'Monochronic',
      'Polychronic',
      'Ethnocentric',
      'Egalitarian',
    ],
    correctAnswer: 2,
    explanation: 'Some important definitions: a) Monochronic: Doing one thing at a time b) Polychronic: Doing many things at once c) Ethnocentric: Belief in the superiority of one`s own race or ethnic background d) Egalitarian: Treating all the project team members equally e) Culture shock: Homesickness (in foreign assignments)',
    category: 'Project Resource Management',
    difficulty: 'hard'
  },
  {
    id: 'Q82',
    question: 'In your project, you are formalizing acceptance of the completed project deliverables. This is done during',
    options: [
      'Perform Integrated Change Control',
      'Validate Scope',
      'Control Scope',
      'Control Communications',
    ],
    correctAnswer: 1,
    explanation: 'Validate Scope is the process of formalizing acceptance of the completed project deliverables.',
    category: 'Project Scope Management',
    difficulty: 'medium'
  },
  {
    id: 'Q83',
    question: 'As a project manager, you use work authorization system to assign and allocate work to your team members. In this context, the primary purpose of the work authorization system is to',
    options: [
      'Prevent team members from starting the work without your permission',
      'Prevent scope creep',
      'Prevent unnecessary changes to project scope',
      'Clarify and initiate the work for each work package',
    ],
    correctAnswer: 3,
    explanation: 'Work authorization system: A subsystem of the overall project management system. It is a collection of formal documented procedures that defines how project work will be authorized (committed) to ensure that the work is done by the identified organization, at the right time, and in the proper sequence. It includes the steps, documents, tracking system, and defined approval levels needed to issue work authorizations.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q84',
    question: 'You have recently joined as a project manager of an equipment manufacturing company. Your project sponsor stresses the importance of obtaining stakeholders` formal acceptance of completed deliverables. This should be done',
    options: [
      'At the end of the project',
      'At the end of each project phase',
      'After deliverables are completed and ready for review',
      'After project milestones are defined',
    ],
    correctAnswer: 2,
    explanation: 'Validate Scope is the process of formalizing acceptance of the completed project deliverables. The verified deliverables obtained from the Control Quality process are reviewed with the customer or sponsor to ensure that they are completed satisfactorily and have received formal acceptance of the deliverables by the customer or sponsor.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q85',
    question: 'You are a project manager in a construction company specializing in fabrication of steel parts for bridges. One of your tasks includes "building the steel deck," for which some standardized partially completed schedule network diagram documents a re available. These documents provide a detailed structure helping in the creation of project network diagrams and are examples of',
    options: [
      'Conditional diagramming method',
      'PERT',
      'System dynamics',
      'Templates',
    ],
    correctAnswer: 3,
    explanation: 'Templates are a partially complete document in a predefined format that provides a defined structure for collecting, organizing, and presenting information and data.',
    category: 'Project Schedule Management',
    difficulty: 'easy'
  },
  {
    id: 'Q86',
    question: 'A project was expected to cost $6 million for three months. At the end of one month, you use earned value management as a performance management technique and get the following information: Earned value (EV) = $1.5 million Planned value (PV) = $2.5 million Actual cost (AC) = $2.2 million In this context, what would be the schedule variance?',
    options: [
      '- $0.3 million',
      '- $1 million',
      '$1 million',
      '$0.7 million',
    ],
    correctAnswer: 1,
    explanation: 'Schedule variance = Earned value (EV) - Planned Value (PV) = $1.5 million - $2.5 million = - $1 million Negative schedule variance means that the project is behind schedule. Acronym Term Description Formula PV (BCWS) Planned Value (Budgeted Costs for Work Scheduled) Physical work to be scheduled, including the estimated value of the work EV (BCWP) Earned Value (Budgeted Costs for Work Performed) Physical work actually accomplished, including estimated value of this work AC Actual Cost Actual cost of the work completed SV Schedule Variance Negative SV: Behind Schedule Positive SV: Ahead of Schedule EV – PV CV Cost Variance Negative CV: Over Budget Positive CV: Under Budget EV – AC CPI Cost Performance Index Value got for $1 of Actual Cost EV/AC = BAC/EAC SPI Schedule Performance Index Progress as a % of Planned Progress EV/PV',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q87',
    question: 'Your project is facing attrition of project resources, and you would like to document processes carefully to ensure business continuity. Certain costs have to be incurred for this purpose. These costs are known as',
    options: [
      'Costs of nonconformance',
      'Appraisal costs',
      'Failure costs',
      'Prevention costs',
    ],
    correctAnswer: 3,
    explanation: 'Cost of quality includes all costs incurred over the life of the product by investment in preventing nonconformance to requirements, appraising the product or service for conformance to requirements, and failing to meet requirements (rework).',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q88',
    question: 'The project manager is trying to manage conflicting stakeholder requirements. The IT manager wants a new management information system. To lower costs, the system architect emphasizes technical excellence, and the programming contractor wants to maximize profits. To balance the needs of several stakeholders and achieve lasting resolution of confli cts, the most desirable conflict resolution technique is',
    options: [
      'Collaborate or Problem Solve',
      'Smooth or Accommodate',
      'Withdraw or Avoid',
      'Force or Direct',
    ],
    correctAnswer: 0,
    explanation: 'Conflict Resolution Modes Conflict Mode Description Collaborate or Problem Solve  Usually, the best way to resolve conflicts is to face the conflict directly with a cooperative attitude and an open dialogue to work through disagreements resulting in consensus and commitment.  Results in a Win -Win outcome Compromise or Reconcile  At times, there is bargaining and searching for solutions that bring some partial or temporary degree of satisfaction to parties in a dispute with a “give and take” attitude .  Results in a Lose -Lose outcome Smooth or  Sometimes you may de -emphasize or avoid areas of difference and emphasize areas of Accommodate agreement in order to maintain relationships.  Results in a Lose -Yield outcome Force or Direct  If you have the authority and have to settle conflicts quickly, you can also exert your viewpoint at the expense of the viewpoints of others.  Results in a Win -Lose outcome Withdraw or Avoid  At times, when you do not have all the information or when things are getting out of hand, you may retreat or withdraw from a potential disagreement.  Results in a Lose -Leave outcome',
    category: 'Project Risk Management',
    difficulty: 'hard'
  },
  {
    id: 'Q89',
    question: 'You are the project manager in an IT consultancy firm which does projects for other companies. Based on your interaction with senior management of other companies, you classify your clients into categories like Risk Averse, Risk Neutral and Risk Seeking. You are using',
    options: [
      'Risk Management Planning',
      'Utility theory',
      'Risk identification',
      'Risk categorization',
    ],
    correctAnswer: 1,
    explanation: 'Utility Function (Utility Theory): This is used to measure stakeholder risk tolerance and defines the level or willingness to accept a risk. The three categories of utility theory are Risk Averse, Risk Neutral, and Risk Seeking.',
    category: 'Project Risk Management',
    difficulty: 'hard'
  },
  {
    id: 'Q90',
    question: 'You are in the process of procuring nuts and bolts for a car manufacturing company. This is a readily available product for which there are several acceptable sellers. In this context, which of the following would serve as the most important selection criterion/criteria?',
    options: [
      'Technical capability and references',
      'Overall or life -cycle cost',
      'Production capacity and interest',
      'Purchase price',
    ],
    correctAnswer: 3,
    explanation: 'Option 4: This is the correct answer. If the procurement item is readily available from a number of acceptable sellers, then the selection criterion to be used is `purchase price`. Purchase price includes both the cost of the item and all ancillary expenses such as delivery. Option 1: Technical capability is the selection criterion that is used when the project demands a high degree of technical expertise on the part of the seller. It is used to select a selle r with the best technical skills and knowledge from among the potential sellers. `References’ is used as a selection criterion when the project is of utmost importance and requires the seller to possess impeccable track record of successfully completing si milar projects. Option 2: Overall life -cycle cost is the selection criterion that is used when the project requires selection of a seller who produces the lowest total cost of ownership. Option 3: `Production capability and interest` is the selection cr iterion that is used when the project requires selection of a seller who has the capability and interest to meet the potential future requirements.',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q91',
    question: 'You are in the planning phase of your project and your project is 5 days behind schedule. The customer has asked you not to create a Communications Management Plan because it is not required for your project. What should you do?',
    options: [
      'Do not create the Communica tions Management Plan as per the customer request',
      'Ask for inputs from the sponsor about whether you should create the Communications Management Plan.',
      'Create a Communications Management Plan even though it might mean going against customer wishes.',
      'Use the Communications Management Plan from a previous project so that there are no further delays in the planning process',
    ],
    correctAnswer: 2,
    explanation: 'The project manager should follow all the project management processes, even if it might be more time consuming and difficult at times. At times, this may mean disagreeing with the sponsor or customer. Please note that the Communications Management Plan is an important document and should def initely be created for every project.',
    category: 'Project Schedule Management',
    difficulty: 'medium'
  },
  {
    id: 'Q92',
    question: 'You are a project manager with NASA and are involved in designing satellite systems. In this context, who among the following cannot initiate your new project?',
    options: [
      'Government',
      'Project Team',
      'Portfolio Organization of NASA',
      'Company in England, which wants a particular type of satellite to be developed by NASA',
    ],
    correctAnswer: 1,
    explanation: 'Projects are initiated by an entity external to the project such as a sponsor, PMO staff person, or a portfolio governing bod y chairperson or authorized representative.',
    category: 'Project Resource Management',
    difficulty: 'medium'
  },
  {
    id: 'Q93',
    question: 'You are nearing project completion and want to get feedback about the overall project performance. From project management perspective, a project is considered to be successful when',
    options: [
      'The project manager announces the completion of the project.',
      'The project is completed within the constrains approved between the project managers and senior management and meets the stated project objectives.',
      'The sponsor announces the completion of the project.',
      'The customer is happy because you provided additional features which she had not expected.',
    ],
    correctAnswer: 1,
    explanation: 'Since projects are temporary in nature, the success of the project should be measured in terms of completing the project within the constraints of scope, time, cost, quality, resources, and risk as approved between the project managers and senior management.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q94',
    question: 'Which of the following statements related to Validate Scope and Control Quality is correct?',
    options: [
      'Control Quality deals with acceptance of products.',
      'Validate Scope may be performed in parallel with Control Quality.',
      'Validate Scope should not be done if the project is terminated.',
      'Validate Scope and Control Quality are very similar processes.',
    ],
    correctAnswer: 1,
    explanation: 'The Validate Scope process differs from the Control Quality process in that the former is primarily concerned with acceptance of the deliverables, while quality control is primarily concerned with correctness of the deliverables and meeting the quality requirements specified for the deliverables. Control Quality is general ly performed before Validate Scope, although the two processes may be performed in parallel.',
    category: 'Project Scope Management',
    difficulty: 'medium'
  },
  {
    id: 'Q95',
    question: 'You are managing the construction project of a highway overpass. The project is critical, and must stay on schedule in order to not cause delays in subsequent projects being planned. Your sponsor has placed a lot of pressure on you to ensure that you do a good job of planning the schedule for this project so it can be submitted to the project managers of those subsequent projects to be taken into account during their planning processes. You would like to use the best practices in the road construction industry to help you in your project. Which of the following tools of Sequence Activi ties process are based on these best practices?',
    options: [
      'Mandatory dependencies',
      'Discretionary dependencies',
      'Industry norms',
      'Best Practice standards for ISO 9001 certification',
    ],
    correctAnswer: 1,
    explanation: 'Discretionary dependencies are established based on the knowledge of best practices within a particular application area or some unusual aspect of the project where a specific sequence is desired, even though there may be other acceptable sequences. Discretionary dependencies should be fully documented, since they can create arbitrary total float values and can limit later scheduling options.',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q96',
    question: 'While performing variance analysis for your project, you refer to your status reports which show the following information: Planned value = $100,000 Actual cost = $125,000 Earned value = $90,000 In this context, which of the following is incorrect?',
    options: [
      'Schedule variance is - $10,000 and you are behind schedule',
      'Cost variance is - $35,000 and you are over -budget',
      'CPI is 0.5 and you are over -budget',
      'SPI is 0.9 and you are behind schedule',
    ],
    correctAnswer: 3,
    explanation: 'CV (Cost Variance) = EV - AC = $90,000 - $125,000 = - $35,000 (since this is negative, you are over -budget) CPI (Cost Performance Index) = EV/AC = $90,000 / $125,000 = 0.72 (since this is <1, you are over-budget) SV (Schedule Variance) = EV - PV = $90,000 - $100,000 = - $10,000 (since this is negative, you are behind schedule) SPI (Schedule Performance Index) = EV/ PV = $90,000 / $100,000 = 0.9 (since this is <1, you are behind schedule) The above calculations show that all options except option 3 are correct . Hence, option 3 is the right answer.',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q97',
    question: 'In your project, you are creating a component -specific structured tool to verify that a set of required steps has been performed. This tool is called',
    options: [
      'Quality metric',
      'Quality checklist',
      'Work authorization system',
      'Validate Scope',
    ],
    correctAnswer: 1,
    explanation: 'Quality checklist is a structured tool, usually component -specific, used to verify that a set of required steps has been performed.',
    category: 'Project Scope Management',
    difficulty: 'easy'
  },
  {
    id: 'Q98',
    question: 'There have been too many disagreements within two team -members in your project over the design of a particular product. You would like to incorporate the best features of the two designs. You also want to create an environment that avoids conflicts and emphasizes similarities. The conflict handling mode you would like to implement is',
    options: [
      'Smooth or Accommodate',
      'Compromise or Reconcile',
      'Collaborate or Problem Solve',
      'Withdraw or Avoid',
    ],
    correctAnswer: 0,
    explanation: 'Conflict Resolution Modes Conflict Mode Description Collaborate or Problem Solve  Usually, the best way to resolve conflicts is to face the conflict directly with a cooperative attitude and an open dialogue to work through disagreements resulting in consensus and commitment.  Results in a Win -Win outcome Compromise or Reconcile  At times, there is bargaining and searching for solutions that bring some partial or temporary degre e of satisfaction to parties in a dispute with a “give and take” attitude.  Results in a Lose -Lose outcome Smooth or Accommodate  Sometimes you may de -emphasize or avoid areas of difference and emphasize areas of agreement in order to maintain relationships.  Results in a Lose -Yield outcome Force or Direct  If you have the authority and have to settle conflicts quickly, you can also exert y our viewpoint at the expense of the viewpoints of others.  Results in a Win -Lose outcome Withdraw or Avoid  At times, when you do not have all the information or when things are getting out of hand, you may retreat or withdraw from a potential disagreement.  Results in a Lose -Leave outcome',
    category: 'Project Risk Management',
    difficulty: 'medium'
  },
  {
    id: 'Q99',
    question: 'In the Plan Risk Management process, you define how to conduct risk management activities for a project because careful and explicit planning enhances the probability of success for the subsequent risk management processes. In this context, what will you NOT do when you Plan Risk Management?',
    options: [
      'Identify Risks',
      'Establish an agreed -upon basis for evaluating risk',
      'Ensure that the degree, type, and visibility of risk management are commensurate with both the risks and the importance of the project',
      'Provide sufficient resources and time for risk management activities',
    ],
    correctAnswer: 0,
    explanation: 'The key benefit of the Plan Risk Management process is it ensures that the degree, type, and visibility of risk management are commensurate with both the risks and the importance of the project to the organization...Planning is also important to provide sufficient resourc es and time for risk management activities, and to establish an agreed -upon basis for evaluating risks.',
    category: 'Project Risk Management',
    difficulty: 'hard'
  },
  {
    id: 'Q100',
    question: 'You are in the process of obtaining seller responses to select a seller. In this context, you conduct a bidder conference, where your primary objective is to',
    options: [
      'Ensure that sellers have a clear understanding of the proposal',
      'Determine who would be qualified sellers for bidding',
      'Evaluate the interest level of sellers',
      'Use evaluation criteria to select sellers',
    ],
    correctAnswer: 0,
    explanation: 'Bidder conferences are meetings between the buyer and all prospective sellers prior to submittal of a bid or proposal. They are used to ensure that all prospective sellers have a clear and common understanding of the procurement requirements, and that no bidders receive preferential treatment.',
    category: 'Project Procurement Management',
    difficulty: 'medium'
  },
  {
    id: 'Q101',
    question: 'In your project, you notice that one of the team members is not following a company policy about reporting daily status in the company Project Management Information System. You also realize that by not following this policy, the team member is able to be more productive since he spends the extra time working on project deliverables. What will you do in this situation?',
    options: [
      'Do nothing since the team member is more productive',
      'Ask the team member to follow the company policies and report daily status(even if it means lower productivity).',
      'Modify the company policy to the requirements of the project.',
      'Escalate this issue to senior management.',
    ],
    correctAnswer: 1,
    explanation: 'Project Managers should ensure that team members adhere to the company policies at all times.',
    category: 'Project Communications Management',
    difficulty: 'medium'
  },
  {
    id: 'Q102',
    question: 'You have acquired a team and assigned tasks for the selected team members of your project. This activity is performed during',
    options: [
      'Planning',
      'Monitoring and Controlling',
      'Executing',
      'Closing',
    ],
    correctAnswer: 2,
    explanation: 'Acquire Project Team is the process of confirming human resource availability and obtaining the team necessary to complete project activities. Project staff assignments is an output of Acquire Project Team process, which is a part of Executing Process Group.',
    category: 'Project Resource Management',
    difficulty: 'medium'
  },
  {
    id: 'Q103',
    question: 'The project management plan is the most important planning document produced with inputs from several project team members. In which of the following processes will the project management plan NOT be updated?',
    options: [
      'Monitor and Control Project Work',
      'Develop Project Charter',
      'Perform Integrated Change Control',
      'Direct and Manage Project Work',
    ],
    correctAnswer: 1,
    explanation: 'Develop Project Management Plan is the process of defining, preparing, and coordinating all subsidiary plans and integrating them into a comprehensive project management plan. Project management plan is the only output of this process.',
    category: 'Project Resource Management',
    difficulty: 'medium'
  },
  {
    id: 'Q104',
    question: 'While performing Scope Control process, you ensure that all requested changes and recommended corrective actions are processed through the Perform Integrated Change Control process. In this context, if a change is requested, what should the project manager do FIRST?',
    options: [
      'Discuss the change in the next status review meeting',
      'Try to find out the financial implication of the change',
      'Evaluate the change and try to prevent unwarranted changes',
      'Involve the change control board',
    ],
    correctAnswer: 2,
    explanation: 'The project manager should always try to first evaluate the change and try to prevent unwarranted changes, which can adversely impact the project scope. Option 1: We do not know when the next status review meeting will be conducted, and it may not be the correct fo rum to discuss all proposed changes. Option 2 and Option 4 should be done only after changes are evaluated.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q105',
    question: 'In your project, your team is identifying which dependencies are discretionary during the process of sequencing the activities. Discretionary dependencies are sometimes referred to as',
    options: [
      'Soft logic',
      'Hard logic',
      'Mandatory logic',
      'Optional dependency',
    ],
    correctAnswer: 0,
    explanation: 'Discretionary dependencies are sometimes referred to as preferred logic, preferential logic, or soft logic.',
    category: 'Project Resource Management',
    difficulty: 'medium'
  },
  {
    id: 'Q106',
    question: 'You are the project manager for a construction company tasked with constructing an office building. The office building will be 10 stories high and will have 200,000 sq. ft. of working area. Your company has expertise in constructing similar buildings. You are asked to submit a high level estimate for the building within 4 days. Which of the following is the most appropriate?',
    options: [
      'Parametric estimating: Work with a construction engineer who has expertise in similar buildings, find out the rate per sq. ft. of construction and multi ply with the total sq. feet of the building to get an estimate.',
      'Bottom -up estimating: Ask the individual project team members to create a WBS and determine the costs of activities - use that as a basis for calculating the estimate for the whole building.',
      'Vendor bid analysis: Submit a bid to some companies and use their estimates as a basis for getting an estimate for your project.',
      'Let your sponsor know that it would not be possible to get any reasonable estimate within such a short time period.',
    ],
    correctAnswer: 0,
    explanation: 'Parametric estimating uses a statistical relationship between relevant historical data and other variables (e.g., square footage in construction) to calculate a cost estimate for project work. This technique can produce higher levels of accuracy depending upon the sophistication and underlying data built into the model.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q107',
    question: 'In your project, you are doing a structured review to determine whether product activities comply with organizational and project policies. This is conducted as part of (a) ________________, and is performed during the (b) _____________ process.',
    options: [
      '(a) Quality audit (b) Quality Assurance',
      '(a) Quality audit (b) Control Quality',
      '(a) Process analysis (b) Quality Assurance',
      '(a) Process analysis (b) Control Quality',
    ],
    correctAnswer: 0,
    explanation: 'Quality audit is a structured, independent review performed to determine whether product activities comply with organizational and project policies, processes, and procedures. `Quality audits` is a technique used in the Perform Quality Assurance process.',
    category: 'Project Quality Management',
    difficulty: 'hard'
  },
  {
    id: 'Q108',
    question: 'Managing conflicts is essential for successful implementation of a project. The conflict resolution techniques that are most frequently used in project management practice are',
    options: [
      'Withdraw, Force, Compromise',
      'Withdraw, Authoritative, Force',
      'Withdraw, Authoritative, Compromise',
      'Withdraw, Collaborate, Accommodate',
    ],
    correctAnswer: 0,
    explanation: 'Conflict Resolution Modes Conflict Mode Description Collaborate or Problem Solve  Usually, the best way to resolve conflicts is to face the conflict directly with a cooperative attitude and an open dialogue to work through disagreements resulting in consensus and commitment.  Results in a Win -Win outcome Compromise or Reconcile  At times, there is bargaining and searching for solutions that bring some partial or temporary degree of satisfaction to parties in a dispute with a “give and take” attitude.  Results in a Lose -Lose outcome Smooth or Accommodate  Sometimes you may de -emphasize or avoid areas of difference and emphasize areas of agreement in order to maintain relationships.  Results in a Lose -Yield outcome Force or Direct  If you have the authority and have to settle conflicts quickly, you can also exert y our viewpoint at the expense of the viewpoints of others.  Results in a Win -Lose outcome Withdraw or Avoid  At times, when you do not have all the information or when things are getting out of hand, you may retreat or withdraw from a potential disagreement.  Results in a Lose -Leave outcome',
    category: 'Project Risk Management',
    difficulty: 'medium'
  },
  {
    id: 'Q109',
    question: 'When talking to the stakeholders to identify risk, you usually start with general or high level questions and then get into specific or particular questions. This is also called',
    options: [
      'Risk categorization',
      'Nominal group technique',
      'Delphi technique',
      'Funnel analysis',
    ],
    correctAnswer: 3,
    explanation: 'Funnel Analysis: A type of interviewing technique by which we start with general or high level questions and then get into specific or particular questions.',
    category: 'Project Risk Management',
    difficulty: 'medium'
  },
  {
    id: 'Q110',
    question: 'In Conduct Procurements process, you award a contract to the selected seller. In this context, which of the following does not describe a contract?',
    options: [
      'Simple or complex',
      'Formal or informal',
      'Cost Reimbursable, Time and Material or Fixed Price',
      'Signed off by the buyer and the seller',
    ],
    correctAnswer: 1,
    explanation: 'The contract can be in the form of simple purchase order or a complex document. Regardless of the document’s complexity, a contract is a mutually binding legal agreement that obligates the seller to provide the specified products, services, or result, and obligates the buyer to compensate the seller. A contract is a legal relationship subject to remedy i n the courts. Since it is a legal document, it is formal in nature.',
    category: 'Project Cost Management',
    difficulty: 'medium'
  },
  {
    id: 'Q111',
    question: 'You have been assigned to manage a project for the subsidiary unit of your organization in a foreign country. In this context, which of the following will aid you in managing the project better?',
    options: [
      'Awareness of the political history of the country.',
      'Information about the country`s demography and social structure.',
      'Awareness of culture and customs in the country',
      'Information about previous projects done in the country by your competitors.',
    ],
    correctAnswer: 2,
    explanation: 'PMI emphasizes multiculturalism as an important aspect of modern day project management. So it is always helpful to possess knowledge of culture and systems in a country where a project will be done.',
    category: 'Project Communications Management',
    difficulty: 'medium'
  },
  {
    id: 'Q112',
    question: 'You have created a risk management plan to decide how to approach, plan, and execute the risk management activities for your project. Thereafter, you are involved with Identify Risks process to determine which risks might affect your project. What should you do NEXT?',
    options: [
      'Plan Quality',
      'Plan Risk Responses',
      'Perform Qualitative Risk Analysis',
      'Define Activities',
    ],
    correctAnswer: 2,
    explanation: 'Perform Qualitative Risk Analysis follows Identify Risks. This is a process of prioritizing risks for further analysis or act ion by assessing and combining their probability of occurrence and impact.',
    category: 'Project Quality Management',
    difficulty: 'medium'
  },
  {
    id: 'Q113',
    question: 'Patrick, a senior member of your team, brought to your notice a flaw in one of the project`s deliverables. The team is now engaged in repairing it. In which of the following project management processes would this be performed?',
    options: [
      'Direct and Manage Project Work',
      'Perform Integrated Change Control',
      'Close Project or Phase',
      'Monitor and Control Project Work',
    ],
    correctAnswer: 0,
    explanation: 'Direct and Manage Project Work also requires review of the impact of all the project changes and the implementation of approved changes ...An intentional activity to modify a nonconfirming product or product component.',
    category: 'Project Resource Management',
    difficulty: 'hard'
  },
  {
    id: 'Q114',
    question: 'Your project is being carried out under a contract. There have been some changes in the project scope and you want to determine the cause of variance with respect to the scope baseline. This will help you decide whether corrective action is required. This should be done as part of',
    options: [
      'Define Scope',
      'Collect Requirements',
      'Validate Scope',
      'Control Scope',
    ],
    correctAnswer: 3,
    explanation: 'During the Control Scope process, we use the technique called variance analysis. In variance analysis, project performance measurements are used to assess the magnitude of variation from the original scope baseline. Important aspects of project scope contr ol include determining the cause and degree of variance relative to the scope baseline and deciding whether corrective or preventive action is required.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q115',
    question: 'During the Sequence Activities process, you realize that several tasks have conditional branches (e.g., a design update is only needed if the inspection detects errors). For this purpose, you may use Precedence diagramming method (PDM), which is also referred to as',
    options: [
      'GERT',
      'AOA',
      'AON',
      'Conditional diagramming methods',
    ],
    correctAnswer: 2,
    explanation: 'Precedence diagramming method is also called Activity -On-Node (AON).',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q116',
    question: 'You are working on a 12 month assignment to build a website with 4,000 pages for $1,000,000. You are supposed to spend $250,000 every 3 months. After 6 months, you determine that only $400,000 of work is completed and cost incurred is $800,000. What is the ETC?',
    options: [
      '$2,000,000',
      '$1,500,000',
      '$1,000,000',
      '$1,200,000',
    ],
    correctAnswer: 3,
    explanation: 'The default value of EAC (assuming current variances are typical) is calculated as below: CPI = EV/AC CPI = $400,000 / $800,000 CPI = 0.5 EAC = BAC/CPI EAC = $1,000,000/0.5 EAC = $2,000,000 So, ETC = EAC – AC = $2,000,000 – $800,000 = $1,200,000',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q117',
    question: 'Your company manufactures bearings for the automobile industry. Control charts are used to determine whether or not a process is stable or has predictable performance. Specification limits indicate',
    options: [
      'If process is within control limits',
      'Whether the product would be successful in the market',
      'Maximum and minimum values allowed',
      'Process improvement opportunities',
    ],
    correctAnswer: 2,
    explanation: 'Control charts are used to determine whether or not a process is stable or has predictable performance. Upper and lower specification limits are based on requirements of the contract. They reflect the maximum and minimum values allowed.',
    category: 'Project Procurement Management',
    difficulty: 'medium'
  },
  {
    id: 'Q118',
    question: 'Implementation of which one of the following techniques results in a lose -lose situation?',
    options: [
      'Smooth or Accommodate',
      'Force or Direct',
      'Compromise or Reconcile',
      'Collaborate or Problem Solve',
    ],
    correctAnswer: 2,
    explanation: 'Conflict Resolution Modes Conflict Mode Description Collaborate or Problem Solve  Usually, the best way to resolve conflicts is to face the conflict directly with a cooperative attitude and an open dialogue to work through disagreements resulting in consensus and commitment.  Results in a Win -Win outcome Compromise or Reconcile  At times, there is bargaining and searching for solutions that bring some partial or temporary degree of satisfaction to parties in a dispute with a “give and take” attitude.  Results in a Lose -Lose outcome Smooth or Accommodate  Sometimes you may de -emphasize or avoid areas of difference and emphasize areas of agreement in order to maintain relationships.  Results in a Lose -Yield ou come Force or Direct  If you have the authority and have to settle conflicts quickly, you can also exert y our viewpoint at the expense of the viewpoints of others.  Results in a Win -Lose outcome Withdraw or Avoid  At times, when you do not have all the information or when things are getting out of hand, you may retreat or withdraw from a potential disagreement.  Results in a Lose -Leave outcome',
    category: 'Project Risk Management',
    difficulty: 'medium'
  },
  {
    id: 'Q119',
    question: 'In your project, you want to determine which risks have the most potential impact on the project. So, you examine the extent to which the uncertainty of each project element affects the objective being examined when all other uncertain elements are held at their baseline values. This is an example of',
    options: [
      'Risk response planning',
      'Expected monetary value analysis',
      'Sensitivity analysis',
      'Simulation',
    ],
    correctAnswer: 2,
    explanation: 'Sensitivity analysis helps to determine which risks have the most potential impact on the project. It helps to understand how the variations in project`s objectives correlate with variations in different uncertainties. Conversely, it examines the extent to which the uncertainty of each project element affects the objective being studied when all other uncertain elements are held at their baseline values.',
    category: 'Project Risk Management',
    difficulty: 'hard'
  },
  {
    id: 'Q120',
    question: 'Which of the following should you (the buyer) pay attention to when you Conduct Procurements?',
    options: [
      'Ensure that contractual obligations are met.',
      'Apply appropriate project management processes to the contractual relationship and integrate the outputs from these processes to the overall management of the project.',
      'Monitor payments to the seller.',
      'Perform regular procurement audits.',
    ],
    correctAnswer: 3,
    explanation: 'A procurement audit is a structured review of the procurement process originating from Plan Procurement Management process through Conduct Procurements process. This is one of the tools and techniques used in Close Procurements process.',
    category: 'Project Procurement Management',
    difficulty: 'hard'
  },
  {
    id: 'Q121',
    question: 'Your project is complete and you are performing project closure activities. In this context, what should you do LAST?',
    options: [
      'Creating final product, service, or result transition',
      'Releasing project resources working on the project',
      'Updating organizational process assets',
      'Accepting deliverables',
    ],
    correctAnswer: 1,
    explanation: 'Final product, service, or result transition, organizational process assets updates are outputs of the Close Project or Phase and accepted deliverables are its inputs. However, even the Close Project will need resources (e.g. people, equipment, etc.). Hence, releasing of project resources should happen at the very end of the Close Project or Phase.',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q122',
    question: 'In your company, you use Microsoft project as a project management information system (PMIS) - this facilitates automation and easier project management. Which of the following statements about PMIS is incorrect?',
    options: [
      'PMIS is used during Direct and Manage Project Execution',
      'PMIS is part of organizational process assets',
      'PMIS includes scheduling software and configuration management system',
      'PMIS can be used for information collection and dissemination',
    ],
    correctAnswer: 1,
    explanation: 'The PMIS, which is part of the environmental factors, provides access to tools, such as a scheduling software tool, a work authorization system, a configuration management system, an information collection and distribution system, or interfaces to other online automated systems. Automated gathering and report ing on key performance indicators (KPI) can be part of this system.',
    category: 'Project Communications Management',
    difficulty: 'medium'
  },
  {
    id: 'Q123',
    question: 'Your project has limited budget and you would like to determine how to complete the project at lower costs. This can be done using',
    options: [
      'Earned value management analysis',
      'Fishbone diagram',
      'Value analysis',
      'Stakeholder analysis',
    ],
    correctAnswer: 2,
    explanation: 'Value analysis or value engineering helps determine how to complete the project at a lower budget without any changes to the project scope.',
    category: 'Project Scope Management',
    difficulty: 'medium'
  },
  {
    id: 'Q124',
    question: 'While preparing the schedule for the project activities, you find that there is very limited information on activity durations; so you wish to use the actual duration of a previous, similar activity as a basis for estimating future activity. Which estimati ng tool do you use?',
    options: [
      'Three -point estimates',
      'Parametric estimating',
      'Quantitative estimating',
      'Analogous estimating',
    ],
    correctAnswer: 3,
    explanation: 'Analogous estimating uses parameters such as duration, budget, size, weight, and complexity, from a previous, similar project, as the basis for estimating the same parameter or measure for a future project. Analogous duration estimating is frequently used to estimate project duration when there is a limited amount of detailed information about the projec t, for example, in the early phases of a project. Analogous estimating uses historical information and expert judgment.',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q125',
    question: 'Please refer to the diagram given below. At time x, the project is',
    options: [
      'Behind schedule, Over -budget',
      'Ahead of schedule, Over -budget',
      'Behind schedule, Under -budget',
      'Ahead of schedule, Under -budget',
    ],
    correctAnswer: 2,
    explanation: 'The diagram shows that at time x, SPI < 1 (i.e., behind schedule) and CPI > 1 (i.e., under -budget). Please note that in earned value management calculations, ratios > 1 is desirable.',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q126',
    question: 'In your project, you use control charts to mo nitor cost and schedule variances. In this context, you would call the process “out of control” in which of the following cases: A. Seven consecutive plot points are above the mean. B. Point below lower control limits C. Point exactly on the mean D. Seven consecutive plot points are below the mean.',
    options: [
      'A, B and C',
      'Only A and B',
      'A, B and D',
      'Only B',
    ],
    correctAnswer: 2,
    explanation: 'A process is considered out of control when: (1) a data point exceeds a control limit; (2) seven consecutive plot points are above the mean; or (3) seven consecutive plot points are below the mean.',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q127',
    question: 'In your project, you want to use organization charts to document team member roles and responsibilities. This will ensure that each work package or activity has an unambiguous owner and that all team members have a clear understanding of their roles and responsibilities. In this context, which of the following is incorrect?',
    options: [
      'Hierarchical charts include OBS (organization breakdown structure) and RBS (resource breakdown structure).',
      'Matrix based charts can also be called RACI or RAM charts.',
      'Organization breakdown structure is arranged according to an organization`s departments, units, or teams with the project activities or work packages listed under each department.',
      'RAM charts show how project roles and responsibilities are linked to project schedule.',
    ],
    correctAnswer: 3,
    explanation: 'A responsibility assignment matrix (RAM) is used to illustrate the connections between work packages or activities and project team members. The Matrix format shows all activities associated with one person and all persons associated with one activity.',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q128',
    question: 'You are a retail company which routinely buys goods from foreign countries. Since currency fluctuation is an important risk, you keep all other factors constant and try to find out how much your project will be impacted if the currency rate fluctuate s by 5%, 10%, 20% or 25%. This helps you determine appropriate risk res ponse. This can also be effectively shown using',
    options: [
      'Beta probability distributions',
      'Expected monetary value analysis',
      'Tornado diagram',
      'Simulation',
    ],
    correctAnswer: 2,
    explanation: 'Sensitivity analysis helps to determine which risks have the most potential impact on the project. It helps to understand how the variations in project`s objectives correlate with variations in different uncertainties. Conversely, it examines the extent to which the uncertainty of each project element affects the objective being studied when all other uncertain elements are held at their baseline values. One typical display of sensitivity analysis is the tornado diagram, which is usef ul for comparing relati ve importance and impact of variables that have a high degree of uncertainty to those that are more stable.',
    category: 'Project Risk Management',
    difficulty: 'hard'
  },
  {
    id: 'Q129',
    question: 'In your contract, you can make pre -defined final adjustments to the contract price due to changed conditions like inflation, foreign exchange value fluctuations, and input cost variations. This provision is built into which of the following types of contracts?',
    options: [
      'Cost Reimbursable contracts with escalation clauses',
      'Fixed Price with Economic Price Adjustment contracts',
      'Fixed Price Incentive Fee contracts',
      'Cost Plus Award Fee contracts',
    ],
    correctAnswer: 1,
    explanation: 'Fixed Price with Economic Price Adjustment contract (FP -EPA) is a contract type which is used whenever the seller’s performance period spans a considerable number of years as is desired with many long -term relationships. It is a fixed - price contract, but with a special provision allowing for pre -defined final adjustments to the contr act price due to changed conditions, such as inflation changes, or cost increases (or decreases) for specific commodities.',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q130',
    question: 'You have created the Work Breakdown Structure (WBS) for your project. Major project deliverables have been divided into smaller more manageable components. What should you do NEXT?',
    options: [
      'Prepare a detailed project scope statement',
      'Aggregate estimated costs of individual activities or work packages to establish an authorized cost baseline',
      'Develop project schedule',
      'Identify and document specific actions that need to be performed to produce project deliverables',
    ],
    correctAnswer: 3,
    explanation: 'Define Activities is the process of identifying and documenting the specific actions to be performed to produce the project deliverables. This is done after Create WBS process. Once the WBS is created, the next logical step is to define each of these activities.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q131',
    question: 'To define how the project work will be authorized (committed) so that it is performed by the designated person at the appropriate time, a project manager can use',
    options: [
      'Work breakdown structure',
      'Work authorization system',
      'WBS dictionary',
      'Project schedule',
    ],
    correctAnswer: 1,
    explanation: 'Work authorization system is a collection of formal documented procedures that defines how project work will be authorized (committed) to ensure that the work is done by the identified organization, at the right time, and in the proper sequence.',
    category: 'Project Scope Management',
    difficulty: 'easy'
  },
  {
    id: 'Q132',
    question: 'In your project, you are defining and documenting stakeholders` needs to meet the project objectives. You know that this is very important as the project`s success is directly influenced by the care taken during this process. In this context, you should be very diligent when you',
    options: [
      'Identify Stakeholders',
      'Collect Requirements',
      'Create Project Charter',
      'Create Project Management Plan',
    ],
    correctAnswer: 1,
    explanation: 'Collect Requirements is the process of determining, documenting, and managing stakeholder needs and requirements to meet project objectives. The project`s success is directly influenced by active stakeholder involvement in the discovery and decomposition of needs into requirements and by the care taken in determining, documenting, and managing the requirements of the product, service, or result of the project. Requirements include the quantified and documented needs and expectations of th e sponsor, customer, and other stakeholders.',
    category: 'Project Scope Management',
    difficulty: 'medium'
  },
  {
    id: 'Q133',
    question: 'Your current project has very limited information on activity durations. You wish to use the actual duration of a previous, similar activity as a basis for estimating the current activity duration. Once you have estimated the durations for the activities on the project, what would be your next step?',
    options: [
      'Create an activity list.',
      'Calculate early and late start and finish dates for the unfinished project activities.',
      'Conduct performance reviews to determine variances.',
      'Subdivide project work packages into smaller more manageable components for better management control.',
    ],
    correctAnswer: 1,
    explanation: 'If you are working on a project, which has very limited information, then when estimating durations you should use the actual duration of previous, similar projects as the basis for estimating the duration of the current project. This is done as part of Estimate Activity Durations. Once we estimate the duration of the project, we should calculate the early and late start and finish dates. Estimate Activity Durations process will be followed by Develop Schedule process, wherein one of the tools and techniques used is schedule network analysis (which employs various analytical techniques to calculate early and late start and finish dates for the uncompleted portion of project activities). The corr ect answer is option 2. Please note option 1 refers to Define Activities process which has been performed earlier. Option 3 refers to Control Schedule process which is done during Monitoring and Controlling process. Option 4 refers to Create WBS process which has been done earlier.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q134',
    question: 'Your project sponsor has asked you for a status report of your project, you are required to include the Estimate at Completion information in the report based on the following data. What would be the EAC? Actual cost of the project = $350,000 Budget at completion of the project = $500,000 Earned value= $250,000',
    options: [
      '$516,000',
      '$155,000',
      '$700,000',
      '$850,000',
    ],
    correctAnswer: 2,
    explanation: 'Cost Performance Index (CPI) = EV/AC = $250,000/$350,000 = 0.7142857 Estimate at Completion (EAC) = BAC/CPI = 500,000/0.7142857 = 700,000',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q135',
    question: 'If you compare your project within the same application area as a basis for measuring performance, then it is also called',
    options: [
      'Design of experiments',
      'Benchmarking',
      'Organizational process assets',
      'Functional organization comparison',
    ],
    correctAnswer: 1,
    explanation: 'Benchmarking involves comparing actual or planned project practices to those of comparable projects to identify best practices, generate ideas for improvement, and provide a basis for measuring performance. These other projects can be within the performing organization or outside of it and can be within the same or in another application area.',
    category: 'Project Integration Management',
    difficulty: 'medium'
  },
  {
    id: 'Q136',
    question: 'Your sponsor believes in "SMART" goals for evaluating the objectives or goals for your project. Which of the following is NOT included in "SMART" goals?',
    options: [
      'Significant',
      'Measurable',
      'Relevant',
      'Attainable',
    ],
    correctAnswer: 0,
    explanation: 'SMART Goals: The performance goals should be SMART - Specific, Measurable, Achievable/Attainable, Relevant and Time -specific.',
    category: 'Project Integration Management',
    difficulty: 'hard'
  },
  {
    id: 'Q137',
    question: 'You are the project manager at an aircraft manufacturing company, where you use a wind tunnel to test how changes in different parameters like wind speed, temperature, humidity, etc. will impact the flight parameters of a prototype aeroplane. So, the proje ct model is computed many times (iterated), with the input values chosen at random for each iteration from the probability distributions of these variables. The technique used is',
    options: [
      'Monte Carlo simulation',
      'Expected monetary value',
      'Sensitivity analysis',
      'Probability distributions',
    ],
    correctAnswer: 0,
    explanation: 'A project simulation uses a model that translates the specified detailed uncertainties of the project into their potential impact on project objectives. Simulations are typically performed using the Monte Carlo technique. In a simulation, the project model is computed many times (iterated), with the input values (e.g., cost estimates or activity durations) chosen at random for each iteration from the probability distributions of these variables.',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q138',
    question: 'You have reached the end of your project, but you are worried that the fee that will be paid to you will be based on the subjective determination of your performance by the buyer. Moreover, the contract clause does not allow for appeals in courts of law based on performance. This is a feature of',
    options: [
      'Cost Plus Award Fee contract',
      'Cost Plus Fixed Fee contract',
      'Fixed Price with Economic Price Adjustment contract',
      'Illegal contract type because all contract terms can be litigated in courts',
    ],
    correctAnswer: 0,
    explanation: 'In Cost Plus Award Fee contracts (CPAF), the seller is reimbursed for all legitimate costs, but the majority of the fee is earned only based on the satisfaction of certain broad subjective performance criteria defined and incorporated into the contract. The determinati on of fee is based solely on the subjective determination of seller performance by the buyer, and is generally, not subject to appeals.',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q139',
    question: 'Improving competencies and interaction of team members helps in improving project performance. This activity is performed as part of which project Process Group?',
    options: [
      'Planning',
      'Executing',
      'Monitoring and Controlling',
      'Initiating',
    ],
    correctAnswer: 1,
    explanation: 'Develop Project Team is the process of improving competencies, team member interaction, and overall team environment to enhance project performance. Develop Project Team happens in the Executing Process Group.',
    category: 'Project Resource Management',
    difficulty: 'hard'
  },
  {
    id: 'Q140',
    question: 'An intentional activity that ensures the future performance of the project work is aligned with the project management plan is called',
    options: [
      'Corrective action',
      'Preventive action',
      'Defect repair',
      'Risk mitigation',
    ],
    correctAnswer: 1,
    explanation: 'Preventive action: An intentional activity that ensures the future performance of the project work is aligned with the project management plan.',
    category: 'Project Risk Management',
    difficulty: 'hard'
  },
  {
    id: 'Q141',
    question: 'In your project, you want to ensure that each requirement adds business value by linking it to the business and project objectives. This also provides a means to track requirements throughout the project life cycle, helping to ensure that requirements approved in the requirements documentation are delivered at the end of the project. A tool that you can use is',
    options: [
      'Requirements documentation',
      'Brainstorming',
      'Requirements management plan',
      'Requirements traceability matrix',
    ],
    correctAnswer: 3,
    explanation: 'The requirements traceability matrix is a grid that links product requirements from their origin to the deliverables that satisfy them. The implementation of a requirements traceability matrix helps ensure that each requirement adds business value by linking it to the business and project objectiv es. It provides a means to track requirements throughout the project life cycle, helping to ensure that requirements approved in the requirements documentation are delivered at the end of the project.',
    category: 'Project Integration Management',
    difficulty: 'hard'
  },
  {
    id: 'Q142',
    question: 'Your bank is launching an advertisement campaign for a new product. You have been instructed by the project sponsor to complete some milestones with the available skilled resources. From a project management perspective, this is',
    options: [
      'Constraint',
      'Assumption',
      'Discretionary dependency',
      'Mandatory dependency',
    ],
    correctAnswer: 0,
    explanation: 'Examples of constraints include, but are not limited to: available skilled resources, and contract terms and requirements.',
    category: 'Project Procurement Management',
    difficulty: 'medium'
  },
  {
    id: 'Q143',
    question: 'While walking down the hallway, you meet your project sponsor who wants to know the status and percent complete of your project. What would be the percent complete in your project from the following data? Earned Value of the project = $3,000 Budget at completion of the project = $5,000 Cost performance of the project = 1.2',
    options: [
      '71%',
      '60%',
      '71.4%',
      '60.3%',
    ],
    correctAnswer: 1,
    explanation: 'Percent Complete = EV/BAC x 100 = 3000/5000 x 100 = 60%',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q144',
    question: 'You are monitoring the technical performance of your website. Past data on the number of users and their experience helps you forecast how your website would perform if the number of users increases in the future. This is an example of',
    options: [
      'Design of experiments',
      'Control chart',
      'Organizational process assets',
      'Trend analysis',
    ],
    correctAnswer: 3,
    explanation: 'Trend Analysis . An analytical technique that uses mathematical models to forecast future outcomes based on historical results. It is a method of determining the variance from a baseline of a budget, cost, schedule, or scope parameter by using prior progress reporting periods’ data and projecting how much that parameter’s variance from baseline might be at some future point in the project if no changes are made in executing the project.',
    category: 'Project Scope Management',
    difficulty: 'medium'
  },
  {
    id: 'Q145',
    question: 'All the project managers should be good at delegation because this helps them concentrate on leadership activities and delegate routine activities. In this context, which, out of the following, can a project manager delegate to her subordinates ?',
    options: [
      'Long -range planning',
      'Performance appraisals',
      'Project monitoring and controlling',
      'Personal matters',
    ],
    correctAnswer: 2,
    explanation: 'A manager should not delegate long -range planning, performance appraisals, personal matters, or leadership activities to her subordinates. She can, however, delegate routine project monitoring and controlling activities.',
    category: 'Project Integration Management',
    difficulty: 'hard'
  },
  {
    id: 'Q146',
    question: 'In your project, you want to extend the project schedule to reduce the threat that your project may not get the resources in time to complete the project. This is an example of',
    options: [
      'Develop Schedule',
      'Avoid risk',
      'Mitigate risk',
      'Secondary risk',
    ],
    correctAnswer: 1,
    explanation: 'Avoid. Risk avoidance involves changing the project management plan to eliminate the threat entirely. The project manager may also isolate the project objectives from the risk’s impact or change the objective that is in jeopardy. Examples of this include extending the schedule, changing the strategy, or reducing scope.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q147',
    question: 'Your project is being carried out under contract and the buyer is conducting process reviews to determine how well you (seller) are doing with the contract. This review will not help to',
    options: [
      'Establish corrective actions, if required',
      'Measure the competency of seller to perform similar work in the future',
      'Evaluate proposals from multiple sellers',
      'Determine if some contractual obligations are not being met',
    ],
    correctAnswer: 2,
    explanation: 'Evaluations are carried out when it is necessary to confirm whether the seller is meeting the contractual obligations, and when the buyer contemplates corrective actions.',
    category: 'Project Procurement Management',
    difficulty: 'hard'
  },
  {
    id: 'Q148',
    question: 'You are a project manager. During which process will you obtain seller responses, select a seller, and award a contract?',
    options: [
      'Manage Stakeholder Engagement',
      'Plan Procurement Management',
      'Conduct Procurements',
      'Control Procurements',
    ],
    correctAnswer: 2,
    explanation: 'Conduct Procurements is the process of obtaining seller responses, selecting a seller, and awarding a contract.',
    category: 'Project Procurement Management',
    difficulty: 'easy'
  },
  {
    id: 'Q149',
    question: 'You are in the Close Project or Phase process of the project. You finalize all activities across all the project management process groups to formally complete the phase or project. You also review prior phase, customer acceptance, and project transfer documentation. These documents are also referred to as',
    options: [
      'Project or phase closu re documents',
      'Project plan',
      'Historical information',
      'Project records',
    ],
    correctAnswer: 0,
    explanation: 'Project or phase closure documents, consisting of formal documentation that indicates completion of the project or phase and the transfer of the completed project or phase deliverables to others, such as an operations group or to the next phase.',
    category: 'Project Risk Management',
    difficulty: 'hard'
  },
  {
    id: 'Q151',
    question: 'You are defining a distribution of possible activity durations for each schedule activity and calculating a distribution of possible outcomes for the total project. This technique is known as',
    options: [
      'Resource leveling',
      'Monte Carlo Analysis',
      'Critical chain method',
      'Critical path method',
    ],
    correctAnswer: 1,
    explanation: 'Monte Carlo Analysis is a technique in which a distribution of possible activity durations is defined for each activity and used to calculate distribution of possible outcomes for the total project.',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q152',
    question: 'As a project manager, you are required to produce project performance reports on a regular basis, your project`s budget at completion is $750,000, planned value is $100,000, schedule variance is $30,000, and cost variance is $50,000. What is the percent complete and estimate at completion in your project?',
    options: [
      '18.00%, $500,000',
      '17.33%, $461,538',
      '17.80%, $437,500',
      '18.00%, $437,500',
    ],
    correctAnswer: 1,
    explanation: 'SV = EV – PV EV = SV + PV = $30,000 + $100,000 = $130,000 CV = EV – AC AC = EV - CV = $130,000 – $50,000 = $80,000 CPI =$130,000 / $80,000 =1.625 Percent Complete = EV/BAC x 100 = $130,000 / $750,000 x 100 = 17.33% Estimate at Complete (EAC) = BAC/CPI = $750,000/1.625 = $461,538',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q153',
    question: 'In a scatter diagram, if points are close to the diagonal line, it indicates that',
    options: [
      'Scatter diagram has some erroneous data',
      'Three variables are closely correlated',
      'Independent and dependent variables are related',
      'No inference can be made from the analysis',
    ],
    correctAnswer: 2,
    explanation: 'A scatter diagram shows the relationship between two variables. This tool allows the quality team to study and identify the possible relationship between changes observed in two variables. Dependent variables versus independent variables are plotted. The closer the points are to a diagonal line, the more closely they are related.',
    category: 'Project Quality Management',
    difficulty: 'easy'
  },
  {
    id: 'Q154',
    question: 'Your company focuses on increasing employee loyalty toward the company by providing a job for life with a strong focus on the well -being of the employees. The organization theory your company believes in is',
    options: [
      'Maslow`s hierarchy of needs',
      'Theory X',
      'Theory Z',
      'David McClelland theory',
    ],
    correctAnswer: 2,
    explanation: 'Theory Z focuses on increasing employee loyalty toward the company by providing a job for life with a strong focus on the well-being of the employee, both on and off the job. Theory Z was developed by Ouchi.',
    category: 'Project Resource Management',
    difficulty: 'medium'
  },
  {
    id: 'Q155',
    question: 'When doing risk response planning, you have come to know that the project involves use of new technology which is not tested properly. The risk is so high that your sponsor decides to terminate the project. This management decision to terminate the project is an example of',
    options: [
      'Terminate risk',
      'Avoid risk',
      'Mitigate risk',
      'Close Project',
    ],
    correctAnswer: 1,
    explanation: 'Avoid. Risk avoidance involves changing the project management plan to eliminate the threat entirely… The most radical avoidance strategy is to shut down the project entirely.',
    category: 'Project Risk Management',
    difficulty: 'easy'
  },
  {
    id: 'Q156',
    question: 'Which of the following is not true about conducting procurement negotiations?',
    options: [
      'The project manager should be the lead negotiator.',
      'Subjects covered may include responsibilities, authority to make changes, applicable terms, and governing law.',
      'For complex procurement items, contract negotiations can be an independent process with inputs and outputs of its own.',
      'Negotiations should clarify the structure, requirements, and other terms of the purchases.',
    ],
    correctAnswer: 0,
    explanation: 'The project manager may not be the lead negotiator on procurements. The project manager and other members of the project management team may be present during negotiations to provide assistance, and if needed to add clarification on the project’s technical, quality, and management requirements.',
    category: 'Project Schedule Management',
    difficulty: 'medium'
  },
  {
    id: 'Q157',
    question: 'Which of the following processes occurs in the Planning Process Group?',
    options: [
      'Identify Risks',
      'Manage Stakeholders Engagement',
      'Acquire Project Team',
      'Identify Stakeholders',
    ],
    correctAnswer: 0,
    explanation: 'Identify Risks happens during Planning Process Group.',
    category: 'Project Resource Management',
    difficulty: 'medium'
  },
  {
    id: 'Q158',
    question: 'Your project is terminated early. To investigate and document the reasons for the early termination of the project, you follow certain procedures. This is performed during',
    options: [
      'Validate Scope process',
      'Close Procurements process',
      'Close Project or Phase process',
      'Control Quality process',
    ],
    correctAnswer: 2,
    explanation: 'Close Project or Phase is the process of finalizing all activities across all of the Project Management Process Groups to formally complete the project or phase....The Close Project or Phase process also establishes the procedures to investigate and docume nt the reasons for actions taken if a project is terminated before completion.',
    category: 'Project Scope Management',
    difficulty: 'medium'
  },
  {
    id: 'Q159',
    question: 'Your company is in the process of developing a new product line, and you have been tasked with managing the project to design and develop one of those new products. This will be the first of the new products to be developed, and you want to ensure that the requirements are well defined, and captured. For this purpose, you want to bring k ey cross -functional stakeholders together to define product requirements. The well -facilitated sessions can build trust, foster relationships, and improve communication among the participants which can lead to increased stakeholder consensus. This is an ex ample of',
    options: [
      'Focus groups',
      'Facilitated workshops',
      'Group creativity techniques',
      'Group decision making techniques',
    ],
    correctAnswer: 1,
    explanation: 'Facilitated workshops are focused sessions that bring key stakeholders together to define product requirements. Workshops are considered a primary technique for quickly defining cross -functional requirements and reconciling stakeholder differences. Because of their interactive group nature , well -facilitated sessions can build trust, foster relationships, and improve communication among the participants, which can lead to increased stakeholder consensus. In addition, issues can be discovered earlier and resolved more quickly than in individu al sessions.',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q160',
    question: 'In your project, you have found that a deviation from the schedule baseline has occurred. You want to determine the reason and level of variance relative to the schedule baseline so that corrective action can be taken. Which of the following tools would you use for this purpose?',
    options: [
      'Scheduling tool',
      'Performance reviews',
      'What -If Scenario analysis',
      'Project Management Software',
    ],
    correctAnswer: 3,
    explanation: 'Project management software for scheduling provides the ability to track planned dates versus actual dates, to report variances to and progress made against the baseline, and to forecast the effects of changes to the project schedule model.',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q161',
    question: 'The actual cost of your project is $200,000, budget at completion is $325,000, and the cost variance is -$25,000. From the data above calculate the To -complete performance index of your project, given that, senior management did not agree to revise the est imate at completion based on current performance. AC = $200,000 BAC = $325,000 CV = -$25,000',
    options: [
      '0.7',
      '1.2',
      '0.8',
      '1.0',
    ],
    correctAnswer: 1,
    explanation: 'CV = EV - AC EV = AC + CV = $200,000 + ( -$25,000) = $175,000 CPI = EV/AC = $175,000/$200,000 = 0.875 To-complete performance index (TCPI) = (BAC - EV) / (BAC - AC) = ($325,000 - $175,000) / ($325,000 - $200,000) = $150,000 / $125,000 = 1.2',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q162',
    question: 'In your pro ject, you examine the work products to determine whether they conform to documented standards. This includes measurements conducted at various levels to determine the quality of the product. In this context, the appropriate tool to use is',
    options: [
      'Inspection',
      'Control chart',
      'Run chart',
      'Histogram',
    ],
    correctAnswer: 0,
    explanation: 'An inspection is the examination of a work product to determine whether it conforms to documented standards. The results of an inspection generally include measurements and may be conducted at any level. For example, the results of a single activity can be inspected, or the final product of the project can be inspected.',
    category: 'Project Quality Management',
    difficulty: 'hard'
  },
  {
    id: 'Q163',
    question: 'In the Executing phase of a project, a project manager should ideally be',
    options: [
      'Coaching',
      'Directing',
      'Authoritarian',
      'Supportive',
    ],
    correctAnswer: 0,
    explanation: 'Given below are the different leadership styles adopted by the project manager during various phases of the project: During Initiating phase of the project, the leadership style will be Directing. During Planning, Executing, Monitoring and Controlling phases of the project, the leadership style will be Facilitating and Coaching. During Closing phase, the leadership style will be Supportive.',
    category: 'Project Integration Management',
    difficulty: 'medium'
  },
  {
    id: 'Q164',
    question: 'When your company buys computers from Dell, you also pay extra for a three year warranty which ensures that any manufacturing defects will be taken care of by Dell. The risk response strategy used is',
    options: [
      'Exploit',
      'Avoid',
      'Mitigate',
      'Transfer',
    ],
    correctAnswer: 3,
    explanation: 'Transfer. Risk transference is a risk response strategy whereby the project team shifts the impact of a threat to a third party, together with ownership of the response… Transference tools can be quite diverse and include, but are not limited to, the use of insurance, performance bonds, warranties, guarantees, etc.',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q165',
    question: 'In your project, you are creating documents which will be used to solicit proposals from prospective sellers. These can also be referred to as',
    options: [
      'Procurement management plan',
      'Procurement documents',
      'Contract',
      'Procurement statement of work',
    ],
    correctAnswer: 1,
    explanation: '`Procurement documents` are used to solicit proposals from prospective sellers and is one of the outputs of the Plan Procurement Management process.',
    category: 'Project Procurement Management',
    difficulty: 'medium'
  },
  {
    id: 'Q166',
    question: 'In which Process Group will work defined be completed and all the specifications of your project be satisfied?',
    options: [
      'Planning Process Group',
      'Executing Process Group',
      'Monitoring and Controlling Process Group',
      'Closing Process Group',
    ],
    correctAnswer: 1,
    explanation: 'The Executing Process Group consists of those processes performed to complete the work defined in the project management plan to satisfy the project specifications.',
    category: 'Project Integration Management',
    difficulty: 'easy'
  },
  {
    id: 'Q167',
    question: 'You create a project charter that formally authorizes a project or a phase, and documents initial requirements that satisfy the stakeholder`s needs and expectations. In this context, which of the following will not be included in the project charter?',
    options: [
      'Assumptions and Constraints',
      'High level requirements',
      'Assigned project manager, responsibility and authority level',
      'Measurable project objectives and related success criteria',
    ],
    correctAnswer: 0,
    explanation: 'Please refer to table 5 -1, page 124, PMBOK® Guide Fifth Edition.',
    category: 'Project Stakeholder Management',
    difficulty: 'medium'
  },
  {
    id: 'Q168',
    question: 'Validate Scope is the process of formalizing acceptance of the completed project deliverables. In this context, which statement related to Validate Scope process is correct?',
    options: [
      'Validate Scope process is similar to Control Quality process.',
      'Validate Scope process is normally performed after Control Quality process, but these two processes may also be performed in parallel.',
      'Validate Scope process indicates the end of a project.',
      'Validate Scope process is the final sign -off from the sponsor and customer.',
    ],
    correctAnswer: 1,
    explanation: 'Control Quality is generally performed before Validate Scope, although the two processes may be performed in parallel.',
    category: 'Project Scope Management',
    difficulty: 'medium'
  },
  {
    id: 'Q169',
    question: 'Which of the following items is not included in schedule data?',
    options: [
      'Order and delivery schedules',
      'Cash -flow projections',
      'Resource histograms',
      'Cost baseline',
    ],
    correctAnswer: 3,
    explanation: 'Schedule data could include such items as resource histograms, cash -flow projections, and order and delivery schedules.',
    category: 'Project Schedule Management',
    difficulty: 'easy'
  },
  {
    id: 'Q170',
    question: 'For your project, find the To -complete performance index (TCPI) based on the given data: Budget at completion of the project = $700,000 Cost variance of the project = $25,000 Earned value of the project = $200,000 Estimate to Complete has now been revised to $425,000',
    options: [
      '0.9',
      '1.176',
      '1.5',
      '-1.5',
    ],
    correctAnswer: 1,
    explanation: 'CV = EV - AC AC = EV - CV = $200,000 - $25,000 = $175,000 EAC = AC + ETC = $175000 + $425000 = $600,000 To-complete performance index (TCPI) = (BAC - EV) / (EAC - AC) = ($700,000 - $200,000) / ($600,000 - $175,000) = $500,000 / $425000 = 1.176',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q171',
    question: 'Which of the following statements related to precision and accuracy is correc t?',
    options: [
      'Precise measurements are always accurate',
      'Accurate measurements are always precise',
      'High precision measurements have little scatter',
      'Accuracy means that measurements are clustered',
    ],
    correctAnswer: 2,
    explanation: 'Precision is a measure of exactness... Accuracy is an assessment of correctness...Precise measurements are not necessarily accurate measurements, and accurate measurements are not necessarily precise measurements.',
    category: 'Project Integration Management',
    difficulty: 'medium'
  },
  {
    id: 'Q172',
    question: 'You are a project manager in an IT consultancy firm, where you notice that data expands to fill the space available for storage. You have to constantly keep upgrading your data storage capacity and processor speed. This is an example of',
    options: [
      'McClelland`s theory',
      'Parkinson`s law',
      'Intel`s law',
      'Law of diminishing returns',
    ],
    correctAnswer: 1,
    explanation: 'Parkinson`s Law: Work expands so as to fill the time available for its completion. Some variations of this theory are "Data expands to fill the space available for storage" and "Expenditure rises to meet income."',
    category: 'Project Integration Management',
    difficulty: 'medium'
  },
  {
    id: 'Q173',
    question: 'Your project team has decided not to change the project management plan to deal with a risk. This is an example of',
    options: [
      'Contingent response',
      'Avoid',
      'Fallback plan',
      'Accept',
    ],
    correctAnswer: 3,
    explanation: 'Accept. Risk acceptance is a risk response strategy whereby the project team decides to acknowledge the risk and not take any action unless the risk occurs...This strategy indicates that the project team has decided not to change the project management plan to deal with a risk, or is unable to identify any other suitable response strategy.',
    category: 'Project Risk Management',
    difficulty: 'hard'
  },
  {
    id: 'Q174',
    question: 'You are planning to award a contract and are evaluating sellers, using criteria like management approach, technical approach, life -cycle cost, and production capacity and interest. These criteria are called',
    options: [
      'Screening criteria',
      'Source selection criteria',
      'Evaluation criteria',
      'Contract selection methods',
    ],
    correctAnswer: 1,
    explanation: 'Source selection criteria are often included as part of the procurement solicitation documents. Such criteria are developed and used to rate or score seller proposals, and can be objective or subjective. Other selection criteria can be identified and documented to support an assessment for more complex products, services, or results. Some examples are: understanding of need, overal l or life -cycle cost, technical capability, risk, management approach, technical approach, etc.',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q175',
    question: 'You are a project manager. You have completed the project. While reviewing the costs, you observed that most of the project`s budget was utilized for activities performed in processes relating to one particular process group. This Process Group is',
    options: [
      'Planning Process Group',
      'Executing Process Group',
      'Monitoring and Controlling Process Group',
      'Closing Process Group',
    ],
    correctAnswer: 1,
    explanation: 'A large portion of the project`s budget will be expended in performing the Executing Process Group processes.',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q176',
    question: 'You are monitoring and controlling your project, when your team members ask for some corrective action and preventive actions for errors. Some defects should also be handled through defect repair. You will include all this as part of',
    options: [
      'Work Performance Information',
      'Work Performance Measurements',
      'Change Requests',
      'Organizational Process Assets',
    ],
    correctAnswer: 2,
    explanation: 'Change requests may include corrective action, preventive action, and defect repairs.',
    category: 'Project Communications Management',
    difficulty: 'hard'
  },
  {
    id: 'Q177',
    question: 'When you started creating a work breakdown structure for your project, you realized that it was too complicated to be done on a single piece of paper. You then started using a work breakdown structure numbering system to',
    options: [
      'Determine the complexity of the project',
      'Determine the level at which individual WBS elements are found',
      'Help in automating the WBS using appropriate software',
      'Present',
    ],
    correctAnswer: 1,
    explanation: 'The WBS is finalized by assigning each work package to a control account and establishing a unique identifier for that work package from a code of accounts. These identifiers provide a structure for hierarchical summation of costs, schedule, and resource information.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q178',
    question: 'A major difference between decomposition in the context of Define Activities process as compared to decomposition in the context of Create WBS process is that',
    options: [
      'The final output of Define Activities process using decomposition is defined as work packages and the final output of Create WBS process using decomposition is defined as deliv erables',
      'The final output of Define Activities process using decomposition is defined as activities, and the final output of Create WBS process using decomposition is defined as control accounts',
      'The final output of Define Activities process using decomposition is defined as deliverables and the final output of Create WBS process using decomposition is defined as activities',
      'The final output of Define Activities process using decomposition is defined as activit ies, and the final output of Create WBS process using decomposition is defined as deliverables',
    ],
    correctAnswer: 3,
    explanation: 'The Define Activities process defines the final outputs as activities rather than deliverables, as done in the Create WBS process.',
    category: 'Project Scope Management',
    difficulty: 'medium'
  },
  {
    id: 'Q179',
    question: 'In your project you had planned to have Tasks A, B & C completed already, however tasks A, B, C, and D are 100%, 80%, 0%, and 0% complete respectively. The value of each day of work is $100. Using the 0 -100 Rule and the information given below, calculate t he SPI: Task Duration % Complete A 3 Days 100% B 5 Days 80% C 4 Days 0% D 3 Days 0%',
    options: [
      '0.25',
      '1.00',
      '0.50',
      '0.75',
    ],
    correctAnswer: 0,
    explanation: 'To calculate SPI, you just use the equation SPI = EV/PV. In this case EV = 3 days. Since, we are applying the 0 -100 rule, we can only say that Task A counts towards earned value (value of work completed). We say that Task A has 100% of its value of 3 days (or $300), and Task B only co unts as 0% (even though it is currently at 80% completion, but, because of the 0 -100 rule we assume 0 for EV for this task). PV would be 12 days (or $1200) because we planned to have Tasks A, B & C done by this point. Therefore, SPI = 3/12 = 0.25. We a re behind schedule. Note: This logic would also work if $ values are given instead of durations.',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q180',
    question: 'The concepts of "Zero Defects" and "Right First Time" were formulated by',
    options: [
      'Genichi',
      'Deming',
      'Crosby',
      'Juran',
    ],
    correctAnswer: 2,
    explanation: 'Philip Crosby defined quality as "Zero Defects" and "Right First Time".',
    category: 'Project Quality Management',
    difficulty: 'easy'
  },
  {
    id: 'Q181',
    question: 'You are the project manager of a project team that includes several new recruits. You notice that most of the team members possess "I am right mentality" and put forth their own ideas for consideration. In this context, your team is in which of the following stages of group development ?',
    options: [
      'Forming',
      'Storming',
      'Conflicting',
      'Performing',
    ],
    correctAnswer: 1,
    explanation: 'Tuckman described five stages of team development. Teams usually go through the stages in order, but it is possible for teams to skip a stage or get stuck in, or revert to a previous stage. 1. Forming – Team meets, learns their roles and responsibilities and agree on goals; individuality is at its highest during this phase 2. Storming – Team starts working on the project; competition may result from different individual ideas; “I am right” mentality 3. Norming – Team members adjust their behavior to work as a team; learn to trust each other; “We can work together” mentality 4. Performing – Teams are able to functi on as an organized and interdependent unit as they find ways to get the job done smoothly and effectively 5. Adjourning – Completing the task and moving on from the project as staff are released during project or phase closure',
    category: 'Project Resource Management',
    difficulty: 'hard'
  },
  {
    id: 'Q182',
    question: 'If you create a contingency reserve to manage risks in your project, this can be referred to as',
    options: [
      'Avoidance',
      'Passive acceptance',
      'Active acceptance',
      'Mitigation',
    ],
    correctAnswer: 2,
    explanation: 'Passive acceptance requires no action except to document the strategy, leaving the project team to deal with the risks as they occur, and to periodically review the threat to ensure that it does not change significantly. The most common active acceptance strategy is to establish a contingency reserve, including amounts of time, money, or resources to handle the risks.',
    category: 'Project Resource Management',
    difficulty: 'hard'
  },
  {
    id: 'Q183',
    question: 'Contracts are formal legal documents and can be amended at any time prior to contract closure by mutual consent, in accordance with the change control terms of the contract. In this context, you should be aware that',
    options: [
      'Contract administration is usually an integral part of project organization',
      'Contract administration is usually an administrative function separate from the project organization',
      'Contract administration is usually outsourced to an external agency or company',
      'Contract administration is always done alike in all organizations',
    ],
    correctAnswer: 1,
    explanation: 'Due to varying organizational structures, many organizations treat contract administration as an administrative function separate from the project organization.',
    category: 'Project Procurement Management',
    difficulty: 'medium'
  },
  {
    id: 'Q184',
    question: 'Your project team had a meeting with the customer (during Validate Scope process) for getting formal acceptance of the project deliverables. This activity is a part of which Process Group?',
    options: [
      'Closing',
      'Executing',
      'Planning',
      'Monitoring and Controlling',
    ],
    correctAnswer: 3,
    explanation: 'Validate Scope is done as part of Monitoring and Controlling Process Group.',
    category: 'Project Scope Management',
    difficulty: 'medium'
  },
  {
    id: 'Q185',
    question: 'While developing the Scope Management Plan, it is important to consider the following environmental factors',
    options: [
      'Organization culture, marketplace conditions, and company infrastructure',
      'Organizational policies and procedures',
      'Lessons learned and historical information',
      'Scope Management Plan template',
    ],
    correctAnswer: 0,
    explanation: 'Enterprise environmental factors are conditions, not under the immediate control of the team, that influence, constrain, or direct the project, program, or portfolio. The enterprise environmental factors that can influence the Plan Scope Management process include, but are not limited to: organization’s culture, infrastructure, personnel administration, and marketplace conditions.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q186',
    question: 'Which of the following statements about the activity list produced as an output from the Define Activities process is incorrect?',
    options: [
      'The activity list must include all activities that will be performed on the project',
      'The activity list should include descriptions of major activities in sufficient detail',
      'The activity list should include activity duration estimates and scope of work description for each activity',
      'The activity list is obtained through decomposition of work packages.',
    ],
    correctAnswer: 2,
    explanation: 'The activity list is a comprehensive list that includes all schedule activities required on the project. The activity list al so includes the activity identifier and a scope of work description for each activity in sufficient detail.',
    category: 'Project Scope Management',
    difficulty: 'hard'
  },
  {
    id: 'Q187',
    question: 'As a project sponsor you are expecting a return of $5,500 in 3 years. Assuming the current interest rate is 20%, what`s the current value of your expected return?',
    options: [
      '$3,183',
      '$4,267',
      '$5,500',
      '$3,819',
    ],
    correctAnswer: 0,
    explanation: 'PV = FV / [(1 + r)n] where FV is the Future Value (amount of money you are getting in the future; in this case FV is $5,500), r is the discount/interest rate (in this case r is 20%), n is the time period (in this case n is 3 years) PV = $5,500 / [(1 + .20) 3] PV = $3,182.87 (rounded to $3,183)',
    category: 'Project Cost Management',
    difficulty: 'hard'
  },
  {
    id: 'Q188',
    question: 'In your project, you are managing the construction of a $100 million hospital. You wish to use rank -ordering to determine the causes for defects in Construction. In this context, the appropriate tool to use is',
    options: [
      'Pareto chart',
      'Control chart',
      'Run chart',
      'Histogram',
    ],
    correctAnswer: 0,
    explanation: 'A Pareto chart, also referred to as Pareto diagram, is a specific type of histogram, ordered by frequency of occurrence. It shows how many defects are generated by type or category of identified cause. Rank ordering is used to focus corrective action.',
    category: 'Project Quality Management',
    difficulty: 'hard'
  },
  {
    id: 'Q189',
    question: 'According to McClelland`s theory, managers are not motivated by',
    options: [
      'Need for achievement',
      'Need for power',
      'Need for affiliation',
      'Need for recognition',
    ],
    correctAnswer: 3,
    explanation: 'According to David McClelland`s theory (also called Achievement Motivation Theory), managers are motivated by: - Need for achievement - Need for power - Need for affiliation',
    category: 'Project Integration Management',
    difficulty: 'hard'
  },
  {
    id: 'Q1',
    question: '90 As a project manager, you are in the process of creating, collecting, distributing, storing, retrieving, and the ultimate disposition of project information in accordance with the communications management plan. Which of the following tools should you use?',
    options: [
      'Stakeholder analysis',
      'Communication methods',
      'Expert judgement',
      'Communication requirement analysis',
    ],
    correctAnswer: 1,
    explanation: 'Manage Communications is the process of creating, collecting, distributing, storing, retrieving, and the ultimate disposition of project information in accordance with the communications management plan. Communication methods is one of the tools and techni ques used for this process.',
    category: 'Project Stakeholder Management',
    difficulty: 'hard'
  },
  {
    id: 'Q191',
    question: 'Kelly, a new project manager in your organization, is ready to enter into a contract with a buyer for supply of ball bearings , but is unsure of the type of contract she should select. Which type of contract represents the highest risk to the seller?',
    options: [
      'Cost reimbursable plus incentive',
      'Fixed -price',
      'Fixed price plus incentive',
      'Cost-reimbursable',
    ],
    correctAnswer: 1,
    explanation: 'Sellers under fixed -price contracts are legally obligated to complete such contracts, with possible financial damages, if they do not.',
    category: 'Project Cost Management',
    difficulty: 'medium'
  },
  {
    id: 'Q1',
    question: '92 Which project document is used for documenting and monitoring elements under discussion or in dispute between project stakeholders?',
    options: [
      'Dispute log',
      'Issue log',
      'Change log',
      'Problem log',
    ],
    correctAnswer: 1,
    explanation: 'Issue log: A project document used to document and monitor elements under discussion or in dispute between project stakeholders.',
    category: 'Project Integration Management',
    difficulty: 'easy'
  },
  {
    id: 'Q193',
    question: 'Which of the following is important to consider when creating the Requirements Management Plan due to its influence on how requirements will be managed throughout the project life cycle?',
    options: [
      'Project team members',
      'Scope Management Plan',
      'Phase -to-phase relationship of the project',
      'Project manager',
    ],
    correctAnswer: 2,
    explanation: 'The phase -to-phase relationship (i.e., sequential or overlapping) is an important consideration when creating the Requirements Management Plan since it influences how requirements will be managed throughout the project life cycle. Many of the components of the Requirements Management Plan are based on the phase -to-phase relationship the project manager chooses as most effective for managing the project.',
    category: 'Project Scope Management',
    difficulty: 'easy'
  },
  {
    id: 'Q194',
    question: 'Assuming that the critical path of your project has duration of ten days, which of the following cannot affect the project timelines?',
    options: [
      'If the project has one critical path and you are able to decrease the duration of the critical path by one day by using a new tool.',
      'If the project has one critical path and you have to increase the duration of the critical path by one day due to delays.',
      'If the project has two critical paths and you are able to decrease the duration of one critical path by one day by using a new tool.',
      'If the project has two critical paths and you have to increase the duration of one critical path by one day due to delays.',
    ],
    correctAnswer: 2,
    explanation: 'Option 1: This will decrease the duration of the project by 1 day because the critical path decreases by 1 day. Option 2: This will increase the duration of the project by 1 day, because the critical path increases by 1 day. Option 3: This will not decrease the duration of the project. This is because even if one critical path is decreased by one day, the other critical path reta ins the same duration of 5 days; so the overall duration of the project remains at 5 days. Option 4: This will increase the duration of the project by one day, because the critical path increases by 1 day.',
    category: 'Project Schedule Management',
    difficulty: 'medium'
  },
  {
    id: 'Q195',
    question: 'In your construction project, the CPI is 1.30 and SPI is 0.85. What could be the possible reason?',
    options: [
      'A critical resource went on sick leave for a long period of time, which had not been anticipated earlier',
      'The cost of raw materials required for construction increased by 10%.',
      'You had not taken into account the inflation rate.',
      'There was four days waiting time in the curing of concrete, and work could not be done during that time.',
    ],
    correctAnswer: 0,
    explanation: 'Options 2 and 3 increase the costs. Since the project cost is not a problem (i.e., CPI is > 1), we can ignore these options. Option 4 is a known factor and a provision should have been made in the project schedule for it. Option 1 is the only alternative that could have increased the schedule time and made SPI < 1. Acronym Term Description Formula PV (BCWS) Planned Value (Budgeted Costs for Work Scheduled) Physical work to be scheduled, including the estimated value of the work EV (BCWP) Earned Value (Budgeted Costs for Work Performed) Physical work actually accomplished, including estimated value of this work AC Actual Cost Actual cost of the work completed SV Schedule Variance Negative SV: Behind Schedule Positive SV: Ahead of Schedule EV – PV CV Cost Variance Negative CV: Over Budget Positive CV: Under Budget EV – AC CPI Cost Performance Index Value got for $1 of Actual Cost EV/AC = BAC/EAC SPI Schedule Performance Index Progress as a % of Planned Progress EV/PV',
    category: 'Project Schedule Management',
    difficulty: 'hard'
  },
  {
    id: 'Q196',
    question: 'You are involved in manufacturing ball bearings using lathe machines. The ball bearings should have a diameter of 5.0 cms - allowable control limits are 4.95 cms to 5.05 cms. Measurements made after the end of the process for the bearings produced are: 4.96, 4.98, 5.01, 5.03, 5.02, 5.01, 5.03, 5.04, 5.02, 4.96, 4.98, 5.00. What is your conclusion about the process?',
    options: [
      'Process is out of control and needs to be investigated',
      'Process is in control and adjustments are not required',
      'The tool needs to be changed or re -calibrated',
      'Process should be further measured using a run chart',
    ],
    correctAnswer: 0,
    explanation: 'A process is considered out of control when a data point exceeds a control limit or if seven consecutive points are above or below the mean.',
    category: 'Project Integration Management',
    difficulty: 'hard'
  },
  {
    id: 'Q197',
    question: 'You are an excellent technical architect. Your project sponsor believes that you can be an effective project manager. This is an example of',
    options: [
      'Halo effect',
      'Pygmalion effect',
      'Galatea effect',
      'Expert concept',
    ],
    correctAnswer: 0,
    explanation: 'Halo effect: Perception of a particular outstanding trait influences the overall perception of a person.',
    category: 'Project Integration Management',
    difficulty: 'medium'
  },
  {
    id: 'Q198',
    question: 'In your project, you implemented a risk response and hired an additional skilled technical resource that can help in testing your application. However, you are worried that the technical resource may leave - this new risk can also be called',
    options: [
      'Secondary risk',
      'Acceptance risk',
      'Fallback Plan',
      'Workaround',
    ],
    correctAnswer: 0,
    explanation: 'Secondary Risk. A risk that arises as a direct result of implementing a risk response.',
    category: 'Project Risk Management',
    difficulty: 'hard'
  },
  {
    id: 'Q199',
    question: 'You are a project manager in charge of developing a new fuel efficient car and have decided to procure the multi -point fuel injection system from an external vendor. You are now evaluating proposals from prospective sellers. During which of the following project management processes does this activity take place?',
    options: [
      'Plan Procurements',
      'Administer Procurements',
      'Close Procurements',
      'Conduct Procurements',
    ],
    correctAnswer: 3,
    explanation: 'Conduct Procurements is the process of obtaining seller responses, selecting a seller, and awarding a contract.',
    category: 'Project Procurement Management',
    difficulty: 'hard'
  },
  {
    id: 'Q200',
    question: 'Who should be in charge of the project during the Close Project process?',
    options: [
      'Sponsor',
      'Project manager',
      'Customer',
      'Project closing functional expert',
    ],
    correctAnswer: 1,
    explanation: 'A project manager is identified and assigned as early in the project as is feasible, preferably while the project charter is being developed and always prior to the start of planning.',
    category: 'Project Integration Management',
    difficulty: 'medium'
  }
];

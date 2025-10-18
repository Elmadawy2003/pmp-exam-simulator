import { Question } from '@/types/question';
import { sampleQuestions as sampleQuestions1 } from './sampleQuestions1';
import { sampleQuestions as sampleQuestions2 } from './sampleQuestions2';
import { sampleQuestions as sampleQuestions3 } from './sampleQuestions3';
import { sampleQuestions as sampleQuestions4 } from './sampleQuestions4';
import { UserStorageManager } from '../lib/userStorage';

// Initial questions
const initialQuestions: Question[] = [
  {
    id: '40',
    question: 'What does SPI (Schedule Performance Index) measure?',
    options: [
      'Cost efficiency',
      'Schedule efficiency',
      'Quality performance',
      'Resource utilization'
    ],
    correctAnswer: 1,
    explanation: 'SPI measures schedule efficiency by comparing earned value to planned value (EV/PV).',
    category: 'Project Cost Management',
    difficulty: 'easy'
  }
];

// Combine all questions and remove duplicates
const combinedQuestions = [...initialQuestions, ...sampleQuestions1, ...sampleQuestions2, ...sampleQuestions3, ...sampleQuestions4];

export const allQuestions = combinedQuestions;

// Function to get random questions while avoiding repetition
export function getRandomQuestions(count: number, userId?: string): Question[] {
  let availableQuestions = [...combinedQuestions];
  
  if (userId) {
    const userStorage = new UserStorageManager();
    const answeredQuestions = userStorage.getAnsweredQuestions();
    availableQuestions = combinedQuestions.filter(q => !answeredQuestions.has(q.id));
    
    // If there are not enough available questions, reset answered questions
    if (availableQuestions.length < count) {
      userStorage.resetAnsweredQuestions();
      availableQuestions = [...combinedQuestions];
    }
  }
  
  const shuffled = [...availableQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Function to get questions by category while avoiding repetition
export function getQuestionsByCategory(category: string, userId?: string): Question[] {
  let categoryQuestions = combinedQuestions.filter(q => q.category === category);
  
  if (userId) {
    const userStorage = new UserStorageManager();
    const answeredQuestions = userStorage.getAnsweredQuestions();
    categoryQuestions = categoryQuestions.filter(q => !answeredQuestions.has(q.id));
  }
  
  return categoryQuestions;
}

// Function to get questions by difficulty level while avoiding repetition
export function getQuestionsByDifficulty(difficulty: 'easy' | 'medium' | 'hard', userId?: string): Question[] {
  let difficultyQuestions = combinedQuestions.filter(q => q.difficulty === difficulty);
  
  if (userId) {
    const userStorage = new UserStorageManager();
    const answeredQuestions = userStorage.getAnsweredQuestions();
    difficultyQuestions = difficultyQuestions.filter(q => !answeredQuestions.has(q.id));
  }
  
  return difficultyQuestions;
}

// Function to get balanced questions from all categories while avoiding repetition
export function getBalancedQuestions(count: number, userId?: string): Question[] {
  let availableQuestions = [...combinedQuestions];
  
  if (userId) {
    const userStorage = new UserStorageManager();
    const answeredQuestions = userStorage.getAnsweredQuestions();
    availableQuestions = combinedQuestions.filter(q => !answeredQuestions.has(q.id));
    
    // If there are not enough available questions, reset answered questions
    if (availableQuestions.length < count) {
      userStorage.resetAnsweredQuestions();
      availableQuestions = [...combinedQuestions];
    }
  }
  
  const categories = [...new Set(availableQuestions.map(q => q.category))];
  const questionsPerCategory = Math.floor(count / categories.length);
  const remainder = count % categories.length;
  
  const balancedQuestions: Question[] = [];
  
  categories.forEach((category, index) => {
    const categoryQuestions = availableQuestions.filter(q => q.category === category);
    const shuffled = [...categoryQuestions].sort(() => 0.5 - Math.random());
    const take = questionsPerCategory + (index < remainder ? 1 : 0);
    balancedQuestions.push(...shuffled.slice(0, take));
  });
  
  return balancedQuestions.sort(() => 0.5 - Math.random());
}

// Function to get available questions statistics
export function getAvailableQuestionsStats(userId?: string) {
  let availableQuestions = [...combinedQuestions];
  
  if (userId) {
    const userStorage = new UserStorageManager();
    const answeredQuestions = userStorage.getAnsweredQuestions();
    availableQuestions = combinedQuestions.filter(q => !answeredQuestions.has(q.id));
  }
  
  const categories = [...new Set(availableQuestions.map(q => q.category))];
  const difficulties = ['easy', 'medium', 'hard'] as const;
  
  return {
    total: availableQuestions.length,
    totalQuestions: combinedQuestions.length,
    byCategory: categories.reduce((acc, category) => {
      acc[category] = availableQuestions.filter(q => q.category === category).length;
      return acc;
    }, {} as Record<string, number>),
    byDifficulty: difficulties.reduce((acc, difficulty) => {
      acc[difficulty] = availableQuestions.filter(q => q.difficulty === difficulty).length;
      return acc;
    }, {} as Record<string, number>)
  };
}

// Built-in database statistics
export const questionStats = {
  total: combinedQuestions.length,
  originalQuestions: allQuestions.length,
  sampleQuestions1: sampleQuestions1.length,
  sampleQuestions2: sampleQuestions2.length,
  sampleQuestions3: sampleQuestions3.length,
  sampleQuestions4: sampleQuestions4.length,
  byCategory: combinedQuestions.reduce((acc, q) => {
    acc[q.category] = (acc[q.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>),
  byDifficulty: combinedQuestions.reduce((acc, q) => {
    acc[q.difficulty] = (acc[q.difficulty] || 0) + 1;
    return acc;
  }, {} as Record<string, number>)
};
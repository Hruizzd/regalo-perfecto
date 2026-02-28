import { createContext, useContext, useState, ReactNode } from 'react';

export type Recipient = 'pareja' | 'amigo' | 'madre' | 'padre' | 'nino' | 'companero';
export type AgeRange = '0-12' | '13-20' | '21-35' | '36-55' | '56+';
export type Budget = '0-20' | '20-50' | '50-100' | '100+';
export type Interest = 'tecnologia' | 'deporte' | 'cocina' | 'arte' | 'lectura' | 'experiencias';

interface QuizState {
  recipient: Recipient | null;
  age: AgeRange | null;
  budget: Budget | null;
  interest: Interest | null;
}

interface QuizContextType {
  state: QuizState;
  setRecipient: (value: Recipient) => void;
  setAge: (value: AgeRange) => void;
  setBudget: (value: Budget) => void;
  setInterest: (value: Interest) => void;
  resetQuiz: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export function QuizProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<QuizState>({
    recipient: null,
    age: null,
    budget: null,
    interest: null,
  });

  const setRecipient = (value: Recipient) => {
    setState((prev) => ({ ...prev, recipient: value }));
  };

  const setAge = (value: AgeRange) => {
    setState((prev) => ({ ...prev, age: value }));
  };

  const setBudget = (value: Budget) => {
    setState((prev) => ({ ...prev, budget: value }));
  };

  const setInterest = (value: Interest) => {
    setState((prev) => ({ ...prev, interest: value }));
  };

  const resetQuiz = () => {
    setState({
      recipient: null,
      age: null,
      budget: null,
      interest: null,
    });
  };

  return (
    <QuizContext.Provider
      value={{
        state,
        setRecipient,
        setAge,
        setBudget,
        setInterest,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
}

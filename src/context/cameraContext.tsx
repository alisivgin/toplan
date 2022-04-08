import { createContext, useReducer, useContext } from 'react';

type Action = { type: 'open' } | { type: 'close' };
type State = { isOpen: boolean };
type Dispatch = (action: Action) => void;
type CameraProviderProps = { children: React.ReactNode };

const CameraContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function cameraReducer(state: State, action: Action) {
  switch (action.type) {
    case 'open': {
      return { isOpen: true };
    }
    case 'close': {
      return { isOpen: false };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function CameraProvider({ children }: CameraProviderProps) {
  const [state, dispatch] = useReducer(cameraReducer, { isOpen: false });
  const value = { state, dispatch };
  return (
    <CameraContext.Provider value={value}>{children}</CameraContext.Provider>
  );
}

function useCamera() {
  const context = useContext(CameraContext);
  if (context === undefined) {
    throw new Error('useCamera must be used within a CameraProvider');
  }
  return context;
}

export { CameraProvider, useCamera };

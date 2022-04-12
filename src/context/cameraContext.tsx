import { createContext, useReducer, useContext } from 'react';

type Action = { type: 'open' } | { type: 'close' };
type State = { isPreJoinOpen: boolean };
type Dispatch = (action: Action) => void;
type CameraProviderProps = { children: React.ReactNode };

const CameraContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function cameraReducer(state: State, action: Action) {
  switch (action.type) {
    case 'open': {
      return { isPreJoinOpen: true };
    }
    case 'close': {
      return { isPreJoinOpen: false };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function CameraProvider({ children }: CameraProviderProps) {
  const [state, dispatch] = useReducer(cameraReducer, { isPreJoinOpen: false });
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

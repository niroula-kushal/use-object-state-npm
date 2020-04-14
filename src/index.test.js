import { useObjectState } from './';
import { renderHook, act } from "@testing-library/react-hooks";

// mock timer using jest
jest.useFakeTimers();

describe('useObjectState', () => {
  it('only updates name', () => {
    const initial = {
      name : "Initial Name",
      number : 12
    };
    const { result } = renderHook(() => useObjectState(initial));
    const [state, updateState] = result.current;
    expect(state.name).toBe(initial.name);
    const newState = {
      name: "New name"
    };
    act( () => updateState(newState));
    const [alteredState, _] = result.current;
    expect(alteredState.name).toBe(newState.name);
    expect(alteredState.number).toBe(initial.number);
  })
})

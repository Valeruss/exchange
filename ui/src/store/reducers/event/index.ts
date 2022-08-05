import { EventAction, EventActionEnum, EventState } from './types';

const initialState: EventState = {
    market: 'QMALL_UAH',
    allMarkets: [],
};

export default function EventReducer (state = initialState, action: EventAction): EventState {
    switch (action.type) {
        case EventActionEnum.SET_SELECTED_MARKET:
            return { ...state, market: action.payload };
        case EventActionEnum.SET_ALL_MARKETS:
            return { ...state, allMarkets: action.payload };
        default:
            return state;
    }
}

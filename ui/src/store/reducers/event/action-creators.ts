import { EventActionEnum, SetAllMarkets, SetSelectedMarketAction } from './types';

export const EventActionCreators = {
    setSelectedMarket: (payload: String): SetSelectedMarketAction => ({ type: EventActionEnum.SET_SELECTED_MARKET, payload }),
    setAllMarkets: (payload: []): SetAllMarkets => ({ type: EventActionEnum.SET_ALL_MARKETS, payload }),
};

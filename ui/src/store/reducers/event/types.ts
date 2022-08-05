export interface EventState {
    market: String;
    allMarkets: [];
};

export enum EventActionEnum {
    SET_SELECTED_MARKET = "SET_SELECTED_MARKET",
    SET_ALL_MARKETS = "SET_ALL_MARKETS",
};

export interface SetSelectedMarketAction {
    type: EventActionEnum.SET_SELECTED_MARKET;
    payload: String;
};

export interface SetAllMarkets {
    type: EventActionEnum.SET_ALL_MARKETS;
    payload: [];
};

export type EventAction =
    SetSelectedMarketAction | 
    SetAllMarkets;

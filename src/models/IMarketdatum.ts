export interface IMarketdatum {
    SECID: string;
    BOARDID: string;
    BID?: unknown;
    BIDDEPTH?: unknown;
    OFFER?: unknown;
    OFFERDEPTH?: unknown;
    SPREAD: number;
    BIDDEPTHT: number;
    OFFERDEPTHT: number;
    OPEN: number;
    LOW: number;
    HIGH: number;
    LAST: number;
    LASTCHANGE: number;
    LASTCHANGEPRCNT: number;
    QTY: number;
    VALUE: number;
    VALUE_USD: number;
    WAPRICE: number;
    LASTCNGTOLASTWAPRICE: number;
    WAPTOPREVWAPRICEPRCNT: number;
    WAPTOPREVWAPRICE: number;
    CLOSEPRICE?: unknown;
    MARKETPRICETODAY: number;
    MARKETPRICE: number;
    LASTTOPREVPRICE: number;
    NUMTRADES: number;
    VOLTODAY: number;
    VALTODAY: number;
    VALTODAY_USD: number;
    ETFSETTLEPRICE?: unknown;
    TRADINGSTATUS: string;
    UPDATETIME: string;
    LASTBID?: unknown;
    LASTOFFER?: unknown;
    LCLOSEPRICE: number;
    LCURRENTPRICE: number;
    MARKETPRICE2: number;
    NUMBIDS?: unknown;
    NUMOFFERS?: unknown;
    CHANGE: number;
    TIME: string;
    HIGHBID?: unknown;
    LOWOFFER?: unknown;
    PRICEMINUSPREVWAPRICE: number;
    OPENPERIODPRICE: number;
    SEQNUM: number;
    SYSTIME: string;
    CLOSINGAUCTIONPRICE: number;
    CLOSINGAUCTIONVOLUME: number;
    ISSUECAPITALIZATION: number;
    ISSUECAPITALIZATION_UPDATETIME: string;
    ETFSETTLECURRENCY?: unknown;
    VALTODAY_RUR: number;
    TRADINGSESSION?: unknown;
}

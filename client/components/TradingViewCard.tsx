import React, { useEffect } from 'react'

export default function TradingViewCard(props: { companySymbol: string; }) {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js'
        script.async = true;
        const symbolName = "NASDAQ:" + props.companySymbol;
        script.innerHTML = JSON.stringify({
            "symbol": symbolName,
            "width": "100%",
            "locale": "en",
            "colorTheme": "light",
            "isTransparent": false
          });
        document.getElementById("trading-view-card").appendChild(script);
    });
    
    return (
        <div id="trading-view-card">
            <div className="tradingview-widget-container">
                <div className="tradingview-widget-container__widget"></div>
            </div>
        </div>
    );
}
import React, { useEffect } from 'react'
import { Heading, Flex, Text, Input, Spacer, Box, propNames } from "@chakra-ui/react"

export default function TradingViewCard({company: string}) {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js'
        script.async = true;
        script.innerHTML = JSON.stringify({
            "symbol": "NASDAQ:AAPL",
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
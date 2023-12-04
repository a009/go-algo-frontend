import { Box } from "@mui/material";
import React from "react";
import { TypographyMain, TypographyHeader } from "../ui/Typography";

export interface StockCardProps {
    shortname: string;
    stockID: string; // как называется на бирже GAZP, SBER, YNDX
    stockPrice: number;
    changePercent: number; // изменение цены в процентах
    change: number;
    // data: DataPoint[];
}
const StockInfo: React.FC<StockCardProps> = ({
    shortname,
    stockID,
    stockPrice,
    changePercent,
    change,
    // data,
}: StockCardProps) => {
    return (
        <Box sx={{ width: '100%', backgroundColor: 'secondary.light', borderRadius: '13.5px' }}>
            <Box padding={4}>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    sx={{ mb: 2 }}
                >
                    <TypographyMain sx={{ fontSize: '50px' }}>{shortname}</TypographyMain>
                    <Box sx={{ backgroundColor: 'white', borderRadius: '13.5px', width: '150px', boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.25)' }}>
                        <TypographyMain sx={{ width: '100%', fontSize: '30px', p: 2, m: '0 auto' }}>{stockID}</TypographyMain>
                    </Box>

                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Box display="flex">
                        <TypographyHeader sx={{ mr: 0.5, fontSize: '25px' }}>{stockPrice}</TypographyHeader>
                        <TypographyMain sx={{ textAlign: 'center' }}>RUB</TypographyMain>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        {changePercent > 0 ? (
                            <TypographyMain sx={{ color: 'green', fontSize: '25px' }} >
                                {changePercent}%
                            </TypographyMain>
                        ) : (
                            <TypographyMain sx={{ color: 'primary.main', fontSize: '25px' }}>
                                {changePercent}%
                            </TypographyMain>
                        )}
                        {change > 0 ? (
                            <TypographyMain sx={{ color: 'green', fontSize: '25px' }} >
                                {change}
                            </TypographyMain>
                        ) : (
                            <TypographyMain sx={{ color: 'primary.main', fontSize: '25px' }}>
                                {change}
                            </TypographyMain>
                        )}
                    </Box>
                </Box>
            </Box>

        </Box>
    );
};

export default StockInfo;

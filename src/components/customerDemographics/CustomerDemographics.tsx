'use client'
// components/CustomerDemographics.tsx
import React from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    GeographyProps,
} from 'react-simple-maps';
import { scaleQuantize } from 'd3-scale';
import { customerData } from '@/constants/customerDemographicData';

// Alternative geoUrl for US states
const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

const colorScale = scaleQuantize<string>()
    .domain([0, 1])
    .range(['#d6bdea', '#553c9a']); // Adjust the colors as per the requirement


const CustomerDemographics = () => {
    return (
        <div className="xl:py-6 xl:px-4 py-5 px-[13px] bg-white rounded-lg mb-6 border mx-[10.28%] lg:mx-0">
            <h2 className="text-2xl font-bold mb-4">Customer Demographic</h2>
            <hr className='my-3' />
            <div className='bg-gray-100'>
                <ComposableMap projection="geoAlbersUsa" width={1003} height={260} className='xl:h-[260px] w-full h-[216.5px]'>
                    <Geographies geography={geoUrl}>
                        {({ geographies }: { geographies: any }) =>
                            geographies.map((geo: GeographyProps) => {
                                const stateData = customerData.find(
                                    (state) => state.id === geo.id
                                );
                                const color = stateData ? colorScale(stateData.value) : '#EAEAEC';
                                return (
                                    <Geography
                                        key={geo.id}
                                        geography={geo}
                                        fill={color}
                                        style={{
                                            default: { outline: 'none' },
                                            hover: { outline: 'none' },
                                            pressed: { outline: 'none' },
                                        }}
                                    />
                                );
                            })
                        }
                    </Geographies>
                </ComposableMap>
            </div>
            <div className="flex justify-start mt-3 font-semibold text-gray-500">
                <div className="flex items-center mr-4">
                    <div className="rounded-full xl:w-[16.5] xl:h-[16.5] w-[13.5px] h-[13.5px] bg-[#553c9a] mr-2" />
                    <span className='xl:text-[15px] text-[12.5px]'>Majority Members</span>
                </div>
                <div className="flex items-center">
                    <div className="rounded-full xl:w-[16.5] xl:h-[16.5] w-[13.5px] h-[13.5px] bg-[#d6bdea] mr-2" />
                    <span className='xl:text-[15px] text-[12.5px]'>Majority Non-Members</span>
                </div>
            </div>
        </div>
    );
};

export default CustomerDemographics;

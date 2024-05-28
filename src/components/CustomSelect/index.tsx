/** @jsxImportSource theme-ui */
import { useState } from 'react';
import { Box, Label, Select } from 'theme-ui';

const CustomDropdown = ({ label, options, onSelect }: any) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionSelect = (event: any) => {
        const option = event.target.value;
        setSelectedOption(option);
        onSelect(option);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Label mb={1}>{label} <span>*</span></Label>
            <Box sx={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                <Select
                    mb={2}
                    sx={{
                        width: '100%',
                        appearance: 'none',
                        pr: 4,
                        borderColor: 'primary',
                        '&:focus': {
                            borderColor: 'secondary',
                            boxShadow: '0 0 0 2px rgba(0, 0, 0, 0.1)',
                        },
                        backgroundColor: 'white',
                        backgroundImage: 'none', // Remove default select arrow
                        position: 'relative',
                        zIndex: 1,
                        '-webkit-appearance': 'none',
                        '-moz-appearance': 'none',
                    }}
                    value={selectedOption}
                    onChange={handleOptionSelect}
                >
                    <option value="">Select an option</option>
                    {options?.map((option: any) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </Select>
                <svg sx={{
                    position: 'absolute',
                    right: 2,
                    zIndex: '2',
                    top: '43%',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 10L12.7071 15.2929C12.3166 15.6834 11.6834 15.6834 11.2929 15.2929L6 10" stroke="#252627" strokeWidth="2" strokeLinecap="round" />
                </svg>

            </Box>
        </Box>
    );
};

export default CustomDropdown;

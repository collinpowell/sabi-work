import { Flex, Box, Input } from "theme-ui"
import Image from "next/image"
import ButtonM from "../ButtonM"
import { useState } from "react"

const JoinWaitlist = ({ blue }: any) => {
    const [phone,setPhone] = useState<any>()
    
    return (
        <Flex sx={{
            display: 'flex',
            gap: [0, null, null, '13px'],
        }}>
            <Box sx={{
                gap: [0, null, null, '13px'],
                my: '15px',
                width: 'fit-content',
                display: 'flex',
                fontSize: '12px',
                position: 'relative',
                input: {
                    width: '270px',
                    color: '#5E80ED',
                    background: '#D1DBFA',
                    pl: '45px',
                    py: '17px',
                    borderRadius: '12px',
                    '::placeholder': {
                        color: '#5E80ED',
                        fontWeight: '600'
                    },
                    display: ['none', null, null, 'flex']
                },
                img: {
                    position: 'absolute',
                    my: 'auto',
                    top: 0,
                    bottom: 0,
                    ml: '15px',
                    opacity: '1'
                }
            }}>
                <Input id="phone number" onChange={(e)=>{
                    setPhone(e.target.value)
                }} name="phone number" type="number" required placeholder="Enter your phone number" />
                <Image src="/assets/phone.svg" alt="img" width={22} height={22} />
            </Box>
            <ButtonM sx={{
                gap: '10px',
                display: ['flex'],
                my: 'auto',
                mx: ['auto', null, null, 'initial'],
                borderRadius: '12px',
                background: blue ? '#1741CC' : 'white',
                color: blue ? 'white' : '#1741CC',
                height: 'fit-content',
                py: '17px',
                px: '20px',
                fontSize: '12px',
                fontWeight: '600'
            }} modal={true} phone={phone}>
                Join the waiting list
            </ButtonM>
        </Flex>
    )
}

export default JoinWaitlist
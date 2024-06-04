import { Text, Container, Heading, Box, Flex } from "theme-ui"
import { useState } from "react"
import style from './style.module.css'

const ArrowRight = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.33331 5L12.7441 9.41074C13.0695 9.73618 13.0695 10.2638 12.7441 10.5893L8.33331 15" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>

    );
}

const QuestionMark = () => {
    return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 21.6667C22.7614 21.6667 25 19.4281 25 16.6667C25 13.9052 22.7614 11.6667 20 11.6667C17.2386 11.6667 15 13.9052 15 16.6667M19.6873 27.1874H20.3123M19.6873 27.8124H20.3123M15.6667 35H24.3333C28.067 35 29.9339 35 31.3599 34.2734C32.6143 33.6342 33.6342 32.6143 34.2734 31.3599C35 29.9339 35 28.067 35 24.3333V15.6667C35 11.933 35 10.0661 34.2734 8.64006C33.6342 7.38565 32.6143 6.36578 31.3599 5.72662C29.9339 5 28.067 5 24.3333 5H15.6667C11.933 5 10.0661 5 8.64006 5.72662C7.38565 6.36578 6.36578 7.38565 5.72662 8.64006C5 10.0661 5 11.933 5 15.6667V24.3333C5 28.067 5 29.9339 5.72662 31.3599C6.36578 32.6143 7.38565 33.6342 8.64006 34.2734C10.0661 35 11.933 35 15.6667 35ZM20.8333 27.5C20.8333 27.9602 20.4602 28.3333 20 28.3333C19.5398 28.3333 19.1667 27.9602 19.1667 27.5C19.1667 27.0398 19.5398 26.6667 20 26.6667C20.4602 26.6667 20.8333 27.0398 20.8333 27.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>

    );
}

const faq = [
    {
        question: 'What is Findam?',
        answer: 'Findam is an app that connects individuals with skilled service providers in their area. Whether you need a plumber, electrician, mechanic, or any other professional, Findam helps you find and hire reliable services quickly and easily.'
    },
    {
        question: 'Is Findam free?',
        answer: 'Both service providers and clients can download and use the app for free, no subscription fee attracted to both users.'
    },
    {
        question: 'Can I trust the professionals on Findam?',
        answer: 'We vet all service providers before they are listed on Findam. Additionally, each provider has a profile with customer reviews and ratings to help you make an informed decision.'
    },
    {
        question: 'How can service providers make money on Findam?',
        answer: 'Service providers can make money from Findam by being hired to do a job, every transaction you make would be between you and the client.',
    },
    {
        question: 'Can I communicate with the service provider before booking?',
        answer: 'Yes, you can use the in-app messaging feature to communicate with service providers before making a booking to discuss your needs, negotiate, and ask any questions.',
    },
    {
        question: 'How do I contact Findam Customer Support?',
        answer: 'You can reach our customer support team via hello@findam.co, you can also reach us through the app or via our social media pages. We are here to help with any questions or issues you may have.',
    },
    {
        question: 'Can I hire or make transactions outside of findam?',
        answer: 'To ensure a smooth experience between clients and service providers, we strongly recommend using the app for all hiring and transactions. Any arrangement or payments made outside of Findam are at the clients own risk, and Findam will not be responsible for any associated costs.',
    },
    {
        question: 'Is Findam nationwide?',
        answer: 'No, Findam only operates in 3 states for now which are Lagos State, Rivers State, and Abuja. We aim is continually expanding its service areas. Enter your location in the app to see if we have service providers in your area.',
    }


]
const FAQ = () => {
    const [drop, setDrop] = useState<any>()
    return (
        <Container sx={{
            mb: '140px'
        }} id="faq">
            <Heading className={style.title} >FAQs</Heading>
            <Box sx={{
                textAlign: 'center',
                background: '#03091C',
                color: 'white',
                padding: ['25px', null, null, '100px'],
                borderRadius: ['40px',null,null,'50px'],
                h2: {
                    mb: '64px'
                }
            }}>
                <Box sx={{
                    textAlign: 'left',
                }}>
                    {faq.map(({ question, answer }, i) => {
                        return (


                            <Box key={i} sx={{
                                '.hi': {
                                    my: 'auto',
                                    color: 'white'
                                },
                                '.block': {
                                    display: 'block',
                                },
                                '.none': {
                                    display: 'none'
                                },
                                p: {
                                    mb: '32px',
                                    //transition: 'all 4s ease-in-out 1s',
                                },
                                hr: {
                                    height: '1px',
                                    border: '0.4px solid rgba(153, 153, 153, 0.5)'
                                },
                                svg: {
                                    my: '32px',
                                    mr: '16px'
                                }
                            }} onClick={() => {
                                setDrop({
                                    drop: !drop?.drop,
                                    i
                                })
                            }}>
                                <Flex sx={{
                                    width: '100%',
                                    height:'fit-content'
                                }}>
                                    <Box sx={{
                                        width: '40px'

                                    }}>
                                        <QuestionMark />
                                    </Box>
                                    <Box sx={{my:'auto',ml:['15px',null,null,'20px'],width:'100%'}}>
                                        <Text as='p' className="hi"><b>{question}</b></Text>

                                    </Box>

                                    <Box sx={{
                                        my: 'auto',
                                        ml: 'auto',
                                        width: '20px'
                                    }}>
                                        <ArrowRight />
                                    </Box>
                                </Flex>
                                <Text as='p' variant="normal" sx={{ color: 'white' }} className={drop && drop.i == i && drop.drop ? 'block' : 'none'}>{answer}</Text>
                                <hr />
                            </Box>
                        )
                    })}

                </Box>
            </Box>
        </Container>

    )
}

export default FAQ;
